import React, { useEffect } from "react";
import api from "../api";
import useAxios from "./use-axios";
import moment from "moment";
import { authAxios } from "../config/axios-config";

const useGetAllTimeSlots = () => {
  const [AllTimeSlots, setAllTimeSlotsOptions] = React.useState([]);

  const { run, isLoading, error, isError } = useAxios();

  useEffect(() => {
    run(authAxios.get(api.app.timeSlots.default)).then(({ data }) => {
      console.log("====================================");
      console.log(data);
      console.log("====================================");
      const AllTimeSlots = data.data;
      const options = [];

      AllTimeSlots.forEach((d) =>
        options.push({
          text: `${moment(d?.from?.replace("Z", "")).format(
            "hh:mm:A"
          )} ${moment(d?.to?.replace("Z", "")).format("hh:mm:A")} `,
          key: d?._id,
          value: d._id,
        })
      );

      console.log("====================================");
      console.log({ AllTimeSlots });
      console.log("====================================");

      setAllTimeSlotsOptions(options);
    });
  }, [run]);

  return {
    AllTimeSlots,
    loadingTimeSlotsOptions: isLoading,
    errorTimeSlotsOptions: error,
    isErrorTimeSlotsOptions: isError,
  };
};

export default useGetAllTimeSlots;
