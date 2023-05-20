import React from "react";
import mainLogo from "../../../../src/assets/img/main-logo.png";
import { ReactComponent as RequstIcon } from "../../../../src/assets/icons/requst-icon.svg";
import { ReactComponent as UsersIcon } from "../../../../src/assets/icons/users-icon.svg";
import { ReactComponent as GroupIcon } from "../../../../src/assets/icons/Group-icon.svg";
import { ReactComponent as SyncIcon } from "../../../../src/assets/icons/sync-icon.svg";
import { ReactComponent as AdminIcon } from "../../../../src/assets/icons/admin-icon.svg";
import { ReactComponent as LogOutIcon } from "../../../../src/assets/icons/log-out-icon.svg";
import { useHistory, useLocation } from "react-router-dom";
import routes from "../../../routes";

const SideBare = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <div className="bg-white w-[170px] h-screen fixed">
      <img
        className="w-[90px] h-[90px] ml-auto mr-8 mb-[75px] mt-[40px]"
        src={mainLogo}
        alt="mainLogo"
      />
      <div>
        <NavLink
          icon={<RequstIcon className="mx-auto " />}
          title="Reportes"
          isActive={
            pathname.length === 1 ||
            pathname.startsWith(routes.app.reportes.default)
          }
          onClick={() => {
            history.push(routes.app.reportes.default);
          }}
        />
        <NavLink
          icon={<UsersIcon className="mx-auto " />}
          title="Users"
          isActive={
            pathname.length === 1 ||
            pathname.startsWith(routes.app.users.default)
          }
          onClick={() => {
            history.push(routes.app.users.default);
          }}
        />
        <NavLink
          icon={<GroupIcon className="mx-auto " />}
          title="Groups"
          isActive={
            pathname.length === 1 ||
            pathname.startsWith(routes.app.groups.default)
          }
          onClick={() => {
            history.push(routes.app.groups.default);
          }}
        />
        <NavLink
          icon={<SyncIcon className="mx-auto " />}
          title="Sync"
          isActive={
            pathname.length === 1 ||
            pathname.startsWith(routes.app.sync.default)
          }
          onClick={() => {
            history.push(routes.app.sync.default);
          }}
        />
        <NavLink
          icon={<AdminIcon className="mx-auto " />}
          title="Admins"
          isActive={
            pathname.length === 1 ||
            pathname.startsWith(routes.app.admins.default)
          }
          onClick={() => {
            history.push(routes.app.admins.default);
          }}
        />
        <NavLink
          icon={<LogOutIcon className="mx-auto " />}
          title="Log Out"
          onClick={() => {
            history.push(routes.auth.logIn);
          }}
        />
      </div>
    </div>
  );
};

export const NavLink = ({ isActive, onClick, icon, title }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isActive
          ? "bg-primary-veryLight border-l-4 border-primary "
          : "bg-white border-l-4 border-white "
      } w-[120px] h-[70px] ml-auto cursor-pointer my-8`}
    >
      <div className="text-center pt-4">
        {icon}
        <p className="text-primary pt-1">{title}</p>
      </div>
    </div>
  );
};

export default SideBare;
