<template>
  <v-card-item
    :tag="_tag"
    :title="_title"
    :density="_density"
    :prependIcon="_prepend_icon"
    :appendIcon="_append_icon"
    :subtitle="_subtitle"
    :appendAvatar="_append_avatar"
    :prependAvatar="_prepend_avatar"
  >
    {{ children }}
  </v-card-item>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _title = useModelState("title");
const _density = useModelState("density");
const _prepend_icon = useModelState("prepend_icon");
const _append_icon = useModelState("append_icon");
const _subtitle = useModelState("subtitle");
const _append_avatar = useModelState("append_avatar");
const _prepend_avatar = useModelState("prepend_avatar");
</script>