import React from "react";
import { Table } from "semantic-ui-react";
import PaginationApp from "../common/pagination/pagination-app";

const TimeSloteTable = () => {
  return (
    <div className="p-5 animate-in">
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Time Slot
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              details
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell>
              <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell>
              <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell>
              <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell>
              <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell>
              <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell>
              <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell>
              <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell>
              <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell>
              <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell>
              <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                Edit
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

export default TimeSloteTable;
