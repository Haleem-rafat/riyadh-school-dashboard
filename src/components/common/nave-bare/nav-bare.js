import React from "react";
import { ReactComponent as NotifigationsIcon } from "../../../../src/assets/icons/notifigations-icon.svg";
import Avatar from "../Avatar/Avater";
import { Input } from "semantic-ui-react";
import routes from "../../../routes";
import { useHistory } from "react-router-dom";

const NavBare = () => {
  const history = useHistory();
  return (
    <div className="w-full bg-white">
      <div className="md:ml-[170px] ml-5 mx-auto flex justify-between gap-x-10 h-[110px]">
        <div className="mt-auto mb-8">
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Search..."
            className="w-full rounded-xl edit_search_input"
          />
        </div>
        <div className="flex justify-between gap-x-10 mt-auto mb-8 md:mr-20 mr-5">
          <NotifigationsIcon
            className="mt-1.5 cursor-pointer"
            onClick={() => history.push(routes.app.notification.default)}
          />
          <Avatar name="Haleem Rafat" className={"w-[45px] h-[45px]"} />
        </div>
      </div>
    </div>
  );
};

export default NavBare;
