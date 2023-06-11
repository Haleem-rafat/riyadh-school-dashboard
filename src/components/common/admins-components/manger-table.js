import React, { useEffect, useState } from "react";
import { Dimmer, Loader, Table } from "semantic-ui-react";
import Avatar from "../Avatar/Avater";
import PaginationApp from "../pagination/pagination-app";
import { useHistory, useLocation } from "react-router-dom";
import useAxios from "../../../hooks/use-axios";
import { authAxios } from "../../../config/axios-config";
import api from "../../../api";
import AddMangerModel from "./add-manger-model";
import { toast } from "react-hot-toast";
import routes from "../../../routes";
import ViewEmployeesModel from "./view-employees-model";

const MangerTable = () => {
  const history = useHistory();

  const [data, setData] = useState();
  const [pagination, SetPagination] = useState(0);
  const { search } = useLocation();

  const { run, isLoading, isError, error } = useAxios([]);
  useEffect(() => {
    if (search.includes("page") && search.includes("perPage")) {
      run(
        authAxios
          .get(`${api.app.adminsManagers.getManagers}${search}`)
          .then((res) => {
            SetPagination(res?.data?.pagination);
            setData(res?.data?.data);
          })
      );
    }
  }, [data?.data?.length, run, search]);

  const { run: runD, isLoading: isLoadingD } = useAxios([]);
  const handelDeleteManger = (mangerId) => {
    runD(authAxios.delete(api.app.adminsManagers.deleteManagers(mangerId)))
      .then((res) => {
        history.push(routes.app.admins.managers);
        toast.success("The manger has been Edit successfully");
      })
      .catch((err) => {
        toast.error(error?.massage || "something is wrong please try again");
      });
  };

  return (
    <div className="p-5 animate-in">
      <Dimmer active={isLoading || isLoadingD} inverted>
        <Loader active />
      </Dimmer>
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Emp name
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              E-mail
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Manager Team
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Details
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.map((e) => (
            <Table.Row>
              <Table.Cell>
                <div className="flex gap-x-5">
                  <Avatar name={e?.fullName} className="w-10 h-10 text-base" />
                  <p className="my-auto">{e?.fullName}</p>
                </div>
              </Table.Cell>
              <Table.Cell>{e?.email}</Table.Cell>
              <Table.Cell>
                <ViewEmployeesModel allemployees={e?.employees} />
              </Table.Cell>
              <Table.Cell>
                <div className="flex gap-x-5">
                  <AddMangerModel
                    mangerId={e?._id}
                    oldName={e?.fullName}
                    oldEmail={e?.email}
                    oldEmployees={e?.employees}
                  />
                  <button
                    onClick={() => handelDeleteManger(e?._id)}
                    className="text-red border-[1px] border-red rounded-full py-1 px-4"
                  >
                    Delete
                  </button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="flex justify-end">
        <PaginationApp totalPages={pagination?.totalPages} />
      </div>
    </div>
  );
};

export default MangerTable;
