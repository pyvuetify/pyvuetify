<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1">
    <template v-slot:header.name="{ header }">
      {{ header.text.toUpperCase() }}
    </template>
  </v-data-table>
</template>
