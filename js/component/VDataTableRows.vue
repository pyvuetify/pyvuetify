<template>
  <v-data-table-rows
    :color="_color"
    :density="_density"
    :mobile="_mobile"
    :mobileBreakpoint="_mobile_breakpoint"
    :items="_items"
    :loading="_loading"
    :cellProps="_cell_props"
    :loadingText="_loading_text"
    :hideNoData="_hide_no_data"
    :noDataText="_no_data_text"
    :collapseIcon="_collapse_icon"
    :expandIcon="_expand_icon"
    :groupCollapseIcon="_group_collapse_icon"
    :groupExpandIcon="_group_expand_icon"
    :rowProps="_row_props"
  >
    {{ children }}
  </v-data-table-rows>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _color = useModelState("color");
const _density = useModelState("density");
const _mobile = useModelState("mobile");
const _mobile_breakpoint = useModelState("mobile_breakpoint");
const _items = useModelState("items");
const _loading = useModelState("loading");
const _cell_props = useModelState("cell_props");
const _loading_text = useModelState("loading_text");
const _hide_no_data = useModelState("hide_no_data");
const _no_data_text = useModelState("no_data_text");
const _collapse_icon = useModelState("collapse_icon");
const _expand_icon = useModelState("expand_icon");
const _group_collapse_icon = useModelState("group_collapse_icon");
const _group_expand_icon = useModelState("group_expand_icon");
const _row_props = useModelState("row_props");
</script>