import React, { useEffect } from "react";
import api from "../api";
import useAxios from "./use-axios";
import { authAxios } from "../config/axios-config";

const useGetAllGroups = () => {
  const [AllGroupOptions, setGroupOptions] = React.useState([]);

  const { run, isLoading, error, isError } = useAxios();

  useEffect(() => {
    run(authAxios.get(`groups/list`)).then(({ data }) => {
      const GetAllGroupOptions = data?.data;
      const options = [];

      GetAllGroupOptions.forEach((d) =>
        options.push({
          text: d?.name,
          key: d?._id,
          value: d._id,
        })
      );

      setGroupOptions(options);
    });
  }, [run]);

  return {
    AllGroupOptions,
    loadingGroupOptions: isLoading,
    errorGroupOptions: error,
    isErrorGroupOptions: isError,
  };
};

export default useGetAllGroups;
