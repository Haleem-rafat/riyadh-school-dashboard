import React from "react";
import ReportesTable from "../../../components/reportes-components/reportes-table";

const Reports = () => {
  return (
    <div className="bg-background h-screen pt-8 ">
      <div className="bg-white mx-10 rounded-lg animate-in ">
        <div className="bg-[#FBFBFE] h-[60px] rounded-t-lg  ">
          <p className="pt-[15px] pl-[15px] text-2xl">Attendance list</p>
          <div></div>
        </div>
        <ReportesTable />
      </div>
    </div>
  );
};

export default Reports;
