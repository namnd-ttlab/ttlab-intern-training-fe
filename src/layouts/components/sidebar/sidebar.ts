import type { ISidebarGroup } from '@/common/interfaces';
import { useRole } from '@/common/stores';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export const sidebarItems = () => {
  const { t } = useI18n();
  const role = useRole();

  const viewSettingPermission = computed(
    () =>
      role.role?.view ||
      role.courseFormSetting?.view ||
      role.evaluationClassifiedSetting?.view ||
      role.evaluationCriteriaSetting?.view ||
      role.settingTimekeeping?.view,
  );

  const _sidebarItems = computed<ISidebarGroup[]>(() => []);
  return _sidebarItems;
};
