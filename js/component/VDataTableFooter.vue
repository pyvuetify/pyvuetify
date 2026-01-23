<template>
  <v-data-table-footer
    :color="_color"
    :nextIcon="_next_icon"
    :prevIcon="_prev_icon"
    :firstIcon="_first_icon"
    :lastIcon="_last_icon"
    :itemsPerPageText="_items_per_page_text"
    :pageText="_page_text"
    :firstPageLabel="_first_page_label"
    :prevPageLabel="_prev_page_label"
    :nextPageLabel="_next_page_label"
    :lastPageLabel="_last_page_label"
    :itemsPerPageOptions="_items_per_page_options"
    :showCurrentPage="_show_current_page"
  >
    {{ children }}
  </v-data-table-footer>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _color = useModelState("color");
const _next_icon = useModelState("next_icon");
const _prev_icon = useModelState("prev_icon");
const _first_icon = useModelState("first_icon");
const _last_icon = useModelState("last_icon");
const _items_per_page_text = useModelState("items_per_page_text");
const _page_text = useModelState("page_text");
const _first_page_label = useModelState("first_page_label");
const _prev_page_label = useModelState("prev_page_label");
const _next_page_label = useModelState("next_page_label");
const _last_page_label = useModelState("last_page_label");
const _items_per_page_options = useModelState("items_per_page_options");
const _show_current_page = useModelState("show_current_page");
</script>