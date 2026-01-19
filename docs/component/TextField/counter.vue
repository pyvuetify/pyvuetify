<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="title"
            :rules="rules"
            counter="25"
            hint="This field uses counter prop"
            label="Regular"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="description"
            :rules="rules"
            counter
            maxlength="25"
            hint="This field uses maxlength attribute"
            label="Limit exceeded"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="title"
            :rules="wordsRules"
            counter="5"
            hint="This field counts words instead of characters"
            label="Custom counter from prop"
            :counter-value="(v) => v.trim().split(' ').length"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="title"
            :rules="wordsRules"
            counter="5"
            hint="This field counts words instead of characters"
            label="Custom counter from slot"
          >
            <template v-slot:counter="{ props }">
              <v-counter
                v-bind="props"
                :value="title.trim().split(' ').length"
              ></v-counter>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
