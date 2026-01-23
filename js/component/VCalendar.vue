<template>
  <v-calendar
    :type="_type"
    :modelValue="_model_value"
    :start="_start"
    :end="_end"
    :categoryDays="_category_days"
    :categories="_categories"
    :categoryText="_category_text"
    :maxDays="_max_days"
    :categoryHideDynamic="_category_hide_dynamic"
    :categoryShowAll="_category_show_all"
    :categoryForInvalid="_category_for_invalid"
    :weekdays="_weekdays"
    :firstDayOfWeek="_first_day_of_week"
    :firstDayOfYear="_first_day_of_year"
    :weekdayFormat="_weekday_format"
    :dayFormat="_day_format"
    :locale="_locale"
    :now="_now"
    :events="_events"
    :eventStart="_event_start"
    :eventEnd="_event_end"
    :eventTimed="_event_timed"
    :eventCategory="_event_category"
    :eventHeight="_event_height"
    :eventColor="_event_color"
    :eventTextColor="_event_text_color"
    :eventName="_event_name"
    :eventOverlapThreshold="_event_overlap_threshold"
    :eventOverlapMode="_event_overlap_mode"
    :eventMore="_event_more"
    :eventMoreText="_event_more_text"
    :eventRipple="_event_ripple"
    :eventMarginBottom="_event_margin_bottom"
  >
    {{ children }}
  </v-calendar>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _type = useModelState("type");
const _model_value = useModelState("model_value");
const _start = useModelState("start");
const _end = useModelState("end");
const _category_days = useModelState("category_days");
const _categories = useModelState("categories");
const _category_text = useModelState("category_text");
const _max_days = useModelState("max_days");
const _category_hide_dynamic = useModelState("category_hide_dynamic");
const _category_show_all = useModelState("category_show_all");
const _category_for_invalid = useModelState("category_for_invalid");
const _weekdays = useModelState("weekdays");
const _first_day_of_week = useModelState("first_day_of_week");
const _first_day_of_year = useModelState("first_day_of_year");
const _weekday_format = useModelState("weekday_format");
const _day_format = useModelState("day_format");
const _locale = useModelState("locale");
const _now = useModelState("now");
const _events = useModelState("events");
const _event_start = useModelState("event_start");
const _event_end = useModelState("event_end");
const _event_timed = useModelState("event_timed");
const _event_category = useModelState("event_category");
const _event_height = useModelState("event_height");
const _event_color = useModelState("event_color");
const _event_text_color = useModelState("event_text_color");
const _event_name = useModelState("event_name");
const _event_overlap_threshold = useModelState("event_overlap_threshold");
const _event_overlap_mode = useModelState("event_overlap_mode");
const _event_more = useModelState("event_more");
const _event_more_text = useModelState("event_more_text");
const _event_ripple = useModelState("event_ripple");
const _event_margin_bottom = useModelState("event_margin_bottom");
</script>