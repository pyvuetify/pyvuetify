<template>
  <v-slide-group
    :symbol="_symbol"
    :modelValue="_model_value"
    :tag="_tag"
    :disabled="_disabled"
    :max="_max"
    :multiple="_multiple"
    :selectedClass="_selected_class"
    :mandatory="_mandatory"
    :contentClass="_content_class"
    :direction="_direction"
    :mobile="_mobile"
    :nextIcon="_next_icon"
    :prevIcon="_prev_icon"
    :mobileBreakpoint="_mobile_breakpoint"
    :centerActive="_center_active"
    :scrollToActive="_scroll_to_active"
    :showArrows="_show_arrows"
  >
    {{ children }}
  </v-slide-group>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _symbol = useModelState("symbol");
const _model_value = useModelState("model_value");
const _tag = useModelState("tag");
const _disabled = useModelState("disabled");
const _max = useModelState("max");
const _multiple = useModelState("multiple");
const _selected_class = useModelState("selected_class");
const _mandatory = useModelState("mandatory");
const _content_class = useModelState("content_class");
const _direction = useModelState("direction");
const _mobile = useModelState("mobile");
const _next_icon = useModelState("next_icon");
const _prev_icon = useModelState("prev_icon");
const _mobile_breakpoint = useModelState("mobile_breakpoint");
const _center_active = useModelState("center_active");
const _scroll_to_active = useModelState("scroll_to_active");
const _show_arrows = useModelState("show_arrows");
</script>