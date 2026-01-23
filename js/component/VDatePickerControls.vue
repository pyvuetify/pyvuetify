<template>
  <v-date-picker-controls
    :text="_text"
    :disabled="_disabled"
    :active="_active"
    :controlHeight="_control_height"
    :controlVariant="_control_variant"
    :noMonthPicker="_no_month_picker"
    :nextIcon="_next_icon"
    :prevIcon="_prev_icon"
    :modeIcon="_mode_icon"
    :monthText="_month_text"
    :yearText="_year_text"
    :viewMode="_view_mode"
  >
    {{ children }}
  </v-date-picker-controls>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _text = useModelState("text");
const _disabled = useModelState("disabled");
const _active = useModelState("active");
const _control_height = useModelState("control_height");
const _control_variant = useModelState("control_variant");
const _no_month_picker = useModelState("no_month_picker");
const _next_icon = useModelState("next_icon");
const _prev_icon = useModelState("prev_icon");
const _mode_icon = useModelState("mode_icon");
const _month_text = useModelState("month_text");
const _year_text = useModelState("year_text");
const _view_mode = useModelState("view_mode");
</script>