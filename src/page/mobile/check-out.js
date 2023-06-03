import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/use-axios";
import { Button, Dropdown } from "semantic-ui-react";
import useGetAllEmployees from "../../hooks/use-get-all-employees";
import api from "../../api";
import routes from "../../routes";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import axios from "axios";

const CheckOut = () => {
  const history = useHistory();
  const [employeesId, setEmployeesId] = useState([]);
  const { allEmployeesOptions, loadingAllEmployeesOptions } =
    useGetAllEmployees();
  const { run, isLoading, error } = useAxios([]);

  const handelCheckOut = () => {
    run(axios.post(api.attendances.out(employeesId)))
      .then((res) => {
        history.push(routes.attendances.in);
        toast.success("Check-Out sucsess");
      })
      .catch((err) => {
        toast.error(error?.massage || "something is wrong please try again");
      });
  };

  return (
    <div className="max-w-3xl mx-auto pt-32">
      <h1 className="text-xl py-2">Select employees to check-out</h1>
      <div>
        <Dropdown
          fluid
          selection
          label="Select employees"
          placeholder="Select employees"
          options={allEmployeesOptions}
          loading={loadingAllEmployeesOptions}
          onChange={(e, { value }) => {
            setEmployeesId(value);
          }}
        />
      </div>
      <div className="flex justify-center my-10">
        <Button
          onClick={() => handelCheckOut()}
          loading={isLoading}
          className="bg-red-400 w-[350px] h-[350px] rounded-full text-5xl text-white"
        >
          Check-Out
        </Button>
      </div>
    </div>
  );
};

export default CheckOut;
