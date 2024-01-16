<script lang="ts" setup>
import logo from '@/assets/images/logo.svg';
import { LoadingOverlay } from '@/components';
import { reactive, ref } from 'vue';
import { useLoginForm } from '../../forms/login-form.ts';
const loginForm = reactive(useLoginForm());

const loading = ref(false);


async function handleLogin() {
  
}

</script>
<template>
  <LoadingOverlay :loading="loading" bg-color="#FFF" :opacity="1" />
  <div class="h-100 d-flex align-center justify-center">
    <v-card width="450">
      <!-- <v-card-title>
        <v-img :src="logo" :lazy-src="logo" :height="100"></v-img>
      </v-card-title> -->
      <v-card-text>
        <v-text-field
          v-model="loginForm.email"
          variant="outlined"
          color="primary"
          :label="$t('auth.form.email')"
          :placeholder="$t('auth.form.placeholder.email')"
          :error="!!loginForm.emailError"
        ></v-text-field>

        <v-text-field
          v-model="loginForm.password"
          type="password"
          color="primary"
          variant="outlined"
          :label="$t('auth.form.password')"
          :placeholder="$t('auth.form.placeholder.password')"
          :error="!!loginForm.passwordError"
        ></v-text-field>
        <div class="text-center">
          <v-btn
            color="primary"
            :text="$t('auth.button.login')"
            @click="handleLogin"
            @enter="handleLogin"
          />
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<style lang="scss" scoped></style>
