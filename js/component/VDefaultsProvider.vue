<template>
  <v-defaults-provider
    :disabled="_disabled"
    :root="_root"
    :reset="_reset"
    :scoped="_scoped"
    :defaults="_defaults"
  >
    {{ children }}
  </v-defaults-provider>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _disabled = useModelState("disabled");
const _root = useModelState("root");
const _reset = useModelState("reset");
const _scoped = useModelState("scoped");
const _defaults = useModelState("defaults");
</script>