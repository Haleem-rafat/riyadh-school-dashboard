import React, { useEffect } from "react";
import api from "../api";
import useAxios from "./use-axios";
import { authAxios } from "../config/axios-config";

const useGetAllEmployees = () => {
  const [allEmployeesOptions, setAllEmployeesOptions] = React.useState([]);

  const { run, isLoading, error, isError } = useAxios();

  useEffect(() => {
    run(authAxios.get(api.app.employees.list)).then(({ data }) => {
      const AllEmployees = data?.data;
      const options = [];

      AllEmployees.forEach((d) =>
        options.push({
          text: `${d?.oracleDBNumber} - ${d?.firstName} ${d?.lastName}`,
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
