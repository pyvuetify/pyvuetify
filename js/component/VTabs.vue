<template>
  <v-tabs
    :symbol="_symbol"
    :modelValue="_model_value"
    :density="_density"
    :height="_height"
    :tag="_tag"
    :color="_color"
    :disabled="_disabled"
    :max="_max"
    :multiple="_multiple"
    :items="_items"
    :stacked="_stacked"
    :selectedClass="_selected_class"
    :spaced="_spaced"
    :bgColor="_bg_color"
    :mandatory="_mandatory"
    :contentClass="_content_class"
    :direction="_direction"
    :mobile="_mobile"
    :nextIcon="_next_icon"
    :prevIcon="_prev_icon"
    :inset="_inset"
    :mobileBreakpoint="_mobile_breakpoint"
    :centerActive="_center_active"
    :scrollToActive="_scroll_to_active"
    :showArrows="_show_arrows"
    :sliderColor="_slider_color"
    :grow="_grow"
    :sliderTransitionDuration="_slider_transition_duration"
    :hideSlider="_hide_slider"
    :sliderTransition="_slider_transition"
    :alignTabs="_align_tabs"
    :fixedTabs="_fixed_tabs"
    :insetPadding="_inset_padding"
    :insetRadius="_inset_radius"
  >
    {{ children }}
  </v-tabs>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _symbol = useModelState("symbol");
const _model_value = useModelState("model_value");
const _density = useModelState("density");
const _height = useModelState("height");
const _tag = useModelState("tag");
const _color = useModelState("color");
const _disabled = useModelState("disabled");
const _max = useModelState("max");
const _multiple = useModelState("multiple");
const _items = useModelState("items");
const _stacked = useModelState("stacked");
const _selected_class = useModelState("selected_class");
const _spaced = useModelState("spaced");
const _bg_color = useModelState("bg_color");
const _mandatory = useModelState("mandatory");
const _content_class = useModelState("content_class");
const _direction = useModelState("direction");
const _mobile = useModelState("mobile");
const _next_icon = useModelState("next_icon");
const _prev_icon = useModelState("prev_icon");
const _inset = useModelState("inset");
const _mobile_breakpoint = useModelState("mobile_breakpoint");
const _center_active = useModelState("center_active");
const _scroll_to_active = useModelState("scroll_to_active");
const _show_arrows = useModelState("show_arrows");
const _slider_color = useModelState("slider_color");
const _grow = useModelState("grow");
const _slider_transition_duration = useModelState("slider_transition_duration");
const _hide_slider = useModelState("hide_slider");
const _slider_transition = useModelState("slider_transition");
const _align_tabs = useModelState("align_tabs");
const _fixed_tabs = useModelState("fixed_tabs");
const _inset_padding = useModelState("inset_padding");
const _inset_radius = useModelState("inset_radius");
</script>