<template>
  <v-row justify="space-around">
    <v-color-picker
      class="ma-2"
      mode="hexa"
      v-model="colorHex"
    ></v-color-picker>
    <v-color-picker class="ma-2" v-model="colorRgba"></v-color-picker>
  </v-row>
</template>
