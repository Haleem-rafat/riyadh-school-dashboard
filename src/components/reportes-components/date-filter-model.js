import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import { ReactComponent as CloseIcon } from "../../../src/assets/icons/close-icon.svg";
import { useHistory } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useFilter from "../../hooks/use-filter";
import moment from "moment";

function DateFilterModel({ setDateHiddenFilter }) {
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const [date, setDate] = useFilter("date", "");

  const [value, onChange] = useState(new Date());

  const handleFilterDate = () => {
    setDate(
      moment(value, "ddd MMM DD YYYY HH:mm:ssZ").format("YYYY-MM-DDTHH:mm:ss")
    );
    setOpen(false);
    setDateHiddenFilter(true);
  };

  return (
    <Modal
      className="md:w-[400px] w-full h-auto rounded-lg bg-background-sub scale-in"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <button className="py-1 px-4 font-serifEN text-base text-black">
          <p className="text-xl">Filter By Date</p>
        </button>
      }
    >
      <Modal.Content className="md:w-[400px] w-full h-auto bg-background-sub rounded-lg">
        <div className="bg-white md:w-[350px] w-full h-auto rounded-lg mx-auto my-0 ">
          <div className="flex justify-between mx-6 py-4 border-b-[1px]">
            <p className="text-xl pt-3 ">Select Date v</p>
            <CloseIcon
              className="w-8 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          <div className="flex justify-center pt-8">
            <Calendar
              className="edit_Calendar w-[280px] h-[350px] py-10 border-none"
              onChange={onChange}
              value={value}
            />
          </div>

          <div className="md:flex block justify-center py-8 ">
            <Button
              onClick={handleFilterDate}
              // loading={isLoading}
              className="bg-green text-white w-[140px] rounded-full font-serifEN font-normal text-base"
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default DateFilterModel;
