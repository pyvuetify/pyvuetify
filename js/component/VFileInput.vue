<template>
  <v-file-input
    :flat="_flat"
    :modelValue="_model_value"
    :error="_error"
    :reverse="_reverse"
    :density="_density"
    :maxWidth="_max_width"
    :minWidth="_min_width"
    :width="_width"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :color="_color"
    :variant="_variant"
    :name="_name"
    :disabled="_disabled"
    :multiple="_multiple"
    :id="_id"
    :active="_active"
    :baseColor="_base_color"
    :prependIcon="_prepend_icon"
    :appendIcon="_append_icon"
    :readonly="_readonly"
    :loading="_loading"
    :label="_label"
    :chips="_chips"
    :bgColor="_bg_color"
    :counter="_counter"
    :centerAffix="_center_affix"
    :glow="_glow"
    :iconColor="_icon_color"
    :hideSpinButtons="_hide_spin_buttons"
    :hint="_hint"
    :persistentHint="_persistent_hint"
    :messages="_messages"
    :errorMessages="_error_messages"
    :maxErrors="_max_errors"
    :rules="_rules"
    :validateOn="_validate_on"
    :validationValue="_validation_value"
    :focused="_focused"
    :hideDetails="_hide_details"
    :appendInnerIcon="_append_inner_icon"
    :clearable="_clearable"
    :clearIcon="_clear_icon"
    :dirty="_dirty"
    :persistentClear="_persistent_clear"
    :prependInnerIcon="_prepend_inner_icon"
    :singleLine="_single_line"
    :counterSizeString="_counter_size_string"
    :counterString="_counter_string"
    :hideInput="_hide_input"
    :showSize="_show_size"
    :truncateLength="_truncate_length"
    :filterByType="_filter_by_type"
  >
    {{ children }}
  </v-file-input>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _flat = useModelState("flat");
const _model_value = useModelState("model_value");
const _error = useModelState("error");
const _reverse = useModelState("reverse");
const _density = useModelState("density");
const _max_width = useModelState("max_width");
const _min_width = useModelState("min_width");
const _width = useModelState("width");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _variant = useModelState("variant");
const _name = useModelState("name");
const _disabled = useModelState("disabled");
const _multiple = useModelState("multiple");
const _id = useModelState("id");
const _active = useModelState("active");
const _base_color = useModelState("base_color");
const _prepend_icon = useModelState("prepend_icon");
const _append_icon = useModelState("append_icon");
const _readonly = useModelState("readonly");
const _loading = useModelState("loading");
const _label = useModelState("label");
const _chips = useModelState("chips");
const _bg_color = useModelState("bg_color");
const _counter = useModelState("counter");
const _center_affix = useModelState("center_affix");
const _glow = useModelState("glow");
const _icon_color = useModelState("icon_color");
const _hide_spin_buttons = useModelState("hide_spin_buttons");
const _hint = useModelState("hint");
const _persistent_hint = useModelState("persistent_hint");
const _messages = useModelState("messages");
const _error_messages = useModelState("error_messages");
const _max_errors = useModelState("max_errors");
const _rules = useModelState("rules");
const _validate_on = useModelState("validate_on");
const _validation_value = useModelState("validation_value");
const _focused = useModelState("focused");
const _hide_details = useModelState("hide_details");
const _append_inner_icon = useModelState("append_inner_icon");
const _clearable = useModelState("clearable");
const _clear_icon = useModelState("clear_icon");
const _dirty = useModelState("dirty");
const _persistent_clear = useModelState("persistent_clear");
const _prepend_inner_icon = useModelState("prepend_inner_icon");
const _single_line = useModelState("single_line");
const _counter_size_string = useModelState("counter_size_string");
const _counter_string = useModelState("counter_string");
const _hide_input = useModelState("hide_input");
const _show_size = useModelState("show_size");
const _truncate_length = useModelState("truncate_length");
const _filter_by_type = useModelState("filter_by_type");
</script>