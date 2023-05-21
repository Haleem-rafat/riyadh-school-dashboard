import React from "react";
import { Table } from "semantic-ui-react";
import Avatar from "../common/Avatar/Avater";

const UsersTable = () => {
  return (
    <div className="p-5">
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
          <Table.Row>
            <Table.Cell>d86780 - 65</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <Avatar name="Mai Ahmed" className="w-10 h-10 text-base" />
                <p className="my-auto">Mai Ahmed</p>
              </div>
            </Table.Cell>
            <Table.Cell>Ui/UX</Table.Cell>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell className="text-green">Active</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                  View
                </button>
                <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                  Edit
                </button>
              </div>
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
            <Table.Cell>Ui/UX</Table.Cell>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell className="text-green">Active</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                  View
                </button>
                <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                  Edit
                </button>
              </div>
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
            <Table.Cell>Ui/UX</Table.Cell>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell className="text-green">Active</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                  View
                </button>
                <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                  Edit
                </button>
              </div>
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
            <Table.Cell>Ui/UX</Table.Cell>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell className="text-green">Active</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                  View
                </button>
                <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                  Edit
                </button>
              </div>
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
            <Table.Cell>Ui/UX</Table.Cell>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell className="text-green">Active</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                  View
                </button>
                <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                  Edit
                </button>
              </div>
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
            <Table.Cell>Ui/UX</Table.Cell>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell className="text-green">Active</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                  View
                </button>
                <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                  Edit
                </button>
              </div>
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
            <Table.Cell>Ui/UX</Table.Cell>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell className="text-green">Active</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                  View
                </button>
                <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                  Edit
                </button>
              </div>
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
            <Table.Cell>Ui/UX</Table.Cell>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell className="text-green">Active</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                  View
                </button>
                <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                  Edit
                </button>
              </div>
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
            <Table.Cell>Ui/UX</Table.Cell>
            <Table.Cell>From 7 Am To 3 Pm</Table.Cell>
            <Table.Cell className="text-green">Active</Table.Cell>
            <Table.Cell>
              <div className="flex gap-x-5">
                <button className="text-green border-[1px] border-green rounded-full py-1 px-4">
                  View
                </button>
                <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
                  Edit
                </button>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default UsersTable;
