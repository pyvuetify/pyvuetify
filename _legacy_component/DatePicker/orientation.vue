<template>
  <v-row align="center">
    <v-checkbox v-model="landscape" label="Landscape"></v-checkbox>
    <v-date-picker v-model="picker" :landscape="landscape"></v-date-picker>
  </v-row>
</template>
