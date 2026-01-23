<template>
  <v-field
    :flat="_flat"
    :modelValue="_model_value"
    :error="_error"
    :reverse="_reverse"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :color="_color"
    :variant="_variant"
    :disabled="_disabled"
    :id="_id"
    :active="_active"
    :baseColor="_base_color"
    :loading="_loading"
    :details="_details"
    :label="_label"
    :bgColor="_bg_color"
    :centerAffix="_center_affix"
    :glow="_glow"
    :iconColor="_icon_color"
    :focused="_focused"
    :appendInnerIcon="_append_inner_icon"
    :clearable="_clearable"
    :clearIcon="_clear_icon"
    :dirty="_dirty"
    :persistentClear="_persistent_clear"
    :prependInnerIcon="_prepend_inner_icon"
    :singleLine="_single_line"
    :labelId="_label_id"
  >
    {{ children }}
  </v-field>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _flat = useModelState("flat");
const _model_value = useModelState("model_value");
const _error = useModelState("error");
const _reverse = useModelState("reverse");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _variant = useModelState("variant");
const _disabled = useModelState("disabled");
const _id = useModelState("id");
const _active = useModelState("active");
const _base_color = useModelState("base_color");
const _loading = useModelState("loading");
const _details = useModelState("details");
const _label = useModelState("label");
const _bg_color = useModelState("bg_color");
const _center_affix = useModelState("center_affix");
const _glow = useModelState("glow");
const _icon_color = useModelState("icon_color");
const _focused = useModelState("focused");
const _append_inner_icon = useModelState("append_inner_icon");
const _clearable = useModelState("clearable");
const _clear_icon = useModelState("clear_icon");
const _dirty = useModelState("dirty");
const _persistent_clear = useModelState("persistent_clear");
const _prepend_inner_icon = useModelState("prepend_inner_icon");
const _single_line = useModelState("single_line");
const _label_id = useModelState("label_id");
</script>