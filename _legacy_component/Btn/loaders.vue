<template>
  <div class="text-center">
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
      Accept Terms
    </v-btn>

    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Upload
      <v-icon right dark> mdi-cloud-upload </v-icon>
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      Custom Loader
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="loading4"
      :disabled="loading4"
      color="info"
      @click="loader = 'loading4'"
    >
      Icon Loader
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>mdi-cached</v-icon>
        </span>
      </template>
    </v-btn>

    <v-btn
      :loading="loading5"
      :disabled="loading5"
      color="blue-grey"
      class="ma-2 white--text"
      fab
      @click="loader = 'loading5'"
    >
      <v-icon dark> mdi-cloud-upload </v-icon>
    </v-btn>
  </div>
</template>
