import React, { useEffect, useState } from "react";
import Avatar from "../Avatar/Avater";
import ViewDetailsTable from "./view-details-table";
import QrCodeModel from "./qr-code-model";
import { authAxios } from "../../../config/axios-config";
import useAxios from "../../../hooks/use-axios";
import api from "../../../api";
import { useLocation, useParams } from "react-router-dom";
import moment from "moment";
import { Dimmer, Dropdown, Loader } from "semantic-ui-react";
import useGetAllGroups from "../../../hooks/use-get-all-groups";
import useGetAllTimeSlots from "../../../hooks/use-get-all-time-slots";

const ViewDetails = () => {
  const [data, setData] = useState();
  const [pagination, SetPagination] = useState(0);
  const { search } = useLocation();
  const { id } = useParams();
  const { AllGroupOptions, loadingGroupOptions } = useGetAllGroups();
  const { AllTimeSlots, loadingTimeSlotsOptions } = useGetAllTimeSlots();

  const { run, isLoading, isError, error } = useAxios([]);
  useEffect(() => {
    if (id) {
      run(
        authAxios.get(`${api.app.employees.getById(id)}`).then((res) => {
          SetPagination(res?.data?.pagination);
          setData(res?.data?.data);
        })
      );
    }
  }, [id, run, search]);

  const groupOptions = [];
  data?.groups?.forEach((d) =>
    groupOptions.push({
      text: d?.name,
      key: d?._id,
      value: d._id,
    })
  );

  const timeSlotsOptions = [];
  data?.timeSlots?.forEach((d) =>
    timeSlotsOptions.push({
      text: d?.name,
      key: d?._id,
      value: d._id,
    })
  );

  return (
    <div className="bg-background h-screen pt-8 z-0 ">
      <Dimmer
        active={isLoading || loadingGroupOptions || loadingTimeSlotsOptions}
        inverted
      >
        <Loader active />
      </Dimmer>
      <div className="bg-white mx-10 rounded-lg animate-in ">
        <div className="md:h-[130px] h-auto border-l-[30px] rounded-l-lg border-primary py-10 flex md:flex-row flex-col justify-between mdpx-24 px-5 md:gap-y-0 gap-y-5 ">
          <div className="flex gap-5 ">
            <Avatar
              name={`${data?.firstName} ${data?.lastName}`}
              className="w-16 h-16 text-xl "
            />
            <div>
              <p className="my-auto text-xl font-medium">{`${data?.firstName} ${data?.lastName}`}</p>
              <p className="my-auto text-gray">{data?.groups?.[0]?.name}</p>
            </div>
          </div>
          <div className="border-r-4"></div>
          <div className="flex ">
            <div>
              <p className="my-auto text-xl font-medium">ID Number</p>
              <p className="my-auto text-gray">{data?._id}</p>
            </div>
          </div>
          <div className="border-r-4"></div>
          <div className="flex">
            <div>
              <p className="my-auto text-xl font-medium">Group</p>
              <p className="my-auto text-gray">
                <Dropdown
                  className="z-50"
                  options={groupOptions}
                  defaultValue={data?.groups?.[0]?._id}
                  value={data?.groups?.[0]?._id}
                />
              </p>
            </div>
          </div>
          <div className="border-r-4"></div>
          <div className="flex">
            <div>
              <p className="my-auto text-xl font-medium">Time Slot</p>
              <p className="my-auto text-gray">
                <Dropdown
                  options={timeSlotsOptions}
                  defaultValue={data?.timeSlots?.[0]?._id}
                  value={data?.timeSlots?.[0]?._id}
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mx-10 rounded-lg mt-8 ">
        <div className="bg-[#FBFBFE] md:h-[60px] h-auto rounded-t-lg flex md:flex-nowrap flex-wrap  justify-between px-5 ">
          <p className="pt-[15px] pl-[15px] text-2xl">Attendance list</p>
          <div>
            <QrCodeModel />
          </div>
        </div>
        <ViewDetailsTable timeSlots={data?.timeSlots} />
      </div>
    </div>
  );
};

export default ViewDetails;
