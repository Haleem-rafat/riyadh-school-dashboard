import React from "react";
import { ReactComponent as NotifigationsIcon } from "../../../../src/assets/icons/notifigations-icon.svg";
import Avatar from "../Avatar/Avater";
import { Input } from "semantic-ui-react";

const NavBare = () => {
  return (
    <div className="w-full fixed bg-white">
      <div className="ml-[170px] flex justify-between h-[110px]">
        <div className="mt-auto mb-8">
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Search..."
            className="w-full rounded-xl edit_search_input"
          />
        </div>
        <div className="flex justify-between gap-x-10 mt-auto mb-8 mr-20">
          <NotifigationsIcon className="mt-1.5 cursor-pointer" />
          <Avatar name="Haleem Rafat" className={"w-[45px] h-[45px]"} />
        </div>
      </div>
    </div>
  );
};

export default NavBare;
