<template>
  <div>
    <v-btn color="primary" @click="alert = !alert"> Toggle </v-btn>
    <v-alert
      :value="alert"
      class="ma-1"
      color="pink"
      dark
      border="top"
      icon="mdi-home"
      transition="scale-transition"
    >
      Phasellus tempus...
    </v-alert>
  </div>
</template>
