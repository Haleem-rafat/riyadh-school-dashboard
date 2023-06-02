import { Field } from "formik";
import { TimeInput } from "semantic-ui-calendar-react";
import { get } from "wild-wild-path";

// import "../../../../src/assets/style/formik-time-picker.css";

import ErrorMessage from "./error-message";

function FormikTimePicker({ label, name, ...props }) {
  return (
    <Field name={name}>
      {({ form, field }) => {
        const { setFieldValue, setFieldTouched, errors, touched } = form;
        const { value } = field;

        return (
          <div className="relative">
            <TimeInput
              {...field}
              {...props}
              id={name}
              closable
              className="Edit_FormikTimePicker "
              iconPosition="left"
              timeFormat="AMPM"
              label={<label htmlFor={name}>{label}</label>}
              pickerStyle={{ border: "0" }}
              hideMobileKeyboard
              duration={0}
              // value={value}
              onBlur={() => setFieldTouched(name, true)}
              onChange={(e, { value }) => setFieldValue(name, value)}
              error={Boolean(touched[name] && errors[name])}
            />

            {get(touched, name) && get(errors, name) && (
              <ErrorMessage message={get(errors, name)} />
            )}
          </div>
        );
      }}
    </Field>
  );
}

export default FormikTimePicker;
