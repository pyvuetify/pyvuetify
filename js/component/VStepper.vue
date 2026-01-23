<template>
  <v-stepper
    :flat="_flat"
    :border="_border"
    :modelValue="_model_value"
    :height="_height"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :width="_width"
    :elevation="_elevation"
    :location="_location"
    :position="_position"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :disabled="_disabled"
    :max="_max"
    :multiple="_multiple"
    :items="_items"
    :selectedClass="_selected_class"
    :bgColor="_bg_color"
    :mandatory="_mandatory"
    :itemTitle="_item_title"
    :itemValue="_item_value"
    :itemProps="_item_props"
    :mobile="_mobile"
    :hideActions="_hide_actions"
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
  </v-stepper>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _flat = useModelState("flat");
const _border = useModelState("border");
const _model_value = useModelState("model_value");
const _height = useModelState("height");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _width = useModelState("width");
const _elevation = useModelState("elevation");
const _location = useModelState("location");
const _position = useModelState("position");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _disabled = useModelState("disabled");
const _max = useModelState("max");
const _multiple = useModelState("multiple");
const _items = useModelState("items");
const _selected_class = useModelState("selected_class");
const _bg_color = useModelState("bg_color");
const _mandatory = useModelState("mandatory");
const _item_title = useModelState("item_title");
const _item_value = useModelState("item_value");
const _item_props = useModelState("item_props");
const _mobile = useModelState("mobile");
const _hide_actions = useModelState("hide_actions");
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