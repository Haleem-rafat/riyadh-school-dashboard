import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import { ReactComponent as CloseIcon } from "../../../src/assets/icons/close-icon.svg";
import { useHistory } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useFilter from "../../hooks/use-filter";
import moment from "moment";
import useGetAllGroups from "../../hooks/use-get-all-groups";
import { Formik } from "formik";
import FormikMultiDropdown from "../common/formik/formik-dropdown";

function GroupFilterModel({ setGroupHiddenFilter }) {
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const [group, setGroup] = useFilter("group", "");

  const { AllGroupOptions, loadingGroupOptions } = useGetAllGroups();

  const handleFilterDate = (values) => {
    setGroup(values?.groupId);
    setOpen(false);
    setGroupHiddenFilter(true);
  };

  return (
    <Modal
      className="md:w-[400px] w-full h-auto rounded-lg bg-background-sub scale-in"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <button className="py-1 px-4 font-serifEN text-base text-black">
          <p className="text-xl">Filter By Group</p>
        </button>
      }
    >
      <Modal.Content className="md:w-[400px] w-full h-auto bg-background-sub rounded-lg">
        <div className="bg-white md:w-[350px] w-full h-auto rounded-lg mx-auto my-0 ">
          <div className="flex justify-between mx-6 py-4 border-b-[1px]">
            <p className="text-xl pt-3 ">Filter By Group </p>
            <CloseIcon
              className="w-8 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          <div className=" mx-4 pt-8">
            <Formik
              initialValues={{
                groupId: "",
              }}
              onSubmit={handleFilterDate}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <div className="w-full">
                    <FormikMultiDropdown
                      name="groupId"
                      label="Groups"
                      options={AllGroupOptions}
                      loading={loadingGroupOptions}
                    />
                  </div>
                  <div className="md:flex block justify-center py-8 ">
                    <Button className="bg-green text-white w-[140px] rounded-full font-serifEN font-normal text-base">
                      Confirm
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default GroupFilterModel;
