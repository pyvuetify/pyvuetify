<template>
  <v-carousel
    :continuous="false"
    :cycle="true"
    :show-arrows="false"
    height="300"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
