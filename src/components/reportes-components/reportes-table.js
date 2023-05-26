import React, { useEffect, useState } from "react";
import { Dimmer, Loader, Table } from "semantic-ui-react";
import Avatar from "../common/Avatar/Avater";
import { ReactComponent as CheckIcon } from "../../../src/assets/icons/check-icon.svg";
import { ReactComponent as ArrowIcon } from "../../../src/assets/icons/arrow-icon.svg";
import routes from "../../routes";
import { useHistory, useLocation } from "react-router-dom";
import PaginationApp from "../common/pagination/pagination-app";
import useAxios from "../../hooks/use-axios";
import { authAxios } from "../../config/axios-config";
import api from "../../api";
import moment from "moment";

const ReportesTable = () => {
  const history = useHistory();
  const [data, setData] = useState();
  const [pagination, SetPagination] = useState(0);
  const { search } = useLocation();

  const { run, isLoading, isError, error } = useAxios([]);
  useEffect(() => {
    if (search) {
      run(
        authAxios.get(`${api.app.attendances.get}${search}`).then((res) => {
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
  return (
    <div className="p-5 z-0">
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
              Date
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Check In
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Check Out
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Details
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.map((e) => (
            <Table.Row>
              <Table.Cell>{e?.employee?.oracleDBNumber}</Table.Cell>
              <Table.Cell>
                <div className="flex gap-x-5">
                  <Avatar
                    name={`${e?.employee?.firstName} ${e?.employee?.lastName}`}
                    className="w-10 h-10 text-base"
                  />
                  <p className="my-auto">{`${e?.employee?.firstName} ${e?.employee?.lastName}`}</p>
                </div>
              </Table.Cell>
              <Table.Cell>
                {" "}
                {moment(e?.createdAt).format("DD/MM/YYYY")}
              </Table.Cell>
              <Table.Cell>
                <div className="flex gap-x-1">
                  <p className="text-green ">
                    {" "}
                    {moment(e?.checkIn).format("LT")}
                  </p>
                  <CheckIcon className=" mt-1 " />
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex gap-x-1">
                  <p className="text-red">{moment(e?.checkOut).format("LT")}</p>
                  <ArrowIcon className="rotate-180 mt-1 " />
                </div>
              </Table.Cell>
              <Table.Cell>
                <button
                  onClick={() =>
                    history.push(
                      routes.app.reportes.reportesView(e?.employee?._id)
                    )
                  }
                  className="text-green border-[1px] border-green rounded-full py-1 px-4"
                >
                  View
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="flex justify-end">
        <PaginationApp />
      </div>
    </div>
  );
};

export default ReportesTable;
