import React from "react";
import { Button } from "semantic-ui-react";
import useAxios from "../../../hooks/use-axios";
import { authAxios } from "../../../config/axios-config";
import api from "../../../api";
import { toast } from "react-hot-toast";

const Sync = () => {
  const { run, isLoading, error } = useAxios();

  const Sync = () => {
    run(authAxios.post(api.app.syncOracle.default))
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
      <div className="bg-white mx-10 rounded-lg animate-in mt-10 py-10 flex justify-center">
        <Button
          loading={isLoading}
          onClick={() => Sync()}
          className="bg-green text-white md:w-[350px] w-full rounded-full font-serifEN font-normal text-base mx-auto py-6"
        >
          Sync Employees Oracle
        </Button>
      </div>
    </div>
  );
};

export default Sync;
