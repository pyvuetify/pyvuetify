<template>
  <component :is="_tag" :style="_style" :class="_class">
    <template v-if="Array.isArray(_children)">
      <WidgetSlot v-for="(child, i) in _children" :key="i" :reference="child" />
    </template>
    <WidgetSlot v-else-if="_children != null" :reference="_children" />
  </component>
</template>

<script setup>
import { useModelState, WidgetSlot } from "@pyvuetify/vuetify";

const _children = useModelState("children");
const _style = useModelState("style");
const _class = useModelState("klass");
const _tag = useModelState("tag");
</script>
