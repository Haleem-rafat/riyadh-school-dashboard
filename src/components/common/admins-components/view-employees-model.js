import React from "react";
import { Button, Modal } from "semantic-ui-react";
import Avatar from "../Avatar/Avater";
import { truncateString } from "../../../utils/truncate-string";

const ViewEmployeesModel = ({ allemployees }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      className="md:w-[700px] w-full h-auto rounded-lg bg-background-sub scale-in"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <button className="text-primary border-[1px] border-primary rounded-full py-1 px-4">
          View
        </button>
      }
    >
      <Modal.Content className="md:w-[700px] w-full h-auto bg-background-sub rounded-lg">
        <div className="bg-white md:w-[650px] w-full h-auto rounded-lg mx-auto my-0 ">
          <div className="grid grid-cols-3 gap-5 p-8">
            {allemployees?.map((e) => (
              <div className="flex gap-x-5 bg-[#E9E9F0] rounded-lg p-4 cursor-default ">
                <Avatar
                  className="w-12 h-12 text-lg"
                  name={`${e?.firstName} ${e?.lastName}`}
                />
                <div>
                  <p className="">
                    {truncateString(`${e?.firstName} ${e?.lastName}`, 15)}
                  </p>
                  <p className="text-gray">{truncateString(e?._id, 9)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default ViewEmployeesModel;
