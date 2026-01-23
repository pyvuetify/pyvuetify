<template>
  <v-scroll-x-reverse-transition
    :disabled="_disabled"
    :mode="_mode"
    :origin="_origin"
    :group="_group"
    :hideOnLeave="_hide_on_leave"
    :leaveAbsolute="_leave_absolute"
  >
    {{ children }}
  </v-scroll-x-reverse-transition>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _disabled = useModelState("disabled");
const _mode = useModelState("mode");
const _origin = useModelState("origin");
const _group = useModelState("group");
const _hide_on_leave = useModelState("hide_on_leave");
const _leave_absolute = useModelState("leave_absolute");
</script>