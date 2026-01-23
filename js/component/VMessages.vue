<template>
  <v-messages
    :color="_color"
    :active="_active"
    :transition="_transition"
    :messages="_messages"
  >
    {{ children }}
  </v-messages>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _color = useModelState("color");
const _active = useModelState("active");
const _transition = useModelState("transition");
const _messages = useModelState("messages");
</script>