import React, { useEffect } from "react";
import api from "../api";
import useAxios from "./use-axios";
import { authAxios } from "../config/axios-config";

const useGetAllEmployees = () => {
  const [allEmployeesOptions, setAllEmployeesOptions] = React.useState([]);

  const { run, isLoading, error, isError } = useAxios();

  useEffect(() => {
    run(authAxios.get(`employees?page=1&perPage=500`)).then(({ data }) => {
      console.log("====================================");
      console.log(data);
      console.log("====================================");
      const AllEmployees = data?.data;
      const options = [];

      AllEmployees.forEach((d) =>
        options.push({
          text: `${d?.firstName} ${d?.lastName}`,
          key: d?._id,
          value: d._id,
        })
      );

      setAllEmployeesOptions(options);
    });
  }, [run]);

  return {
    allEmployeesOptions,
    loadingAllEmployeesOptions: isLoading,
    errorAllEmployeesOptions: error,
    isErrorAllEmployeesOptions: isError,
  };
};

export default useGetAllEmployees;