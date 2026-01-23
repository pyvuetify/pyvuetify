<template>
  <v-video-controls
    :density="_density"
    :elevation="_elevation"
    :theme="_theme"
    :color="_color"
    :variant="_variant"
    :playing="_playing"
    :progress="_progress"
    :fullscreen="_fullscreen"
    :floating="_floating"
    :trackColor="_track_color"
    :backgroundColor="_background_color"
    :hidePlay="_hide_play"
    :hideVolume="_hide_volume"
    :hideFullscreen="_hide_fullscreen"
    :splitTime="_split_time"
    :pills="_pills"
    :detached="_detached"
    :duration="_duration"
    :volume="_volume"
    :volumeProps="_volume_props"
  >
    {{ children }}
  </v-video-controls>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _density = useModelState("density");
const _elevation = useModelState("elevation");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _variant = useModelState("variant");
const _playing = useModelState("playing");
const _progress = useModelState("progress");
const _fullscreen = useModelState("fullscreen");
const _floating = useModelState("floating");
const _track_color = useModelState("track_color");
const _background_color = useModelState("background_color");
const _hide_play = useModelState("hide_play");
const _hide_volume = useModelState("hide_volume");
const _hide_fullscreen = useModelState("hide_fullscreen");
const _split_time = useModelState("split_time");
const _pills = useModelState("pills");
const _detached = useModelState("detached");
const _duration = useModelState("duration");
const _volume = useModelState("volume");
const _volume_props = useModelState("volume_props");
</script>