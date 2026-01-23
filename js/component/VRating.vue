<template>
  <v-rating
    :length="_length"
    :tag="_tag"
    :name="_name"
    :disabled="_disabled"
    :size="_size"
    :modelValue="_model_value"
    :color="_color"
    :density="_density"
    :theme="_theme"
    :activeColor="_active_color"
    :readonly="_readonly"
    :ripple="_ripple"
    :hover="_hover"
    :clearable="_clearable"
    :itemAriaLabel="_item_aria_label"
    :emptyIcon="_empty_icon"
    :fullIcon="_full_icon"
    :halfIncrements="_half_increments"
    :itemLabelPosition="_item_label_position"
    :itemLabels="_item_labels"
  >
    {{ children }}
  </v-rating>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _length = useModelState("length");
const _tag = useModelState("tag");
const _name = useModelState("name");
const _disabled = useModelState("disabled");
const _size = useModelState("size");
const _model_value = useModelState("model_value");
const _color = useModelState("color");
const _density = useModelState("density");
const _theme = useModelState("theme");
const _active_color = useModelState("active_color");
const _readonly = useModelState("readonly");
const _ripple = useModelState("ripple");
const _hover = useModelState("hover");
const _clearable = useModelState("clearable");
const _item_aria_label = useModelState("item_aria_label");
const _empty_icon = useModelState("empty_icon");
const _full_icon = useModelState("full_icon");
const _half_increments = useModelState("half_increments");
const _item_label_position = useModelState("item_label_position");
const _item_labels = useModelState("item_labels");
</script>