<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="6">
        <v-subheader> Prepended icon </v-subheader>
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="e1"
          :items="states"
          menu-props="auto"
          label="Select"
          hide-details
          prepend-icon="mdi-map"
          single-line
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-subheader> Appended icon </v-subheader>
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="e2"
          :items="states"
          append-outer-icon="mdi-map"
          menu-props="auto"
          hide-details
          label="Select"
          single-line
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>
