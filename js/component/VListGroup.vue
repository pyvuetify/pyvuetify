<template>
  <v-list-group
    :tag="_tag"
    :title="_title"
    :disabled="_disabled"
    :value="_value"
    :color="_color"
    :baseColor="_base_color"
    :activeColor="_active_color"
    :prependIcon="_prepend_icon"
    :appendIcon="_append_icon"
    :fluid="_fluid"
    :collapseIcon="_collapse_icon"
    :expandIcon="_expand_icon"
    :rawId="_raw_id"
    :subgroup="_subgroup"
  >
    {{ children }}
  </v-list-group>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _title = useModelState("title");
const _disabled = useModelState("disabled");
const _value = useModelState("value");
const _color = useModelState("color");
const _base_color = useModelState("base_color");
const _active_color = useModelState("active_color");
const _prepend_icon = useModelState("prepend_icon");
const _append_icon = useModelState("append_icon");
const _fluid = useModelState("fluid");
const _collapse_icon = useModelState("collapse_icon");
const _expand_icon = useModelState("expand_icon");
const _raw_id = useModelState("raw_id");
const _subgroup = useModelState("subgroup");
</script>