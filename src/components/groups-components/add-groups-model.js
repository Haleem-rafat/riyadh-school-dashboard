import React from "react";
import { Button, Form, Header, Image, Modal } from "semantic-ui-react";
import { ReactComponent as AddCircleIcon } from "../../../src/assets/icons/add-circle-icon.svg";
import { ReactComponent as CloseIcon } from "../../../src/assets/icons/close-icon.svg";
import { Formik } from "formik";
import FormikInput from "../common/formik/formik-input";
import useAxios from "../../hooks/use-axios";
import { authAxios } from "../../config/axios-config";
import api from "../../api";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import routes from "../../routes";

function AddGroupsModel({ isAdd, oldName, groupId }) {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const { run, isLoading, error } = useAxios();

  const handleAddGroupName = (values) => {
    if (isAdd) {
      run(authAxios.post(api.app.groups.default, values))
        .then((res) => {
          setOpen(false);
          history.push(routes.app.groups.default);
          toast.success("The new group name has been added successfully");
        })
        .catch((err) => {
          toast.error(error?.massage || "something is wrong please try again");
        });
    } else
      run(authAxios.put(api.app.groups.edit(groupId), values))
        .then((res) => {
          setOpen(false);
          history.push(routes.app.groups.default);
          toast.success("The  group name has been Edit successfully");
        })
        .catch((err) => {
          toast.error(error?.massage || "something is wrong please try again");
        });
  };

  const addGroupNameSchema = Yup.object({
    name: Yup.string().required("Required field"),
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
              <p className="text-xl">Add Group</p>
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
            <p className="text-xl pt-3">{isAdd ? "Add Group" : "Edit Group"}</p>
            <CloseIcon
              className="w-8 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div>
            <Formik
              initialValues={{
                name: oldName || "",
              }}
              enableReinitialize
              onSubmit={handleAddGroupName}
              validationSchema={addGroupNameSchema}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <div className="w-full px-8 ">
                    <div className="mt-10 mx-auto ">
                      <FormikInput
                        name="name"
                        placeholder="Group"
                        type={"text"}
                      />
                    </div>
                    <div className="md:flex block justify-center py-8 ">
                      {isAdd ? (
                        <Button
                          loading={isLoading}
                          className="bg-green text-white w-[140px] rounded-full font-serifEN font-normal text-base"
                        >
                          Add
                        </Button>
                      ) : (
                        <Button
                          loading={isLoading}
                          className="bg-green text-white w-[140px] rounded-full font-serifEN font-normal text-base"
                        >
                          Edit
                        </Button>
                      )}
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

export default AddGroupsModel;
