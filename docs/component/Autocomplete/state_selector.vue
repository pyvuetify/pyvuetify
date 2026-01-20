<template>
  <v-card>
    <v-card-title class="text-h5 font-weight-regular blue-grey white--text">
      Profile
    </v-card-title>
    <v-card-text>
      <v-subheader class="pa-0"> Where do you live? </v-subheader>
      <v-autocomplete
        v-model="model"
        :hint="`Click the icon to ${isEditing ? 'save' : 'edit'}`"
        :items="states"
        :readonly="!isEditing"
        :label="`State — ${isEditing ? 'Editable' : 'Readonly'}`"
        persistent-hint
        prepend-icon="mdi-city"
      >
        <template v-slot:append-outer>
          <v-slide-x-reverse-transition mode="out-in">
            <v-icon
              :key="`icon-${isEditing}`"
              :color="isEditing ? 'success' : 'info'"
              @click="isEditing = !isEditing"
              v-text="
                isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'
              "
            ></v-icon>
          </v-slide-x-reverse-transition>
        </template>
      </v-autocomplete>
    </v-card-text>
  </v-card>
</template>
