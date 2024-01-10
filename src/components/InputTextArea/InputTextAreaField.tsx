import { Form, Input } from "antd";

import "./InputTextAreaField.scss";
import trim from "lodash/trim";
import { TextAreaProps } from "antd/lib/input";
import { Controller } from "@plugins/hook-form";
import { parseErrorMessage } from "@common/commonFunctions";

interface CustomInputTextArea extends TextAreaProps {
  name: string;
  label: string;
  defaultValue: string | number;
  control: any;
  required?: boolean;
}

export function InputTextAreaField(props: CustomInputTextArea) {
  const {
    control,
    name,
    defaultValue,
    label,
    onChange,
    onFocus,
    required,
    ...rest
  } = props;
  return (
    <div className="custom-input-text-area-wrapper">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => {
          const { message = "" } = fieldState.error || {};
          const status = message ? "error" : "";
          return (
            <Form.Item
              label={label}
              validateStatus={status}
              help={parseErrorMessage(message)}
              required={required}
            >
              <Input.TextArea
                {...field}
                {...rest}
                onChange={(...agrs) => {
                  if (onChange) {
                    onChange(...agrs);
                  }
                  field.onChange(...agrs);
                }}
                onBlur={(event) => {
                  field.onChange(trim(event.target.value));
                  field.onBlur();
                }}
                onFocus={(event) => {
                  if (onFocus) {
                    onFocus(event);
                  }
                }}
              />
            </Form.Item>
          );
        }}
      />
    </div>
  );
}

InputTextAreaField.defaultProps = {
  defaultValue: "",
};
