<template>
  <div>
    <v-alert text color="info">
      <h5 class="mt-1">Lorem Ipsum</h5>
      <div>Maecenas nec odio et ante tincidunt tempus...</div>

      <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>

      <v-row align="center" no-gutters>
        <v-col class="grow"> Proin magna... </v-col>
        <v-spacer></v-spacer>
        <v-col class="shrink">
          <v-btn color="info" outlined> Okay </v-btn>
        </v-col>
      </v-row>
    </v-alert>
    <v-alert text outlined color="deep-orange" icon="mdi-fire">
      Nullam tincidunt adipiscing enim...
    </v-alert>
    <v-alert text dense color="teal" icon="mdi-clock-fast" border="left">
      Vestibulum ullamcorper mauris at ligula...
    </v-alert>
    <v-alert text prominent type="error" icon="mdi-cloud-alert">
      Praesent blandit laoreet nibh...
    </v-alert>
  </div>
</template>
