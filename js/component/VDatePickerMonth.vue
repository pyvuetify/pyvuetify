<template>
  <v-date-picker-month
    :modelValue="_model_value"
    :color="_color"
    :disabled="_disabled"
    :max="_max"
    :min="_min"
    :multiple="_multiple"
    :transition="_transition"
    :year="_year"
    :month="_month"
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
  >
    {{ children }}
  </v-date-picker-month>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _model_value = useModelState("model_value");
const _color = useModelState("color");
const _disabled = useModelState("disabled");
const _max = useModelState("max");
const _min = useModelState("min");
const _multiple = useModelState("multiple");
const _transition = useModelState("transition");
const _year = useModelState("year");
const _month = useModelState("month");
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
</script>