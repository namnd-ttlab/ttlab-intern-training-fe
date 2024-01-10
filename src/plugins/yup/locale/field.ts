import { SupportLanguage } from '@common/constants';
import { fieldsJa } from './ja/fields';
import { fieldsEn } from './en/fields';

export const yupFields = {
    [SupportLanguage.JA]: fieldsJa,
    [SupportLanguage.EN]: fieldsEn,
};
