<template>
  <v-app-bar
    :flat="flat"
    :tag="tag"
    :name="name"
    :title="title"
    :height="height"
    :image="image"
    :collapse="collapse"
    :modelValue="modelValue"
    :location="location"
    :absolute="absolute"
    :collapsePosition="collapsePosition"
    :color="color"
    :density="density"
    :extended="extended"
    :extensionHeight="extensionHeight"
    :floating="floating"
    :border="border"
    :elevation="elevation"
    :rounded="rounded"
    :tile="tile"
    :theme="theme"
    :order="order"
    :scrollTarget="scrollTarget"
    :scrollThreshold="scrollThreshold"
    :scrollBehavior="scrollBehavior"
  >
    {{ children }}
  </v-app-bar>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const flat = useModelState("flat");
const tag = useModelState("tag");
const name = useModelState("name");
const title = useModelState("title");
const height = useModelState("height");
const image = useModelState("image");
const collapse = useModelState("collapse");
const modelValue = useModelState("model_value");
const location = useModelState("location");
const absolute = useModelState("absolute");
const collapsePosition = useModelState("collapse_position");
const color = useModelState("color");
const density = useModelState("density");
const extended = useModelState("extended");
const extensionHeight = useModelState("extension_height");
const floating = useModelState("floating");
const border = useModelState("border");
const elevation = useModelState("elevation");
const rounded = useModelState("rounded");
const tile = useModelState("tile");
const theme = useModelState("theme");
const order = useModelState("order");
const scrollTarget = useModelState("scroll_target");
const scrollThreshold = useModelState("scroll_threshold");
const scrollBehavior = useModelState("scroll_behavior");
</script>