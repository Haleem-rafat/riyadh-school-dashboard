import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import useAxios from "../../../hooks/use-axios";
import { authAxios } from "../../../config/axios-config";
import api from "../../../api";
import { toast } from "react-hot-toast";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import moment from "moment";

const Sync = () => {
  const { run, isLoading, error } = useAxios();
  const [valueFrom, onChangeFrom] = useState(new Date());
  const [valueTo, onChangeTo] = useState(new Date());

  const Sync = () => {
    const body = {
      dateFrom: moment(valueFrom, "ddd MMM DD YYYY HH:mm:ssZ").format(
        "YYYY-MM-DDTHH:mm:ss"
      ),
      dateTo: moment(valueTo, "ddd MMM DD YYYY HH:mm:ssZ").format(
        "YYYY-MM-DDTHH:mm:ss"
      ),
    };
    run(authAxios.post(api.app.syncOracle.default, body))
      .then((res) => {
        toast.success(
          "The Sync Employees Oracle has been complite successfully"
        );
      })
      .catch((err) => {
        toast.error(error?.massage || "something is wrong please try again");
      });
  };

  return (
    <div className="bg-background h-screen pt-8 ">
      <div className="flex md:flex-nowrap flex-wrap  gap-x-10 gap-y-5 md:gap-y-0 mx-10 ">
        <div className="bg-[#FBFBFE] w-full h-[60px] rounded-t-lg  animate-in ">
          <p className="pt-[15px] pl-[15px] text-2xl">Sync</p>
        </div>
        {/* <AddUsersModel /> */}
      </div>
      <div className="bg-white mx-10 rounded-lg animate-in mt-10 py-10 ">
        <p className="px-[15px] pb-[15px] text-2xl">
          Please select date from and date to , to sync data with Oracle{" "}
        </p>
        <div className="flex justify-center gap-x-56 mt-5 ">
          <div className="shadow-2xl p-2 rounded-xl">
            <h1 className="text-xl font-semibold text-center">Date from:</h1>
            <Calendar
              className="edit_Calendar w-[280px] h-[350px] py-10 border-none "
              onChange={onChangeFrom}
              value={valueFrom}
            />
          </div>
          <div className="shadow-2xl p-2 rounded-xl">
            <h1 className="text-xl font-semibold text-center">Date To:</h1>
            <Calendar
              className="edit_Calendar w-[280px] h-[350px] py-10 border-none "
              onChange={onChangeTo}
              value={valueTo}
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button
            // disabled={valueFrom && valueTo ? true : false}
            loading={isLoading}
            onClick={valueFrom && valueTo ? () => Sync() : null}
            className="bg-green text-white md:w-[350px] w-full rounded-full font-serifEN font-normal text-2xl mx-auto py-6 "
          >
            Sync Employees Oracle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sync;
