import { REGEX } from "@common/constants";
import yupLocale from "./locale";
import * as yup from "yup";

yup.setLocale(yupLocale);

yup.addMethod(yup.string, "isEmail", function () {
  return this.test({
    message: (data) => {
      return `yup.string.email|${JSON.stringify(data)}`;
    },
    test: function (value) {
      return !value || REGEX.EMAIL.test(value.toLocaleLowerCase());
    },
  });
});

export default yup;
