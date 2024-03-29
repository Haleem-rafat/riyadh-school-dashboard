import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Tab } from "semantic-ui-react";
import useTab from "../../../hooks/use-tab";
import routes from "../../../routes";
import AdminTable from "../../../components/common/admins-components/admin-table";
import MangerTable from "../../../components/common/admins-components/manger-table";
import AddAdminModel from "../../../components/common/admins-components/add-admin-model";
import AddMangerModel from "../../../components/common/admins-components/add-manger-model";

const AdminsTabs = () => {
  const { pathname } = useLocation();

  const panes = [
    {
      menuItem: "Admins",
      route: routes.app.admins.default,
      render: () => (
        <div>
          <Tab.Pane className="border-none w-full h-full rounded-b-lg animate-in">
            <AdminTable />
          </Tab.Pane>
        </div>
      ),
    },
    {
      menuItem: "Managers",
      route: routes.app.admins.managers,
      render: () => (
        <div>
          <Tab.Pane className="border-none w-full h-full rounded-b-lg animate-in">
            <MangerTable />
          </Tab.Pane>
        </div>
      ),
    },
  ];
  const { activeIndex, onTabChange } = useTab({ panes });

  return (
    <div className="bg-background h-screen pt-8 px-10 ">
      <div className="flex md:flex-nowrap flex-wrap  md:gap-y-0 gap-y-5 justify-between mb-10 mx-2">
        <p className="text-4xl">
          {pathname.startsWith(routes.app.admins.managers)
            ? "Managers"
            : "Admins"}
        </p>
        <div>
          {pathname.startsWith(routes.app.admins.managers) ? (
            <AddMangerModel isAdd />
          ) : (
            <AddAdminModel isAdd />
          )}
        </div>
      </div>
      <div className="mx-auto pt-3 h-auto animate-in bg-background-sub rounded-lg shadow ">
        <Tab
          menu={{
            secondary: true,
            className: "flex flex-wrap mx-5 edit-For-groups-tabs",
          }}
          activeIndex={activeIndex}
          onTabChange={onTabChange}
          panes={panes}
        />
      </div>
    </div>
  );
};

export default AdminsTabs;
