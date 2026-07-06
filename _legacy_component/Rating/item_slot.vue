<template>
  <div class="text-center">
    <v-rating v-model="rating">
      <template v-slot:item="props">
        <v-icon
          :color="props.isFilled ? genColor(props.index) : 'grey lighten-1'"
          large
          @click="props.click"
        >
          {{ props.isFilled ? "mdi-star-circle" : "mdi-star-circle-outline" }}
        </v-icon>
      </template>
    </v-rating>
  </div>
</template>
