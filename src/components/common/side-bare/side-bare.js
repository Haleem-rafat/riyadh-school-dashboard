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
import { motion } from "framer-motion";

const SideBare = ({ SetSid, sid }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  console.log("====================================");
  console.log(sid);
  console.log("====================================");

  const sidebarVariants = {
    open: {
      x: 0,
      transition: { ease: "easeInOut", duration: 0.3 },
    },
    closedEn: {
      x: "-100%",
      transition: { ease: "easeInOut", duration: 0.3 },
    },
    closedAr: {
      x: "100%",
      transition: { ease: "easeInOut", duration: 0.3 },
    },
  };
  const overlayVariants = {
    open: {
      opacity: 1,
      transition: { ease: "easeInOut", duration: 0.3 },
    },
    closed: {
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.3 },
    },
  };

  return (
    <div className="w-full fixed top-0 z-50">
      <div className="bg-white w-[170px] h-screen fixed md:block hidden  z-40">
        <img
          className="w-[90px] h-[90px] ml-auto mr-8 mb-[60px] mt-[40px]"
          src={mainLogo}
          alt="mainLogo"
        />
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

      <div className="md:hidden container ">
        <motion.div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ${
            sid ? "pointer-events-auto" : "pointer-events-none"
          }`}
          variants={overlayVariants}
          initial="open"
          animate={sid ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          onClick={() => SetSid(false)}
        />
        <motion.div
          className="h-full fixed top-0 z-50 w-[170px] bg-white "
          variants={sidebarVariants}
          initial={false ? "closedEn" : "closedAr"}
          animate={sid ? "open" : "closedEn"}
        >
          <img
            className="w-[90px] h-[90px] ml-auto mr-8 mb-[60px] mt-[40px]"
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
                SetSid(false);
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
                SetSid(false);
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
                SetSid(false);
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
                SetSid(false);
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
                SetSid(false);
              }}
            />
            <NavLink
              icon={<LogOutIcon className="mx-auto " />}
              title="Log Out"
              onClick={() => {
                history.push(routes.auth.logIn);
                SetSid(false);
              }}
            />
          </div>
        </motion.div>
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
      } w-[120px] h-[70px] ml-auto cursor-pointer my-6`}
    >
      <div className="text-center pt-4">
        {icon}
        <p className="text-primary pt-1">{title}</p>
      </div>
    </div>
  );
};

export default SideBare;
