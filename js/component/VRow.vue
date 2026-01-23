<template>
  <v-row
    :tag="_tag"
    :align="_align"
    :dense="_dense"
    :noGutters="_no_gutters"
    :alignSm="_align_sm"
    :alignMd="_align_md"
    :alignLg="_align_lg"
    :alignXl="_align_xl"
    :alignXxl="_align_xxl"
    :justifySm="_justify_sm"
    :justifyMd="_justify_md"
    :justifyLg="_justify_lg"
    :justifyXl="_justify_xl"
    :justifyXxl="_justify_xxl"
    :alignContentSm="_align_content_sm"
    :alignContentMd="_align_content_md"
    :alignContentLg="_align_content_lg"
    :alignContentXl="_align_content_xl"
    :alignContentXxl="_align_content_xxl"
    :justify="_justify"
    :alignContent="_align_content"
  >
    {{ children }}
  </v-row>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _tag = useModelState("tag");
const _align = useModelState("align");
const _dense = useModelState("dense");
const _no_gutters = useModelState("no_gutters");
const _align_sm = useModelState("align_sm");
const _align_md = useModelState("align_md");
const _align_lg = useModelState("align_lg");
const _align_xl = useModelState("align_xl");
const _align_xxl = useModelState("align_xxl");
const _justify_sm = useModelState("justify_sm");
const _justify_md = useModelState("justify_md");
const _justify_lg = useModelState("justify_lg");
const _justify_xl = useModelState("justify_xl");
const _justify_xxl = useModelState("justify_xxl");
const _align_content_sm = useModelState("align_content_sm");
const _align_content_md = useModelState("align_content_md");
const _align_content_lg = useModelState("align_content_lg");
const _align_content_xl = useModelState("align_content_xl");
const _align_content_xxl = useModelState("align_content_xxl");
const _justify = useModelState("justify");
const _align_content = useModelState("align_content");
</script>