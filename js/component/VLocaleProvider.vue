<template>
  <v-locale-provider
    :locale="_locale"
    :rtl="_rtl"
    :messages="_messages"
    :fallbackLocale="_fallback_locale"
  >
    {{ children }}
  </v-locale-provider>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _locale = useModelState("locale");
const _rtl = useModelState("rtl");
const _messages = useModelState("messages");
const _fallback_locale = useModelState("fallback_locale");
</script>