import React, { useEffect, useState } from "react";
import { Dimmer, Loader, Table } from "semantic-ui-react";
import Avatar from "../Avatar/Avater";
import PaginationApp from "../pagination/pagination-app";
import { useHistory, useLocation } from "react-router-dom";
import useAxios from "../../../hooks/use-axios";
import { authAxios } from "../../../config/axios-config";
import api from "../../../api";
import routes from "../../../routes";
import { toast } from "react-hot-toast";
import AddMangerModel from "./add-manger-model";
import AddAdminModel from "./add-admin-model";

const AdminTable = () => {
  const history = useHistory();
  const [data, setData] = useState();
  const [pagination, SetPagination] = useState(0);
  const { search } = useLocation();

  const { run, isLoading, isError, error } = useAxios([]);
  useEffect(() => {
    if (search) {
      run(
        authAxios
          .get(`${api.app.adminsManagers.getAdmins}${search}`)
          .then((res) => {
            SetPagination(res?.data?.pagination);
            setData(res?.data?.data);
            console.log("====================================");
            console.log(res);
            console.log("====================================");
          })
      );
    }
  }, [data?.data?.length, run, search]);

  console.log("====================================");
  console.log(data);
  console.log("====================================");
  const { run: runDelete, isLoading: isLoadingDelete } = useAxios([]);

  const handelDelete = (id) => {
    runDelete(
      authAxios
        .delete(`${api.app.adminsManagers.deleteAdmins(id)}${search}`)
        .then((res) => {
          history.push(routes.app.admins.default);
          toast.success("This admin has been deleted successfully");
        })
        .catch((err) => {
          toast.error(error?.massage || "something is wrong please try again");
        })
    );
  };

  return (
    <div className="p-5 animate-in">
      <Dimmer active={isLoading || isLoadingDelete} inverted>
        <Loader active />
      </Dimmer>
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="text-gray text-base font-normal">
              emp name
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              email
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              details
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.map((e) => (
            <Table.Row>
              <Table.Cell>
                <div className="flex gap-x-5">
                  <Avatar
                    name={`${e?.fullName || e?.email}`}
                    className="w-10 h-10 text-base"
                  />
                  <p className="my-auto">{`${e?.fullName || e?.email}`}</p>
                </div>
              </Table.Cell>
              <Table.Cell>{e?.email}</Table.Cell>
              <Table.Cell>
                <div className="flex gap-x-5">
                  <AddAdminModel
                    adminId={e?._id}
                    oldName={e?.fullName}
                    oldEmail={e?.email}
                  />
                  {/* <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                    Edit
                  </button> */}
                  <button
                    onClick={() => handelDelete(e?._id)}
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

export default AdminTable;
