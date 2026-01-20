<template>
  <div>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:item.glutenfree="{ item }">
        <v-simple-checkbox
          v-model="item.glutenfree"
          disabled
        ></v-simple-checkbox>
      </template>
    </v-data-table>
  </div>
</template>
