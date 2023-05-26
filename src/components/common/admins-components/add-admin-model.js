import React from "react";
import { Button, Form, Header, Image, Modal } from "semantic-ui-react";
import { ReactComponent as AddCircleIcon } from "../../../../src/assets/icons/add-circle-icon.svg";
import { ReactComponent as CloseIcon } from "../../../../src/assets/icons/close-icon.svg";
import { Formik } from "formik";
import FormikInput from "../formik/formik-input";
import { useHistory } from "react-router-dom";
import useAxios from "../../../hooks/use-axios";
import { authAxios } from "../../../config/axios-config";
import { toast } from "react-hot-toast";
import routes from "../../../routes";
import api from "../../../api";
import * as Yup from "yup";

function AddAdminModel({ isAdd, oldName, adminId }) {
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const { run, isLoading, error } = useAxios();

  const handleAddAdmin = (values) => {
    if (isAdd) {
      run(
        authAxios.post(api.app.adminsManagers.postAdmins, {
          ...values,
          role: "SUB_ADMIN",
        })
      )
        .then((res) => {
          setOpen(false);
          history.push(routes.app.admins.default);
          toast.success("The new sub admin has been added successfully");
        })
        .catch((err) => {
          toast.error(error?.massage || "something is wrong please try again");
        });
    } else
      run(
        authAxios.put(api.app.timeSlots.edit(adminId), {
          ...values,
          role: "SUB_ADMIN",
        })
      )
        .then((res) => {
          setOpen(false);
          history.push(routes.app.groups.timeSlote);
          toast.success("The timeSlote  has been Edit successfully");
        })
        .catch((err) => {
          toast.error(error?.massage || "something is wrong please try again");
        });
  };

  const handleAddAdminSchema = Yup.object({
    fullName: Yup.string().required("Required field"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Required field"),
  });

  return (
    <Modal
      className="md:w-[600px] w-full h-auto rounded-lg bg-background-sub scale-in"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button className="bg-green text-white md:w-[200px] w-full rounded-full font-serifEN font-normal text-base">
          <div className="flex justify-center gap-x-4">
            <AddCircleIcon />
            <p className="text-xl">Add admin</p>
          </div>
        </Button>
      }
    >
      <Modal.Content className="md:w-[600px] w-full h-auto bg-background-sub rounded-lg">
        <div className="bg-white md:w-[550px] w-full h-auto rounded-lg mx-auto my-0 ">
          <div className="flex justify-between mx-6 py-4 border-b-[1px]">
            <p className="text-xl pt-3">Add admin</p>
            <CloseIcon
              className="w-8 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                password: "",
              }}
              onSubmit={handleAddAdmin}
              validationSchema={handleAddAdminSchema}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <div className="w-full px-8 ">
                    <div className="mt-10 mx-auto ">
                      <FormikInput
                        name="fullName"
                        placeholder="Full Name"
                        type={"text"}
                      />
                    </div>
                    <div className="mt-10 mx-auto ">
                      <FormikInput
                        name="email"
                        placeholder="email"
                        type={"email"}
                      />
                    </div>
                    <div className="mt-10 mx-auto ">
                      <FormikInput
                        name="password"
                        placeholder="password"
                        type={"password"}
                      />
                    </div>
                    <div className="md:flex block justify-center py-8 ">
                      <Button
                        loading={isLoading}
                        className="bg-green text-white w-[140px] rounded-full font-serifEN font-normal text-base"
                      >
                        Add
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

export default AddAdminModel;
