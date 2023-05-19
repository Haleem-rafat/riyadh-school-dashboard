import { Field } from "formik";
import ErrorMessage from "./error-message";
import InputForm from "../input-filed/input-form";

function FormikInput({ label, name, className, placeholder, value, ...props }) {
  return (
    <>
      <Field name={name}>
        {({ form, field }) => {
          const { errors, touched } = form;
          return (
            <div>
              <InputForm
                label={label}
                placeholder={placeholder}
                type={props.type}
                value={value}
                {...field}
                {...props}
                error={Boolean(touched[name] && errors[name])}
              />
              {touched[name] && errors[name] && (
                <ErrorMessage message={errors[name]} />
              )}
            </div>
          );
        }}
      </Field>
    </>
  );
}

export default FormikInput;
