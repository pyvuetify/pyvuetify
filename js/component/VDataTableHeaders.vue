<template>
  <v-data-table-headers
    :color="_color"
    :density="_density"
    :sticky="_sticky"
    :mobile="_mobile"
    :mobileBreakpoint="_mobile_breakpoint"
    :loading="_loading"
    :initialSortOrder="_initial_sort_order"
    :multiSort="_multi_sort"
    :headerProps="_header_props"
    :disableSort="_disable_sort"
    :fixedHeader="_fixed_header"
    :sortAscIcon="_sort_asc_icon"
    :sortDescIcon="_sort_desc_icon"
  >
    {{ children }}
  </v-data-table-headers>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _color = useModelState("color");
const _density = useModelState("density");
const _sticky = useModelState("sticky");
const _mobile = useModelState("mobile");
const _mobile_breakpoint = useModelState("mobile_breakpoint");
const _loading = useModelState("loading");
const _initial_sort_order = useModelState("initial_sort_order");
const _multi_sort = useModelState("multi_sort");
const _header_props = useModelState("header_props");
const _disable_sort = useModelState("disable_sort");
const _fixed_header = useModelState("fixed_header");
const _sort_asc_icon = useModelState("sort_asc_icon");
const _sort_desc_icon = useModelState("sort_desc_icon");
</script>