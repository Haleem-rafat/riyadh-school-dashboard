import React, { useEffect, useState } from "react";
import { Dimmer, Loader, Table } from "semantic-ui-react";
import PaginationApp from "../common/pagination/pagination-app";
import { useHistory, useLocation } from "react-router-dom";
import useAxios from "../../hooks/use-axios";
import { authAxios } from "../../config/axios-config";
import api from "../../api";
import moment from "moment";
import TimeSloteModel from "./time-slote-model";
import { formattedTime } from "../../utils/formatted-time";

const TimeSloteTable = () => {
  const history = useHistory();
  const [data, setData] = useState();
  const [pagination, SetPagination] = useState(0);
  const { search } = useLocation();

  const { run, isLoading, isError, error } = useAxios([]);
  useEffect(() => {
    if (search) {
      run(
        authAxios.get(`${api.app.timeSlots.default}${search}`).then((res) => {
          SetPagination(res?.data?.pagination);
          setData(res?.data?.data);
          console.log("====================================");
          console.log(res);
          console.log("====================================");
        })
      );
    }
  }, [data?.data?.length, run, search]);

  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <div className="p-5 animate-in">
      <Dimmer active={isLoading} inverted>
        <Loader active />
      </Dimmer>
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Slot Name
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Day
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Time Slot
            </Table.HeaderCell>
            <Table.HeaderCell className="text-gray text-base font-normal">
              details
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.map((e) => (
            <Table.Row>
              <Table.Cell>{e?.name}</Table.Cell>
              <Table.Cell>
                {e?.slots.map((time) => (
                  <p className="py-0.5">{time?.day}</p>
                ))}
              </Table.Cell>
              <Table.Cell>
                {e?.slots.map((time) => (
                  <p className="py-0.5">
                    From {moment(time?.from).format("hh:mm:A")} To{" "}
                    {moment(time?.to).format("hh:mm:A")}
                  </p>
                ))}
              </Table.Cell>
              <Table.Cell>
                <TimeSloteModel
                  oldName={e?.name}
                  oldSlots={e?.slots}
                  timeSlotsId={e?._id}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="flex justify-end">
        <PaginationApp totalPages={pagination?.totalPages} />
      </div>
    </div>
  );
};

export default TimeSloteTable;
