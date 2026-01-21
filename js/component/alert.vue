<template>
  <v-alert :type="type"> I'm a vuetify alert! </v-alert>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const type = useModelState("type");
</script>
