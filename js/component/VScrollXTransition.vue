<template>
  <v-scroll-x-transition
    :mode="_mode"
    :disabled="_disabled"
    :group="_group"
    :origin="_origin"
    :hideOnLeave="_hide_on_leave"
    :leaveAbsolute="_leave_absolute"
  >
    {{ children }}
  </v-scroll-x-transition>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _mode = useModelState("mode");
const _disabled = useModelState("disabled");
const _group = useModelState("group");
const _origin = useModelState("origin");
const _hide_on_leave = useModelState("hide_on_leave");
const _leave_absolute = useModelState("leave_absolute");
</script>