<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            color="indigo"
            v-model="message1"
            label="Regular"
            clearable
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            color="pink"
            v-model="message2"
            solo
            label="Solo"
            clearable
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            color="success"
            v-model="message3"
            filled
            label="Filled"
            clearable
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            color="error"
            v-model="message4"
            label="Outlined"
            outlined
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
