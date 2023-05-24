import React from "react";
import { Table } from "semantic-ui-react";
import Avatar from "../common/Avatar/Avater";
import { ReactComponent as CheckIcon } from "../../../src/assets/icons/check-icon.svg";
import { ReactComponent as ArrowIcon } from "../../../src/assets/icons/arrow-icon.svg";
import routes from "../../routes";
import { useHistory } from "react-router-dom";
import PaginationApp from "../common/pagination/pagination-app";

const ReportesTable = () => {
  const history = useHistory();
  return (
    <div className="p-5 z-0">
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
          <Table.Row>
            <Table.Cell>d86780 - 65</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <Avatar name="Mai Ahmed" className="w-10 h-10 text-base" />
                <p className="my-auto">Mai Ahmed</p>
              </div>
            </Table.Cell>
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
            <Table.Cell>
              <button
                onClick={() => history.push(routes.app.reportes.reportesView())}
                className="text-green border-[1px] border-green rounded-full py-1 px-4"
              >
                View
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>d86780 - 65</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <Avatar name="Mai Ahmed" className="w-10 h-10 text-base" />
                <p className="my-auto">Mai Ahmed</p>
              </div>
            </Table.Cell>
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
            <Table.Cell>
              <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                View
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>d86780 - 65</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <Avatar name="Mai Ahmed" className="w-10 h-10 text-base" />
                <p className="my-auto">Mai Ahmed</p>
              </div>
            </Table.Cell>
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
            <Table.Cell>
              <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                View
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>d86780 - 65</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <Avatar name="Mai Ahmed" className="w-10 h-10 text-base" />
                <p className="my-auto">Mai Ahmed</p>
              </div>
            </Table.Cell>
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
            <Table.Cell>
              <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                View
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>d86780 - 65</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <Avatar name="Mai Ahmed" className="w-10 h-10 text-base" />
                <p className="my-auto">Mai Ahmed</p>
              </div>
            </Table.Cell>
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
            <Table.Cell>
              <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                View
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>d86780 - 65</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <Avatar name="Mai Ahmed" className="w-10 h-10 text-base" />
                <p className="my-auto">Mai Ahmed</p>
              </div>
            </Table.Cell>
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
            <Table.Cell>
              <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                View
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>d86780 - 65</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <Avatar name="Mai Ahmed" className="w-10 h-10 text-base" />
                <p className="my-auto">Mai Ahmed</p>
              </div>
            </Table.Cell>
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
            <Table.Cell>
              <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                View
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>d86780 - 65</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <Avatar name="Mai Ahmed" className="w-10 h-10 text-base" />
                <p className="my-auto">Mai Ahmed</p>
              </div>
            </Table.Cell>
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
            <Table.Cell>
              <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                View
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>d86780 - 65</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <Avatar name="Mai Ahmed" className="w-10 h-10 text-base" />
                <p className="my-auto">Mai Ahmed</p>
              </div>
            </Table.Cell>
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
            <Table.Cell>
              <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                View
              </button>
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

export default ReportesTable;
