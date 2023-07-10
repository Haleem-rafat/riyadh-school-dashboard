import { Formik } from "formik";
import { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import { ReactComponent as AddCircleIcon } from "../../../src/assets/icons/add-circle-icon.svg";
import { ReactComponent as CloseIcon } from "../../../src/assets/icons/close-icon.svg";
import useGetAllGroups from "../../hooks/use-get-all-groups";
import FormikMultiDropdown from "../common/formik/formik-dropdown";
import FormikTextArea from "../common/formik/formik-text-area";
import useAxios from "../../hooks/use-axios";
import api from "../../api";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import { authAxios } from "../../config/axios-config";

function CreatenewNotificationModel() {
  const [open, setOpen] = useState(false);
  const [groupId, setGroupId] = useState();
  const { AllGroupOptions, loadingGroupOptions } = useGetAllGroups();
  const { run, isLoading, error } = useAxios();

  const SendNotifigationSchema = Yup.object({
    group: Yup.string().required("Required field"),
    text: Yup.string().required("Required field"),
  });

  const SendNotifigations = (values) => {
    const body = {
      body: values.text,
    };

    run(authAxios.post(api.app.notification.default(groupId), body))
      .then((res) => {
        setOpen(false);
        toast.success("The Notification has been send successfully");
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
        <Button className="bg-green text-white md:w-[350px] w-full rounded-full font-serifEN font-normal text-base">
          <div className="flex justify-center gap-x-4">
            <AddCircleIcon />
            <p className="text-xl">Create New Notification</p>
          </div>
        </Button>
      }
    >
      <Modal.Content className="md:w-[600px] w-full h-auto bg-background-sub rounded-lg">
        <div className="bg-white md:w-[550px] w-full h-auto rounded-lg mx-auto my-0 ">
          <div className="flex justify-between mx-6 py-4 border-b-[1px]">
            <p className="text-xl pt-3">Create New Notification</p>
            <CloseIcon
              className="w-8 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div>
            <Formik
              initialValues={{
                group: "",
                text: "",
              }}
              onSubmit={SendNotifigations}
              validationSchema={SendNotifigationSchema}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <div className="w-full px-8 ">
                    <div className="mt-10 mx-auto ">
                      <FormikMultiDropdown
                        name="group"
                        label="Select Group"
                        options={AllGroupOptions}
                        loading={loadingGroupOptions}
                        onChange={(e) => setGroupId(e)}
                      />
                    </div>
                    <div className="mt-10 mx-auto ">
                      <FormikTextArea name="text" placeholder="Text" />
                    </div>
                    <div className="md:flex block justify-center py-8 ">
                      <Button
                        loading={isLoading}
                        className="bg-green text-white w-[140px] rounded-full font-serifEN font-normal text-base"
                      >
                        Send
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

export default CreatenewNotificationModel;
