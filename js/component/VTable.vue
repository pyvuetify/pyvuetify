<template>
  <v-table
    :density="_density"
    :height="_height"
    :tag="_tag"
    :theme="_theme"
    :striped="_striped"
    :hover="_hover"
    :fixedHeader="_fixed_header"
    :fixedFooter="_fixed_footer"
  >
    {{ children }}
  </v-table>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _density = useModelState("density");
const _height = useModelState("height");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _striped = useModelState("striped");
const _hover = useModelState("hover");
const _fixed_header = useModelState("fixed_header");
const _fixed_footer = useModelState("fixed_footer");
</script>