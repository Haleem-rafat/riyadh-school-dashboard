import React, { useEffect } from "react";
import api from "../api";
import useAxios from "./use-axios";
import moment from "moment";
import { authAxios } from "../config/axios-config";

const useGetAllTimeSlots = () => {
  const [AllTimeSlots, setAllTimeSlotsOptions] = React.useState([]);

  const { run, isLoading, error, isError } = useAxios();

  useEffect(() => {
    run(authAxios.get(`/time-slots/list`)).then(({ data }) => {
      const AllTimeSlots = data.data;
      const options = [];

      AllTimeSlots.forEach((d) =>
        options.push({
          text: d?.name,
          key: d?._id,
          value: d._id,
        })
      );

      console.log("====================================");
      console.log({ options });
      console.log("====================================");

      setAllTimeSlotsOptions(options);
    });
  }, [run]);

  console.log("====================================");
  console.log({ AllTimeSlots });
  console.log("====================================");

  return {
    AllTimeSlots,
    loadingTimeSlotsOptions: isLoading,
    errorTimeSlotsOptions: error,
    isErrorTimeSlotsOptions: isError,
  };
};

export default useGetAllTimeSlots;
