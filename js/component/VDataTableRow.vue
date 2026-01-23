<template>
  <v-data-table-row
    :color="_color"
    :density="_density"
    :mobile="_mobile"
    :mobileBreakpoint="_mobile_breakpoint"
    :item="_item"
    :cellProps="_cell_props"
    :index="_index"
    :collapseIcon="_collapse_icon"
    :expandIcon="_expand_icon"
  >
    {{ children }}
  </v-data-table-row>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _color = useModelState("color");
const _density = useModelState("density");
const _mobile = useModelState("mobile");
const _mobile_breakpoint = useModelState("mobile_breakpoint");
const _item = useModelState("item");
const _cell_props = useModelState("cell_props");
const _index = useModelState("index");
const _collapse_icon = useModelState("collapse_icon");
const _expand_icon = useModelState("expand_icon");
</script>