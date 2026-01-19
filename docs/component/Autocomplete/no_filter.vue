<template>
  <v-card class="overflow-hidden" color="purple lighten-1" dark>
    <v-toolbar flat color="purple">
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">
        User Profile
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-text-field color="white" label="Name"></v-text-field>
      <v-autocomplete
        :items="states"
        no-filter
        color="white"
        item-text="name"
        label="State"
      ></v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="save"> Save </v-btn>
    </v-card-actions>
  </v-card>
</template>
