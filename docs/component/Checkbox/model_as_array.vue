<template>
  <div>
    <v-checkbox v-model="selected" label="John" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Jacob" value="Jacob"></v-checkbox>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: ["John"],
  }),
};
</script>
