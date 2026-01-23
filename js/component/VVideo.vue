<template>
  <v-video
    :type="_type"
    :playing="_playing"
    :progress="_progress"
    :height="_height"
    :src="_src"
    :width="_width"
    :image="_image"
    :color="_color"
    :density="_density"
    :floating="_floating"
    :elevation="_elevation"
    :rounded="_rounded"
    :theme="_theme"
    :variant="_variant"
    :maxHeight="_max_height"
    :maxWidth="_max_width"
    :minHeight="_min_height"
    :minWidth="_min_width"
    :eager="_eager"
    :aspectRatio="_aspect_ratio"
    :autoplay="_autoplay"
    :muted="_muted"
    :hideOverlay="_hide_overlay"
    :noFullscreen="_no_fullscreen"
    :startAt="_start_at"
    :controlsTransition="_controls_transition"
    :controlsVariant="_controls_variant"
    :controlsProps="_controls_props"
    :backgroundColor="_background_color"
    :trackColor="_track_color"
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
  </v-video>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _type = useModelState("type");
const _playing = useModelState("playing");
const _progress = useModelState("progress");
const _height = useModelState("height");
const _src = useModelState("src");
const _width = useModelState("width");
const _image = useModelState("image");
const _color = useModelState("color");
const _density = useModelState("density");
const _floating = useModelState("floating");
const _elevation = useModelState("elevation");
const _rounded = useModelState("rounded");
const _theme = useModelState("theme");
const _variant = useModelState("variant");
const _max_height = useModelState("max_height");
const _max_width = useModelState("max_width");
const _min_height = useModelState("min_height");
const _min_width = useModelState("min_width");
const _eager = useModelState("eager");
const _aspect_ratio = useModelState("aspect_ratio");
const _autoplay = useModelState("autoplay");
const _muted = useModelState("muted");
const _hide_overlay = useModelState("hide_overlay");
const _no_fullscreen = useModelState("no_fullscreen");
const _start_at = useModelState("start_at");
const _controls_transition = useModelState("controls_transition");
const _controls_variant = useModelState("controls_variant");
const _controls_props = useModelState("controls_props");
const _background_color = useModelState("background_color");
const _track_color = useModelState("track_color");
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