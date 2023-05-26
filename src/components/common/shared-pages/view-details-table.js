import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { ReactComponent as CheckIcon } from "../../../../src/assets/icons/check-icon.svg";
import { ReactComponent as ArrowIcon } from "../../../../src/assets/icons/arrow-icon.svg";
import routes from "../../../routes";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Avatar from "../Avatar/Avater";
import PaginationApp from "../pagination/pagination-app";
import moment from "moment";
import useAxios from "../../../hooks/use-axios";
import api from "../../../api";
import { authAxios } from "../../../config/axios-config";

const ViewDetailsTable = ({ timeSlots }) => {
  const [data, setData] = useState();
  const [pagination, SetPagination] = useState(0);
  const { search } = useLocation();
  const { id } = useParams();

  const { run, isLoading, isError, error } = useAxios([]);
  useEffect(() => {
    if (search) {
      run(
        authAxios
          .get(`${api.app.attendances.getById(id)}${search}`)
          .then((res) => {
            SetPagination(res?.data?.pagination);
            setData(res?.data?.data);
            console.log("====================================");
            console.log(res);
            console.log("====================================");
          })
      );
    }
  }, [id, run, search]);

  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <div className="p-5">
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Date
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Check In
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Check Out
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.map((e) => (
            <Table.Row>
              <Table.Cell>
                {moment(e?.createdAt).format("DD/MM/YYYY")}
              </Table.Cell>
              <Table.Cell>
                <div className="flex gap-x-1">
                  <p className="text-green ">
                    {moment(e?.checkIn).format("LT")}
                  </p>
                  <CheckIcon className=" mt-1 " />
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex gap-x-1">
                  <p className="text-red">
                    {" "}
                    {moment(e?.checkOut).format("LT")}
                  </p>
                  <ArrowIcon className="rotate-180 mt-1 " />
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

export default ViewDetailsTable;
