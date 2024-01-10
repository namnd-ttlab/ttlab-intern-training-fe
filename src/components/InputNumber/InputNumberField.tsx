import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { parseErrorMessage } from "@common/commonFunctions";
import { REGEX } from "@common/constants";
import { Form, Input, InputProps } from "antd";
import classNames from "classnames";
import { ChangeEvent } from "react";
import { Controller } from "react-hook-form";
import "./InputNumberField.scss";

interface CustomInput extends InputProps {
  name: string;
  label: string;
  decimal: number;
  min: number;
  isInt: boolean;
  isShowIconArrow: boolean;
  defaultValue: string | number;
  control: any;
  max?: number;
  hideHelpText?: boolean;
}

export function InputNumberField(props: CustomInput) {
  const {
    control,
    name,
    defaultValue,
    label,
    isInt,
    onChange,
    max,
    min,
    required,
    isShowIconArrow,
    addonAfter = null,
    hideHelpText,
    ...rest
  } = props;
  const intPattern = new RegExp(REGEX.INT_PATTERN);
  const floatPattern = new RegExp(REGEX.FLOAT_PATTERN);

  return (
    <div
      className={classNames("custom-input-number-wrapper", {
        "hide-help-text": hideHelpText,
      })}
    >
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
              <Input
                {...field}
                {...rest}
                onChange={(event) => {
                  const val = event.target.value;
                  if (val && isInt && !intPattern.test(val)) {
                    event.target.value = "";
                    return;
                  }
                  if (val && !intPattern.test(val) && !floatPattern.test(val)) {
                    event.target.value = "";
                    return;
                  }
                  if (max && Number(val) > max) {
                    event.target.value = max.toString();
                  }

                  if (onChange) {
                    onChange(event);
                  }
                  field.onChange(event);
                }}
                addonAfter={
                  isShowIconArrow ? (
                    <div className="arrow-control">
                      <UpOutlined
                        onClick={() => {
                          if (rest.disabled) return;
                          const value = field.value;
                          const val = Number(value) + 1;
                          if (max && val > max) return;
                          field.onChange(val);
                          if (onChange) {
                            const event: ChangeEvent<HTMLInputElement> = {
                              target: {
                                value: `${val}`,
                              },
                            } as ChangeEvent<HTMLInputElement>;
                            onChange(event);
                          }
                        }}
                      />

                      <DownOutlined
                        onClick={() => {
                          if (rest.disabled) return;
                          const value = field.value;
                          const val = Number(value) - 1;
                          if (val < min) return;
                          field.onChange(val);
                          if (onChange) {
                            const event: ChangeEvent<HTMLInputElement> = {
                              target: {
                                value: `${val}`,
                              },
                            } as ChangeEvent<HTMLInputElement>;
                            onChange(event);
                          }
                        }}
                      />
                    </div>
                  ) : (
                    addonAfter
                  )
                }
              />
            </Form.Item>
          );
        }}
      />
    </div>
  );
}

InputNumberField.defaultProps = {
  defaultValue: "",
  isInt: true,
  isShowIconArrow: false,
  decimal: 2,
  min: 0,
};
