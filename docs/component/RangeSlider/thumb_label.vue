<template>
  <v-row>
    <v-col class="pa-12">
      <v-range-slider
        :tick-labels="seasons"
        :value="[0, 1]"
        min="0"
        max="3"
        ticks="always"
        tick-size="4"
      >
        <template v-slot:thumb-label="props">
          <v-icon dark>
            {{ season(props.value) }}
          </v-icon>
        </template>
      </v-range-slider>
    </v-col>
  </v-row>
</template>
