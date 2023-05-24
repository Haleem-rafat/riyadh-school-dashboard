import React from "react";
import { Table } from "semantic-ui-react";
import { ReactComponent as CheckIcon } from "../../../../src/assets/icons/check-icon.svg";
import { ReactComponent as ArrowIcon } from "../../../../src/assets/icons/arrow-icon.svg";
import routes from "../../../routes";
import { useHistory } from "react-router-dom";
import Avatar from "../Avatar/Avater";
import PaginationApp from "../pagination/pagination-app";

const ViewDetailsTable = () => {
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
          <Table.Row>
            <Table.Cell>2023-06-5</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-green ">07:00 am</p>
                <CheckIcon className=" mt-1 " />
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-red">04:00 am</p>
                <ArrowIcon className="rotate-180 mt-1 " />
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2023-06-5</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-green ">07:00 am</p>
                <CheckIcon className=" mt-1 " />
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-red">04:00 am</p>
                <ArrowIcon className="rotate-180 mt-1 " />
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2023-06-5</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-green ">07:00 am</p>
                <CheckIcon className=" mt-1 " />
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-red">04:00 am</p>
                <ArrowIcon className="rotate-180 mt-1 " />
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2023-06-5</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-green ">07:00 am</p>
                <CheckIcon className=" mt-1 " />
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-red">04:00 am</p>
                <ArrowIcon className="rotate-180 mt-1 " />
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2023-06-5</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-green ">07:00 am</p>
                <CheckIcon className=" mt-1 " />
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-red">04:00 am</p>
                <ArrowIcon className="rotate-180 mt-1 " />
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2023-06-5</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-green ">07:00 am</p>
                <CheckIcon className=" mt-1 " />
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-red">04:00 am</p>
                <ArrowIcon className="rotate-180 mt-1 " />
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2023-06-5</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-green ">07:00 am</p>
                <CheckIcon className=" mt-1 " />
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-red">04:00 am</p>
                <ArrowIcon className="rotate-180 mt-1 " />
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2023-06-5</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-green ">07:00 am</p>
                <CheckIcon className=" mt-1 " />
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-red">04:00 am</p>
                <ArrowIcon className="rotate-180 mt-1 " />
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2023-06-5</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-green ">07:00 am</p>
                <CheckIcon className=" mt-1 " />
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-red">04:00 am</p>
                <ArrowIcon className="rotate-180 mt-1 " />
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2023-06-5</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-green ">07:00 am</p>
                <CheckIcon className=" mt-1 " />
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-red">04:00 am</p>
                <ArrowIcon className="rotate-180 mt-1 " />
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2023-06-5</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-green ">07:00 am</p>
                <CheckIcon className=" mt-1 " />
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-1">
                <p className="text-red">04:00 am</p>
                <ArrowIcon className="rotate-180 mt-1 " />
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <div className="flex justify-end">
        <PaginationApp />
      </div>
    </div>
  );
};

export default ViewDetailsTable;
