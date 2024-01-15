import localStorageAuthService from '@/common/storages/authStorage';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useUserStore = defineStore('userStore', () => {
  const userRole = ref();
  const isFetching = ref(false);
  const isShowDialogChangePassword = ref(false);

  const profile = computed(() => {
    return localStorageAuthService.getLoginUser();
  });

  return {
    isFetching,
    profile,
    userRole,
    isShowDialogChangePassword,
  };
});
