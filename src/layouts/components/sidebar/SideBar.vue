<script lang="ts" setup>
import { useSidebarStore } from '@/common/stores';
import { reactive, ref } from 'vue';
import { sidebarItems } from './sidebar';

const sidebarStore = useSidebarStore();
const rail = ref(sidebarStore.rail);
const width = ref(300);
const sidebar = reactive(sidebarItems());

const toggleCollapse = () => {
  if (!rail.value) {
    width.value = 60;
    setTimeout(() => {
      rail.value = !rail.value;
    }, 240);
  } else {
    width.value = 300;
    rail.value = !rail.value;
  }
  sidebarStore.setRail(rail.value);
};
</script>

<template>
  <v-navigation-drawer
    class="sidebar"
    v-model:rail="rail"
    :rail-width="60"
    :permanent="true"
    :width="width"
  >
  <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
  <v-divider></v-divider>
  <v-list-item link title="List Item 1"></v-list-item>
  <v-list-item link title="List Item 2"></v-list-item>
    <v-icon
      class="sidebar-collapse"
      :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
      size="24"
      @click="toggleCollapse"
    />
  </v-navigation-drawer>
</template>
<style lang="scss" scoped>
.sidebar {
  position: relative;
  text-align: left;
  transition: all 0.24s linear !important;

  .sidebar-collapse {
    position: absolute;
    width: 26px;
    height: 26px;
    top: 17px;
    right: 0;
    display: flex;
    align-items: center;
    border-radius: 50%;
    transform: translateX(50%);
    background-color: $color-white;
    border: 1px solid #e1e3e9;
    box-shadow:
      0px 1px 3px 0px #130a2e21,
      0px 3px 14px 0px #130a2e08,
      0px 8px 32px 0px #130a2e12,
      0px 30px 84px 0px #130a2e14 !important;
    transition: all 0.4s ease-in;
    cursor: pointer;
    &:hover {
      transform: scale(1.2) translateX(40%);
    }
  }
}

:deep(.v-list-item) {
  color: $color-text-black;
}
.user-info {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: $color-white;
  box-shadow:
    0px 1px 3px 0px #130a2e21,
    0px 3px 14px 0px #130a2e08,
    0px 8px 32px 0px #130a2e12,
    0px 30px 84px 0px #130a2e14 !important;
}
</style>
