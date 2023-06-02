import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import { ReactComponent as AddCircleIcon } from "../../../src/assets/icons/add-circle-icon.svg";
import { ReactComponent as CloseIcon } from "../../../src/assets/icons/close-icon.svg";
import { Formik } from "formik";
import FormikMultiDropdown from "../common/formik/formik-dropdown";
import moment from "moment";
import { authAxios } from "../../config/axios-config";
import routes from "../../routes";
import api from "../../api";
import { useHistory } from "react-router-dom";
import useAxios from "../../hooks/use-axios";
import { toast } from "react-hot-toast";
import useGetAllGroups from "../../hooks/use-get-all-groups";
import useGetAllTimeSlots from "../../hooks/use-get-all-time-slots";

function EditUseModel({ oldGroup, oldTimeSlots, userId }) {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const { AllGroupOptions, loadingGroupOptions } = useGetAllGroups();
  const { AllTimeSlots, loadingTimeSlotsOptions } = useGetAllTimeSlots();

  const { run, isLoading, error } = useAxios();
  const handleEditUser = (values) => {
    run(authAxios.put(api.app.employees.edit(userId), values))
      .then((res) => {
        setOpen(false);
        history.push(routes.app.users.default);
        toast.success("The Edit on user has been added successfully");
      })
      .catch((err) => {
        toast.error(error?.massage || "something is wrong please try again");
      });
  };

  return (
    <Modal
      className="md:w-[600px] w-full h-auto rounded-lg bg-background-sub scale-in"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <button className="text-[#35C1CB] border-[1px] border-[#35C1CB] rounded-full py-1 px-4 font-serifEN text-base">
          <p className="text-xl">Edit </p>
        </button>
      }
    >
      <Modal.Content className="md:w-[600px] w-full h-auto bg-background-sub rounded-lg">
        <div className="bg-white md:w-[550px] w-full h-auto rounded-lg mx-auto my-0 ">
          <div className="flex justify-between mx-6 py-4 border-b-[1px]">
            <p className="text-xl pt-3">Edit User</p>
            <CloseIcon
              className="w-8 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div>
            <Formik
              initialValues={{
                groupId: oldGroup?.map((e) => e?._id) || "",
                timeSlotId: oldGroup?.map((e) => e?._id) || "",
              }}
              // validationSchema={logInSchema}
              onSubmit={handleEditUser}
              enableReinitialize
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <div className="w-full px-8 ">
                    <div className="mt-10 mx-auto ">
                      <FormikMultiDropdown
                        name="groupId"
                        label="Groups"
                        option={AllGroupOptions}
                        loading={loadingGroupOptions}
                      />
                    </div>
                    <div className="mt-10 mx-auto ">
                      <FormikMultiDropdown
                        name="timeSlotId"
                        label="Time Slots"
                        option={AllTimeSlots}
                        loading={loadingTimeSlotsOptions}
                      />
                    </div>
                    <div className="md:flex block justify-center py-8 ">
                      <Button
                        loading={isLoading}
                        className="bg-green text-white w-[140px] rounded-full font-serifEN font-normal text-base"
                      >
                        Edit
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

export default EditUseModel;
