<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1">
    <template v-slot:item.calories="{ item }">
      <v-chip :color="getColor(item.calories)" dark>
        {{ item.calories }}
      </v-chip>
    </template>
  </v-data-table>
</template>
