import React from "react";
import { Table } from "semantic-ui-react";
import { ReactComponent as CheckIcon } from "../../../../src/assets/icons/check-icon.svg";
import { ReactComponent as ArrowIcon } from "../../../../src/assets/icons/arrow-icon.svg";
import routes from "../../../routes";
import { useHistory } from "react-router-dom";
import Avatar from "../Avatar/Avater";
import PaginationApp from "../pagination/pagination-app";
import moment from "moment";

const ViewDetailsTable = ({ timeSlots }) => {
  const history = useHistory();
  return (
    <div className="p-5">
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="text-gray text-base font-normal">
              date
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
          {timeSlots?.map((e) => (
            <Table.Row>
              <Table.Cell>
                {moment(e?.createdAt).format("DD/MM/YYYY")}
              </Table.Cell>
              <Table.Cell>
                <div className="flex gap-x-1">
                  <p className="text-green ">
                    {moment(e[0]?.from).format("h:mm A")}
                  </p>
                  <CheckIcon className=" mt-1 " />
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex gap-x-1">
                  <p className="text-red">
                    {" "}
                    {moment(e[0]?.to).format("h:mm A")}
                  </p>
                  <ArrowIcon className="rotate-180 mt-1 " />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ViewDetailsTable;
