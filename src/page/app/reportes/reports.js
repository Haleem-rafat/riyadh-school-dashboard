import React, { useState } from "react";
import ReportesTable from "../../../components/reportes-components/reportes-table";
import DateFilterModel from "../../../components/reportes-components/date-filter-model";
import useFilter from "../../../hooks/use-filter";
import moment from "moment";
import { AiFillCloseCircle } from "react-icons/ai";
import GroupFilterModel from "../../../components/reportes-components/group-flter-model";
import useGetAllGroups from "../../../hooks/use-get-all-groups";

const Reports = () => {
  const [date, setDate] = useFilter("date", "");
  const [group, setGroup] = useFilter("group", "");
  const [IsDateHiddenFilter, setDateHiddenFilter] = useState(false);
  const [IsGroupHiddenFilter, setGroupHiddenFilter] = useState(false);
  const { AllGroupOptions, loadingGroupOptions } = useGetAllGroups();

  const fieldOption = AllGroupOptions.find((go) => go?.value === group);

  return (
    <div className="bg-background h-screen pt-8 ">
      <div className="bg-white mx-10 rounded-lg animate-in ">
        <div className="bg-[#FBFBFE] h-[60px] rounded-t-lg flex justify-between  ">
          <p className="pt-[15px] pl-[15px] text-2xl">Attendance list</p>
          <div className="flex">
            {/* date filter */}
            <div className="pt-[15px] pr-[15px] ">
              <div className="flex">
                <DateFilterModel setDateHiddenFilter={setDateHiddenFilter} />
                <button
                  className={
                    IsDateHiddenFilter
                      ? "my-auto bg-primary text-white p-1 rounded-lg flex"
                      : "hidden"
                  }
                  onClick={() => {
                    setDate("");
                    setDateHiddenFilter(false);
                  }}
                >
                  {moment(date).format("DD/MM/YYYY")}
                  <AiFillCloseCircle className="my-auto" size={15} />
                </button>
              </div>
            </div>
            {/* group filter */}
            <div className="pt-[15px] pr-[15px] ">
              <div className="flex">
                <GroupFilterModel setGroupHiddenFilter={setGroupHiddenFilter} />
                <button
                  className={
                    IsGroupHiddenFilter
                      ? "my-auto bg-primary text-white p-1 rounded-lg flex"
                      : "hidden"
                  }
                  onClick={() => {
                    setGroup("");
                    setGroupHiddenFilter(false);
                  }}
                >
                  {fieldOption?.text}
                  <AiFillCloseCircle className="my-auto" size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <ReportesTable />
      </div>
    </div>
  );
};

export default Reports;
