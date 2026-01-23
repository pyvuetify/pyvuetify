<template>
  <v-hotkey
    :keys="_keys"
    :border="_border"
    :elevation="_elevation"
    :rounded="_rounded"
    :tile="_tile"
    :theme="_theme"
    :color="_color"
    :variant="_variant"
    :disabled="_disabled"
    :prefix="_prefix"
    :suffix="_suffix"
    :displayMode="_display_mode"
    :keyMap="_key_map"
    :platform="_platform"
    :inline="_inline"
  >
    {{ children }}
  </v-hotkey>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _keys = useModelState("keys");
const _border = useModelState("border");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _variant = useModelState("variant");
const _disabled = useModelState("disabled");
const _prefix = useModelState("prefix");
const _suffix = useModelState("suffix");
const _display_mode = useModelState("display_mode");
const _key_map = useModelState("key_map");
const _platform = useModelState("platform");
const _inline = useModelState("inline");
</script>