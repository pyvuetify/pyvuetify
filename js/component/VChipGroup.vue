<template>
  <v-chip-group
    :symbol="_symbol"
    :filter="_filter"
    :tag="_tag"
    :disabled="_disabled"
    :max="_max"
    :multiple="_multiple"
    :modelValue="_model_value"
    :color="_color"
    :theme="_theme"
    :variant="_variant"
    :mobile="_mobile"
    :mobileBreakpoint="_mobile_breakpoint"
    :baseColor="_base_color"
    :selectedClass="_selected_class"
    :mandatory="_mandatory"
    :contentClass="_content_class"
    :direction="_direction"
    :column="_column"
    :nextIcon="_next_icon"
    :prevIcon="_prev_icon"
    :showArrows="_show_arrows"
    :valueComparator="_value_comparator"
    :centerActive="_center_active"
    :scrollToActive="_scroll_to_active"
  >
    {{ children }}
  </v-chip-group>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _symbol = useModelState("symbol");
const _filter = useModelState("filter");
const _tag = useModelState("tag");
const _disabled = useModelState("disabled");
const _max = useModelState("max");
const _multiple = useModelState("multiple");
const _model_value = useModelState("model_value");
const _color = useModelState("color");
const _theme = useModelState("theme");
const _variant = useModelState("variant");
const _mobile = useModelState("mobile");
const _mobile_breakpoint = useModelState("mobile_breakpoint");
const _base_color = useModelState("base_color");
const _selected_class = useModelState("selected_class");
const _mandatory = useModelState("mandatory");
const _content_class = useModelState("content_class");
const _direction = useModelState("direction");
const _column = useModelState("column");
const _next_icon = useModelState("next_icon");
const _prev_icon = useModelState("prev_icon");
const _show_arrows = useModelState("show_arrows");
const _value_comparator = useModelState("value_comparator");
const _center_active = useModelState("center_active");
const _scroll_to_active = useModelState("scroll_to_active");
</script>