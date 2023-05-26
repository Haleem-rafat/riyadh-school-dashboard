import React from "react";
import { Field } from "formik";
import { Dropdown } from "semantic-ui-react";
import ErrorMessage from "./error-message";
import { get } from "wild-wild-path";
// import "../../../../src/assets/style/formik-dropdown.css";

function FormikMultiDropdown({
  label,
  name,
  className,
  onChange,
  multiple,
  ...props
}) {
  return (
    <Field name={name}>
      {({ form, field }) => {
        const { setFieldValue, setFieldTouched, errors, touched } = form;
        return (
          <div className="relative w-full Edit_FormikMultiDropdown ">
            <Dropdown
              label={label}
              className="Edit_FormikMultiDropdown"
              id={name}
              {...field}
              {...props}
              error={Boolean(touched[name] && errors[name])}
              onBlur={() => setFieldTouched(name, true)}
              onChange={(e, { value }) => {
                setFieldValue(name, value);
                if (typeof onChange === "function") onChange(value);
              }}
              multiple={multiple}
              search
              fluid
              selection
              placeholder={label}
            >
              {props.children}
            </Dropdown>
            {get(touched, name) && get(errors, name) && (
              <ErrorMessage message={get(errors, name)} />
            )}
          </div>
        );
      }}
    </Field>
  );
}

export default FormikMultiDropdown;
