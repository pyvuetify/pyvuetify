<template>
  <v-stepper-vertical
    :flat="_flat"
    :modelValue="_model_value"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :variant="_variant"
    :disabled="_disabled"
    :max="_max"
    :multiple="_multiple"
    :items="_items"
    :readonly="_readonly"
    :ripple="_ripple"
    :selectedClass="_selected_class"
    :eager="_eager"
    :bgColor="_bg_color"
    :expandIcon="_expand_icon"
    :collapseIcon="_collapse_icon"
    :mandatory="_mandatory"
    :itemTitle="_item_title"
    :itemValue="_item_value"
    :itemProps="_item_props"
    :mobile="_mobile"
    :hideActions="_hide_actions"
    :focusable="_focusable"
    :mobileBreakpoint="_mobile_breakpoint"
    :altLabels="_alt_labels"
    :completeIcon="_complete_icon"
    :editIcon="_edit_icon"
    :editable="_editable"
    :errorIcon="_error_icon"
    :nonLinear="_non_linear"
    :prevText="_prev_text"
    :nextText="_next_text"
  >
    {{ children }}
  </v-stepper-vertical>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _flat = useModelState("flat");
const _model_value = useModelState("model_value");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _variant = useModelState("variant");
const _disabled = useModelState("disabled");
const _max = useModelState("max");
const _multiple = useModelState("multiple");
const _items = useModelState("items");
const _readonly = useModelState("readonly");
const _ripple = useModelState("ripple");
const _selected_class = useModelState("selected_class");
const _eager = useModelState("eager");
const _bg_color = useModelState("bg_color");
const _expand_icon = useModelState("expand_icon");
const _collapse_icon = useModelState("collapse_icon");
const _mandatory = useModelState("mandatory");
const _item_title = useModelState("item_title");
const _item_value = useModelState("item_value");
const _item_props = useModelState("item_props");
const _mobile = useModelState("mobile");
const _hide_actions = useModelState("hide_actions");
const _focusable = useModelState("focusable");
const _mobile_breakpoint = useModelState("mobile_breakpoint");
const _alt_labels = useModelState("alt_labels");
const _complete_icon = useModelState("complete_icon");
const _edit_icon = useModelState("edit_icon");
const _editable = useModelState("editable");
const _error_icon = useModelState("error_icon");
const _non_linear = useModelState("non_linear");
const _prev_text = useModelState("prev_text");
const _next_text = useModelState("next_text");
</script>