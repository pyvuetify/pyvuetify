<template>
  <v-container fluid>
    <v-checkbox v-model="custom" label="Custom progress bar"></v-checkbox>
    <v-text-field
      v-model="value"
      color="cyan darken"
      label="Text field"
      placeholder="Start typing..."
      loading
    >
      <template v-slot:progress>
        <v-progress-linear
          v-if="custom"
          :value="progress"
          :color="color"
          absolute
          height="7"
        ></v-progress-linear>
      </template>
    </v-text-field>
  </v-container>
</template>
