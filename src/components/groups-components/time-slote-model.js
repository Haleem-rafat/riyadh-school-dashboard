import React from "react";
import { Button, Form, Header, Image, Modal } from "semantic-ui-react";
import { ReactComponent as AddCircleIcon } from "../../../src/assets/icons/add-circle-icon.svg";
import { ReactComponent as CloseIcon } from "../../../src/assets/icons/close-icon.svg";
import { Formik } from "formik";
import FormikInput from "../common/formik/formik-input";
import FormikTimePicker from "../common/formik/formik-time-picker";
import FormikMultiDropdown from "../common/formik/formik-dropdown";
import { authAxios } from "../../config/axios-config";
import api from "../../api";
import routes from "../../routes";
import { toast } from "react-hot-toast";
import useAxios from "../../hooks/use-axios";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { weekDAyoptions } from "../../utils/week-day-options";
import moment from "moment";

function TimeSloteModel({ isAdd, oldName, timeSlotsId }) {
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const { run, isLoading, error } = useAxios();

  const handleAddTmeSlote = (values) => {
    const body = {
      day: values?.day,
      from: moment(values?.from, "LT").format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
      to: moment(values?.to, "LT").format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z",
    };
    console.log("====================================");

    if (isAdd) {
      run(authAxios.post(api.app.timeSlots.default, body))
        .then((res) => {
          setOpen(false);
          history.push(routes.app.groups.timeSlote);
          toast.success("The new timeSlote  has been added successfully");
        })
        .catch((err) => {
          toast.error(error?.massage || "something is wrong please try again");
        });
    } else
      run(authAxios.put(api.app.timeSlots.edit(timeSlotsId), body))
        .then((res) => {
          setOpen(false);
          history.push(routes.app.groups.timeSlote);
          toast.success("The timeSlote  has been Edit successfully");
        })
        .catch((err) => {
          toast.error(error?.massage || "something is wrong please try again");
        });
  };

  const handleAddTmeSloteSchema = Yup.object({
    day: Yup.string().required("Required field"),
    from: Yup.string().required("Required field"),
    to: Yup.string().required("Required field"),
  });

  return (
    <Modal
      className="md:w-[600px] w-full h-auto rounded-lg bg-background-sub scale-in"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        isAdd ? (
          <Button className="bg-green text-white md:w-[200px] w-full rounded-full font-serifEN font-normal text-base">
            <div className="flex justify-center gap-x-4">
              <AddCircleIcon />
              <p className="text-xl">Add Time Slot</p>
            </div>
          </Button>
        ) : (
          <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4">
            Edit
          </button>
        )
      }
    >
      <Modal.Content className="md:w-[600px] w-full h-auto bg-background-sub rounded-lg">
        <div className="bg-white md:w-[550px] w-full h-auto rounded-lg mx-auto my-0 ">
          <div className="flex justify-between mx-6 py-4 border-b-[1px]">
            <p className="text-xl pt-3">
              {isAdd ? "Select Time Slot" : "Edit Time Slot"}
            </p>

            <CloseIcon
              className="w-8 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div>
            <Formik
              initialValues={{
                day: oldName?.day || "",
                from: moment(oldName?.from).format("h:mm A") || "",
                to: moment(oldName?.to).format("h:mm A") || "",
              }}
              enableReinitialize
              onSubmit={handleAddTmeSlote}
              validationSchema={handleAddTmeSloteSchema}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <div className="w-full px-8 ">
                    <div className="mt-10 mx-auto flex flex-col gap-y-5  ">
                      <FormikMultiDropdown
                        name="day"
                        label={"Day"}
                        className="w-full"
                        options={weekDAyoptions}
                      />
                      <FormikTimePicker name="from" />
                      <FormikTimePicker name="to" />
                    </div>
                    <div className="md:flex block justify-center py-8 ">
                      <Button
                        loading={isLoading}
                        className="bg-green text-white w-[140px] rounded-full font-serifEN font-normal text-base"
                      >
                        {isAdd ? "Add" : "Edit"}
                      </Button>
                    </div>
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

export default TimeSloteModel;
