<template>
  <v-btn-toggle v-model="toggle_multiple" multiple>
    <v-btn><v-icon>mdi-format-align-left</v-icon></v-btn>
    <v-btn><v-icon>mdi-format-align-center</v-icon></v-btn>
    <v-btn><v-icon>mdi-format-align-right</v-icon></v-btn>
    <v-btn><v-icon>mdi-format-align-justify</v-icon></v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  data: () => ({
    toggle_multiple: [0, 1, 2],
  }),
};
</script>
