import React, { useEffect, useState } from "react";
import { Dimmer, Loader, Table } from "semantic-ui-react";
import Avatar from "../common/Avatar/Avater";
import PaginationApp from "../common/pagination/pagination-app";
import { useHistory, useLocation } from "react-router-dom";
import useAxios from "../../hooks/use-axios";
import { authAxios } from "../../config/axios-config";
import api from "../../api";
import useForceReload from "../../hooks/use-force-reload";
import AddGroupsModel from "./add-groups-model";

const GroupsTable = () => {
  const history = useHistory();
  const [data, setData] = useState();
  const [pagination, SetPagination] = useState(0);
  const { search } = useLocation();
  const { forceReload, reload } = useForceReload();

  const { run, isLoading, isError, error } = useAxios([]);
  useEffect(() => {
    if (search.includes("page") && search.includes("perPage")) {
      run(
        authAxios.get(`${api.app.groups.default}${search}`).then((res) => {
          SetPagination(res?.data?.pagination);
          setData(res?.data?.data);
        })
      );
    }
  }, [data?.data?.length, run, search]);

  return (
    <div className="p-5 animate-in">
      <Dimmer active={isLoading} inverted>
        <Loader active />
      </Dimmer>
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="text-gray text-base font-normal">
              Group name
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
                <AddGroupsModel oldName={e?.name} groupId={e?._id} />
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

export default GroupsTable;
