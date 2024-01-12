import { parseErrorMessage } from "@common/commonFunctions";
import { Controller } from "@plugins/hook-form";
import { Form, Input, InputProps } from "antd";
import trim from "lodash/trim";
import "./InputTextField.scss";

interface CustomInput extends InputProps {
  name: string;
  label: string;
  defaultValue: string | number;
  control: any;
  required?: boolean;
  itemClassName?: string;
}

export function InputTextField(props: CustomInput) {
  const {
    control,
    name,
    defaultValue,
    label,
    onChange,
    onBlur,
    required,
    itemClassName,
    ...rest
  } = props;
  return (
    <div className="custom-input-wrapper">
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
              className={itemClassName}
            >
              <Input
                {...field}
                {...rest}
                onChange={(...agrs) => {
                  if (onChange) {
                    onChange(...agrs);
                  }
                  field.onChange(...agrs);
                }}
                onBlur={(event) => {
                  if (onBlur) {
                    onBlur(event);
                  }
                  field.onChange(trim(event.target.value));
                  field.onBlur();
                }}
              />
            </Form.Item>
          );
        }}
      />
    </div>
  );
}

InputTextField.defaultProps = {
  defaultValue: "",
};
