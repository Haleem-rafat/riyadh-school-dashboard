import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Tab } from "semantic-ui-react";
import useTab from "../../../hooks/use-tab";
import routes from "../../../routes";
import GroupsTable from "../../../components/groups-components/groups-table";
import TimeSloteTable from "../../../components/groups-components/time-slote-table";
import AddGroupsModel from "../../../components/groups-components/add-groups-model";
import TimeSloteModel from "../../../components/groups-components/time-slote-model";
import AddTimeSloteModel from "../../../components/groups-components/add-time-slote-model";

const GroupsTabs = () => {
  const { pathname } = useLocation();

  const panes = [
    {
      menuItem: "Groups",
      route: routes.app.groups.default,
      render: () => (
        <div>
          <Tab.Pane className="border-none w-full h-full rounded-b-lg animate-in">
            <GroupsTable />
          </Tab.Pane>
        </div>
      ),
    },
    {
      menuItem: "Time Slots",
      route: routes.app.groups.timeSlote,
      render: () => (
        <div>
          <Tab.Pane className="border-none w-full h-full rounded-b-lg animate-in">
            <TimeSloteTable />
          </Tab.Pane>
        </div>
      ),
    },
  ];
  const { activeIndex, onTabChange } = useTab({ panes });

  return (
    <div className="bg-background h-screen pt-8 px-10  ">
      <div className="flex md:flex-nowrap flex-wrap  md:gap-y-0 gap-y-5 justify-between mb-10 mx-2">
        <p className="text-4xl">
          {pathname.startsWith(routes.app.groups.timeSlote)
            ? "Time Slots"
            : "Groups"}
        </p>
        <div>
          {pathname.startsWith(routes.app.groups.timeSlote) ? (
            <AddTimeSloteModel />
          ) : (
            <AddGroupsModel isAdd />
          )}
        </div>
      </div>
      <div className="mx-auto pt-3 h-auto  animate-in bg-background-sub rounded-lg shadow  ">
        <Tab
          menu={{
            secondary: true,
            className: "flex flex-wrap mx-5  edit-For-groups-tabs",
          }}
          activeIndex={activeIndex}
          onTabChange={onTabChange}
          panes={panes}
        />
      </div>
    </div>
  );
};

export default GroupsTabs;
