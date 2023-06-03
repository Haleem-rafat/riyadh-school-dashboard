import React, { useEffect, useState } from "react";
import { Dimmer, Loader, Table } from "semantic-ui-react";
import Avatar from "../common/Avatar/Avater";
import routes from "../../routes";
import PaginationApp from "../common/pagination/pagination-app";
import useAxios from "../../hooks/use-axios";
import { authAxios } from "../../config/axios-config";
import api from "../../api";
import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";
import { truncateString } from "../../utils/truncate-string";
import EditUseModel from "./edit-users-model";

const UsersTable = () => {
  const history = useHistory();
  const [data, setData] = useState();
  const [pagination, SetPagination] = useState(0);
  const { search } = useLocation();

  const { run, isLoading, isError, error } = useAxios([]);
  useEffect(() => {
    if (search) {
      run(
        authAxios.get(`${api.app.employees.default}${search}`).then((res) => {
          SetPagination(res?.data?.pagination);
          setData(res?.data?.data);
        })
      );
    }
  }, [data?.data?.length, run, search]);

  console.log("====================================");
  console.log(data);
  console.log("====================================");

  return (
    <div className="p-5 ">
      <Dimmer active={isLoading} inverted>
        <Loader active />
      </Dimmer>
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Emp no :
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Emp Name
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Group
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Time Slot
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Status
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              details
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.map((e) => (
            <Table.Row>
              <Table.Cell>{truncateString(e?._id, 9)}</Table.Cell>
              <Table.Cell>
                <div className="flex gap-x-5">
                  <Avatar
                    name={`${e?.firstName} ${e?.lastName}`}
                    className="w-10 h-10 text-base"
                  />
                  <p className="my-auto">{`${e?.firstName} ${e?.lastName}`}</p>
                </div>
              </Table.Cell>
              <Table.Cell>{e?.groups[0]?.name}</Table.Cell>
              <Table.Cell>{e?.timeSlots[0]?.name}</Table.Cell>
              <Table.Cell
                className={e?.status === "Active" ? "text-green" : "text-red"}
              >
                {e?.status === "Active" ? "Active" : "Un Active"}
              </Table.Cell>
              <Table.Cell>
                <div className="flex gap-x-5">
                  <button
                    onClick={() =>
                      history.push(routes.app.users.usersView(e?._id))
                    }
                    className="text-green border-[1px] border-green rounded-full py-1 px-4"
                  >
                    View
                  </button>
                  <EditUseModel
                    userId={e?._id}
                    oldGroup={e?.groups}
                    oldTimeSlots={e?.timeSlots}
                  />
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

export default UsersTable;
