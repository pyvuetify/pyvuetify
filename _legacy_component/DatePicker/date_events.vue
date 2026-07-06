<template>
  <v-row justify="space-between">
    <div>
      <div class="subheading">Defined by array</div>
      <v-date-picker
        v-model="date1"
        :events="arrayEvents"
        event-color="green lighten-1"
      ></v-date-picker>
    </div>
    <div>
      <div class="subheading">Defined by function</div>
      <v-date-picker
        v-model="date2"
        :event-color="(date) => (date[9] % 2 ? 'red' : 'yellow')"
        :events="functionEvents"
      ></v-date-picker>
    </div>
  </v-row>
</template>
