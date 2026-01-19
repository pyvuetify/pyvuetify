<template>
  <div>
    <v-slider
      v-model="ex1.val"
      :color="ex1.color"
      :label="ex1.label"
    ></v-slider>

    <v-slider
      v-model="ex2.val"
      :label="ex2.label"
      :track-color="ex2.color"
    ></v-slider>

    <v-slider
      v-model="ex3.val"
      :label="ex3.label"
      :thumb-color="ex3.color"
      thumb-label="always"
    ></v-slider>
  </div>
</template>
