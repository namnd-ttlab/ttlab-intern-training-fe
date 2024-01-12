import dayjs from '@/plugins/dayjs';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const useDayjs = () => {
  const { i18n } = useTranslation();
  const customDayjs = useCallback(
    (date?: string | number | Date | dayjs.Dayjs | null) => {
      return dayjs(date).locale(i18n.language || 'en');
    },
    [i18n.language],
  );
  return {
    dayjs: customDayjs,
  };
};
