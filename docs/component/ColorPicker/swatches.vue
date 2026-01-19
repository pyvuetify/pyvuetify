<template>
  <v-row justify="space-around">
    <v-color-picker class="ma-2" show-swatches></v-color-picker>
    <v-color-picker
      class="ma-2"
      :swatches="swatches"
      show-swatches
    ></v-color-picker>
    <v-color-picker
      class="ma-2"
      show-swatches
      swatches-max-height="300px"
    ></v-color-picker>
  </v-row>
</template>
