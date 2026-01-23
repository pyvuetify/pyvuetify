<template>
  <v-stepper-vertical-item
    :title="_title"
    :text="_text"
    :icon="_icon"
    :error="_error"
    :height="_height"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :width="_width"
    :elevation="_elevation"
    :static="_static"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :color="_color"
    :disabled="_disabled"
    :value="_value"
    :readonly="_readonly"
    :ripple="_ripple"
    :selectedClass="_selected_class"
    :eager="_eager"
    :subtitle="_subtitle"
    :bgColor="_bg_color"
    :expandIcon="_expand_icon"
    :collapseIcon="_collapse_icon"
    :rules="_rules"
    :hideActions="_hide_actions"
    :focusable="_focusable"
    :completeIcon="_complete_icon"
    :editIcon="_edit_icon"
    :editable="_editable"
    :errorIcon="_error_icon"
    :complete="_complete"
  >
    {{ children }}
  </v-stepper-vertical-item>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _title = useModelState("title");
const _text = useModelState("text");
const _icon = useModelState("icon");
const _error = useModelState("error");
const _height = useModelState("height");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _width = useModelState("width");
const _elevation = useModelState("elevation");
const _static = useModelState("static");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _color = useModelState("color");
const _disabled = useModelState("disabled");
const _value = useModelState("value");
const _readonly = useModelState("readonly");
const _ripple = useModelState("ripple");
const _selected_class = useModelState("selected_class");
const _eager = useModelState("eager");
const _subtitle = useModelState("subtitle");
const _bg_color = useModelState("bg_color");
const _expand_icon = useModelState("expand_icon");
const _collapse_icon = useModelState("collapse_icon");
const _rules = useModelState("rules");
const _hide_actions = useModelState("hide_actions");
const _focusable = useModelState("focusable");
const _complete_icon = useModelState("complete_icon");
const _edit_icon = useModelState("edit_icon");
const _editable = useModelState("editable");
const _error_icon = useModelState("error_icon");
const _complete = useModelState("complete");
</script>