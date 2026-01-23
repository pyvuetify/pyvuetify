<template>
  <v-col
    :tag="_tag"
    :order="_order"
    :sm="_sm"
    :md="_md"
    :lg="_lg"
    :xl="_xl"
    :xxl="_xxl"
    :offset="_offset"
    :cols="_cols"
    :offsetSm="_offset_sm"
    :offsetMd="_offset_md"
    :offsetLg="_offset_lg"
    :offsetXl="_offset_xl"
    :offsetXxl="_offset_xxl"
    :orderSm="_order_sm"
    :orderMd="_order_md"
    :orderLg="_order_lg"
    :orderXl="_order_xl"
    :orderXxl="_order_xxl"
    :alignSelf="_align_self"
  >
    {{ children }}
  </v-col>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _order = useModelState("order");
const _sm = useModelState("sm");
const _md = useModelState("md");
const _lg = useModelState("lg");
const _xl = useModelState("xl");
const _xxl = useModelState("xxl");
const _offset = useModelState("offset");
const _cols = useModelState("cols");
const _offset_sm = useModelState("offset_sm");
const _offset_md = useModelState("offset_md");
const _offset_lg = useModelState("offset_lg");
const _offset_xl = useModelState("offset_xl");
const _offset_xxl = useModelState("offset_xxl");
const _order_sm = useModelState("order_sm");
const _order_md = useModelState("order_md");
const _order_lg = useModelState("order_lg");
const _order_xl = useModelState("order_xl");
const _order_xxl = useModelState("order_xxl");
const _align_self = useModelState("align_self");
</script>