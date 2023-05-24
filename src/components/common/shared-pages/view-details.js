import React from "react";
import Avatar from "../Avatar/Avater";
import ViewDetailsTable from "./view-details-table";
import QrCodeModel from "./qr-code-model";

const ViewDetails = () => {
  return (
    <div className="bg-background h-screen pt-[140px] ">
      <div className="bg-white mx-10 rounded-lg animate-in ">
        <div className="h-[130px] border-l-[30px] rounded-l-lg border-primary py-10 flex justify-between px-24">
          <div className="flex gap-5 ">
            <Avatar name="Mai Ahmed" className="w-16 h-16 text-xl " />
            <div>
              <p className="my-auto text-xl font-medium">Mai Ahmed</p>
              <p className="my-auto text-gray">UI/UX Designer</p>
            </div>
          </div>
          <div className="border-r-4"></div>
          <div className="flex ">
            <div>
              <p className="my-auto text-xl font-medium">ID Number</p>
              <p className="my-auto text-gray">D86780 - 65</p>
            </div>
          </div>
          <div className="border-r-4"></div>
          <div className="flex">
            <div>
              <p className="my-auto text-xl font-medium">Group</p>
              <p className="my-auto text-gray">UI/UX</p>
            </div>
          </div>
          <div className="border-r-4"></div>
          <div className="flex">
            <div>
              <p className="my-auto text-xl font-medium">Time Slot</p>
              <p className="my-auto text-gray">From 7 Am To 3 Pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mx-10 rounded-lg animate-in mt-8 ">
        <div className="bg-[#FBFBFE] h-[60px] rounded-t-lg flex justify-between ">
          <p className="pt-[15px] pl-[15px] text-2xl">Attendance list</p>
          <div>
            <QrCodeModel />
          </div>
        </div>
        <ViewDetailsTable />
      </div>
    </div>
  );
};

export default ViewDetails;
