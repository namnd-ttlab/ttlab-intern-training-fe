import { INPUT_TEXT_MAX_LENGTH } from "@common/constants";
import yup from "@plugins/yup";

export const productSchema = yup.object().shape({
  name: yup.string().max(INPUT_TEXT_MAX_LENGTH).required(),
});
