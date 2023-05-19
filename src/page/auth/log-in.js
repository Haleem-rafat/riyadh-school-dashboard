import React from "react";

import routes from "../../routes";
import { useHistory } from "react-router-dom";

import * as Yup from "yup";
import { Formik } from "formik";

import FormikInput from "../../components/common/formik/formik-input";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { toast } from "react-hot-toast";

import useAxios from "../../hooks/use-axios";

import rightAuthLogo from "../../../src/assets/img/right-auth-logo.png";
import mainLogo from "../../../src/assets/img/main-logo.png";

const LogIn = () => {
  const history = useHistory();

  const { run, isLoading } = useAxios();

  const logIn = (values) => {
    console.log("====================================");
    console.log(values);
    console.log("====================================");
  };

  const logInSchema = Yup.object({
    email: Yup.string().required("Required field"),
    password: Yup.string().min(8).max(20).required("Required field").trim(),
  });

  return (
    <div className="animate-in flex justify-between">
      <div className="w-1/2 h-screen flex flex-col justify-between">
        <div className="mx-16 my-auto">
          <img className="w-[100px] h-[100px] " src={mainLogo} alt="mainLogo" />
          <h1 className="text-4xl font-bold pt-[100px]">Login</h1>
          <p className="text-gray/50 mt-8">
            Welcome! Please Login or Create a New Account
          </p>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={logIn}
            validationSchema={logInSchema}
          >
            {(formik) => (
              <Form onSubmit={formik.handleSubmit}>
                <div className="w-full ">
                  <div className="mt-10 mx-auto ">
                    <FormikInput
                      name="email"
                      type={"email"}
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="mt-10 mx-auto ">
                    <FormikInput
                      name="password"
                      type={"password"}
                      placeholder="password"
                    />
                  </div>
                  <div className="my-8">
                    <Checkbox className="text-gray" label="Remember me" />
                  </div>
                  <div className="md:flex block justify-center ">
                    <Button
                      loading={isLoading}
                      onClick={() => {
                        history.push(routes.app.default);
                      }}
                      className="bg-primary w-full h-[55px] rounded-[10px] text-white font-normal text-base rtl:font-serifAR ltr:font-serifEN"
                    >
                      Log in
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <p className="flex justify-center  mb-[60px] text-gray/50">
          All Rights Are Save RIYADH SCHOOLS
        </p>
      </div>

      <div className="h-screen bg-primary w-full flex ">
        <img
          className="w-[600px] h-[600px] object-cover mx-auto my-auto "
          src={rightAuthLogo}
          alt="rightAuthLogo"
        />
      </div>
    </div>
  );
};

export default LogIn;
