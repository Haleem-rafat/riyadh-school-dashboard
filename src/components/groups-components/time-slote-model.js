import React from "react";
import { Button, Dimmer, Form, Loader, Modal } from "semantic-ui-react";
import { ReactComponent as AddCircleIcon } from "../../../src/assets/icons/add-circle-icon.svg";
import { ReactComponent as CloseIcon } from "../../../src/assets/icons/close-icon.svg";
import { Formik } from "formik";
import FormikInput from "../common/formik/formik-input";
import FormikTimePicker from "../common/formik/formik-time-picker";
import { authAxios } from "../../config/axios-config";
import api from "../../api";
import routes from "../../routes";
import { toast } from "react-hot-toast";
import useAxios from "../../hooks/use-axios";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { timeSloteOptions } from "../../utils/week-day-options";
import moment from "moment";

function TimeSloteModel({ isAdd, oldName, oldSlots, timeSlotsId }) {
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const { run, isLoading, error } = useAxios();

  const handleAddTmeSlote = (values, { resetForm }) => {
    resetForm({ values: "" });

    const slots = Object.keys(values)
      .filter((key) => key.includes("from"))
      .map((key) => {
        const day = key.substring(4);
        const from = moment(values[key], "LT").format(
          "YYYY-MM-DDTHH:mm:ss.SSS"
        );
        const to = moment(values[key.replace("from", "to")], "LT").format(
          "YYYY-MM-DDTHH:mm:ss.SSS"
        );
        return { day, from, to };
      })
      .filter((slot) => slot.from && slot.to);

    const result = {
      name: values.name,
      slots: slots.filter((slot) => slot.from !== null && slot.to !== null),
    };

    if (isAdd) {
      run(authAxios.post(api.app.timeSlots.default, result))
        .then((res) => {
          setOpen(false);
          history.push(routes.app.groups.timeSlote);
          toast.success("The new timeSlote  has been added successfully");
        })
        .catch((err) => {
          toast.error(error?.massage || "something is wrong please try again");
        });
    } else
      run(authAxios.put(api.app.timeSlots.edit(timeSlotsId), result))
        .then((res) => {
          resetForm();
          setOpen(false);
          history.push(routes.app.groups.timeSlote);
          toast.success("The timeSlote  has been Edit successfully");
        })
        .catch((err) => {
          toast.error(error?.massage || "something is wrong please try again");
        });
  };

  const timeSlotevalidations = timeSloteOptions?.reduce((acc, curr) => {
    acc[curr.from.name] = Yup.string().required(" Required field");
    acc[curr.to.name] = Yup.string().required(" Required field");
    return acc;
  }, {});

  const handleAddTmeSloteSchema = Yup.object({
    name: Yup.string().required(" Required field"),
    ...timeSlotevalidations,
  });

  return (
    <Modal
      className="md:w-[900px] w-full h-auto rounded-lg bg-background-sub scale-in"
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
      <Dimmer active={isLoading} inverted>
        <Loader active />
      </Dimmer>
      <Modal.Content className="md:w-[900px] w-full h-auto bg-background-sub rounded-lg ">
        <div className="bg-white md:w-[830px] w-full h-auto rounded-lg mx-auto my-0 overflow-y-scroll scrollbar-hide ">
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
                name: oldName || "",
                day: "",
                fromMonday:
                  moment(
                    oldSlots
                      ?.find(
                        (element) => element?.day === "Monday" || "Mondays"
                      )
                      ?.from?.replace("Z", "")
                  )
                    .local()
                    .format("hh:mm:A") || "",
                toMonday:
                  moment(
                    oldSlots
                      ?.find(
                        (element) => element?.day === "Monday" || "Mondays"
                      )
                      ?.to?.replace("Z", "")
                  )
                    .local()
                    .format("hh:mm:A") || " ",
                //
                fromTuesday:
                  moment(
                    oldSlots
                      ?.find((element) => element?.day === "Tuesday")
                      ?.from?.replace("Z", "")
                  )
                    .local()
                    .format("hh:mm:A") || " ",
                toTuesday:
                  moment(
                    oldSlots
                      ?.find((element) => element?.day === "Tuesday")
                      ?.to?.replace("Z", "")
                  )
                    .local()
                    .format("hh:mm:A") || " ",
                //
                fromWednesday:
                  moment(
                    oldSlots
                      ?.find((element) => element?.day === "Wednesday")
                      ?.from?.replace("Z", " ")
                  )
                    .local()
                    .format("hh:mm:A") || " ",
                toWednesday:
                  moment(
                    oldSlots
                      ?.find((element) => element?.day === "Wednesday")
                      ?.to?.replace("Z", " ")
                  )
                    .local()
                    .format("hh:mm:A") || " ",
                //
                fromThursday:
                  moment(
                    oldSlots
                      ?.find((element) => element?.day === "Thursday")
                      ?.from?.replace("Z", "")
                  )
                    .local()
                    .format("hh:mm:A") || "",
                toThursday:
                  moment(
                    oldSlots
                      ?.find((element) => element?.day === "Thursday")
                      ?.to?.replace("Z", "")
                  )
                    .local()
                    .format("hh:mm:A") || "",
                //
                fromFriday:
                  moment(
                    oldSlots
                      ?.find((element) => element?.day === "Friday")
                      ?.from?.replace("Z", "")
                  )
                    .local()
                    .format("hh:mm:A") || "",
                toFriday:
                  moment(
                    oldSlots
                      ?.find((element) => element?.day === "Friday")
                      ?.to?.replace("Z", "")
                  )
                    .local()
                    .format("hh:mm:A") || "",
                //
                fromSaturday:
                  moment(
                    oldSlots
                      ?.find((element) => element?.day === "Saturday")
                      ?.from?.replace("Z", "")
                  )
                    .local()
                    .format("hh:mm:A") || "",
                toSaturday:
                  moment(
                    oldSlots
                      ?.find((element) => element?.day === "Saturday")
                      ?.to?.replace("Z", "")
                  )
                    .local()
                    .format("hh:mm:A") || "",
                //
                fromSunday:
                  moment(
                    oldSlots
                      ?.find((element) => element?.day === "Sunday")
                      ?.from?.replace("Z", "")
                  )
                    .local()
                    .format("hh:mm:A") || "",
                toSunday:
                  moment(
                    oldSlots
                      ?.find((element) => element?.day === "Sunday")
                      ?.to?.replace("Z", "")
                  )
                    .local()
                    .format("hh:mm:A") || "",
              }}
              onSubmit={handleAddTmeSlote}
              validationSchema={handleAddTmeSloteSchema}
              enableReinitialize
              onReset={isAdd}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <div className="w-full px-5 ">
                    <div className="mt-4">
                      <p>
                        <FormikInput placeholder="Time Slot Name" name="name" />
                      </p>
                    </div>
                    <div className="mt-4 mx-auto flex flex-col  gap-y-5  ">
                      {timeSloteOptions.map((timeSlote) => (
                        <div className="flex justify-between flex-wrap ">
                          <div className="my-auto">
                            <FormikInput
                              name="day"
                              value={timeSlote?.day}
                              placeholder={timeSlote?.day}
                            />
                          </div>
                          <div className="flex  flex-wrap gap-x-5">
                            <div className="flex gap-x-10 ">
                              <p className="my-auto">From :</p>
                              <FormikTimePicker
                                name={`${timeSlote?.from?.name}`}
                                placeholder="00:00:AM"
                              />
                            </div>
                            <div className="flex flex-wrap gap-x-10">
                              <p className="my-auto">To :</p>
                              <FormikTimePicker
                                name={`${timeSlote?.to?.name}`}
                                placeholder="00:00:AM"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
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
