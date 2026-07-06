<template>
  <div>
    <v-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
      color="purple"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
      color="red lighten-2"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
      color="black"
    ></v-progress-linear>
  </div>
</template>
