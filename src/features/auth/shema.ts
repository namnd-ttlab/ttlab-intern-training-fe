import { INPUT_TEXT_MAX_LENGTH } from "@common/constants";
import yup from "@plugins/yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = yup.object().shape({
  email: yup.string().trim().max(INPUT_TEXT_MAX_LENGTH).isEmail().required(),
  password: yup.string().max(INPUT_TEXT_MAX_LENGTH).required(),
});

export const loginResolver = yupResolver(loginSchema);
