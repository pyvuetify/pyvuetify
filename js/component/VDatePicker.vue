<template>
  <v-date-picker
    :title="_title"
    :text="_text"
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
    :min="_min"
    :multiple="_multiple"
    :header="_header"
    :bgColor="_bg_color"
    :transition="_transition"
    :divided="_divided"
    :landscape="_landscape"
    :hideHeader="_hide_header"
    :hideTitle="_hide_title"
    :year="_year"
    :month="_month"
    :headerColor="_header_color"
    :headerDateFormat="_header_date_format"
    :landscapeHeaderWidth="_landscape_header_width"
    :controlHeight="_control_height"
    :controlVariant="_control_variant"
    :noMonthPicker="_no_month_picker"
    :nextIcon="_next_icon"
    :prevIcon="_prev_icon"
    :modeIcon="_mode_icon"
    :viewMode="_view_mode"
    :hideWeekdays="_hide_weekdays"
    :showWeek="_show_week"
    :reverseTransition="_reverse_transition"
    :events="_events"
    :eventColor="_event_color"
    :showAdjacentMonths="_show_adjacent_months"
    :weekdays="_weekdays"
    :weeksInMonth="_weeks_in_month"
    :firstDayOfWeek="_first_day_of_week"
    :firstDayOfYear="_first_day_of_year"
    :allowedDates="_allowed_dates"
    :weekdayFormat="_weekday_format"
    :allowedMonths="_allowed_months"
    :allowedYears="_allowed_years"
  >
    {{ children }}
  </v-date-picker>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _title = useModelState("title");
const _text = useModelState("text");
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
const _min = useModelState("min");
const _multiple = useModelState("multiple");
const _header = useModelState("header");
const _bg_color = useModelState("bg_color");
const _transition = useModelState("transition");
const _divided = useModelState("divided");
const _landscape = useModelState("landscape");
const _hide_header = useModelState("hide_header");
const _hide_title = useModelState("hide_title");
const _year = useModelState("year");
const _month = useModelState("month");
const _header_color = useModelState("header_color");
const _header_date_format = useModelState("header_date_format");
const _landscape_header_width = useModelState("landscape_header_width");
const _control_height = useModelState("control_height");
const _control_variant = useModelState("control_variant");
const _no_month_picker = useModelState("no_month_picker");
const _next_icon = useModelState("next_icon");
const _prev_icon = useModelState("prev_icon");
const _mode_icon = useModelState("mode_icon");
const _view_mode = useModelState("view_mode");
const _hide_weekdays = useModelState("hide_weekdays");
const _show_week = useModelState("show_week");
const _reverse_transition = useModelState("reverse_transition");
const _events = useModelState("events");
const _event_color = useModelState("event_color");
const _show_adjacent_months = useModelState("show_adjacent_months");
const _weekdays = useModelState("weekdays");
const _weeks_in_month = useModelState("weeks_in_month");
const _first_day_of_week = useModelState("first_day_of_week");
const _first_day_of_year = useModelState("first_day_of_year");
const _allowed_dates = useModelState("allowed_dates");
const _weekday_format = useModelState("weekday_format");
const _allowed_months = useModelState("allowed_months");
const _allowed_years = useModelState("allowed_years");
</script>