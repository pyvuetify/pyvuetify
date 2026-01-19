<template>
  <v-calendar type="week" :value="value" :events="events"></v-calendar>
</template>

<script>
export default {
  data: () => ({
    value: "2025-11-07",
    events: [
      {
        name: "Weekly Meeting",
        start: "2025-11-07 09:00",
        end: "2025-11-07 10:00",
      },
      {
        name: "Lunch",
        start: "2025-11-08 12:30",
        end: "2025-11-08 13:30",
      },
      {
        name: "Thomas Birthday",
        start: "2025-11-10",
        color: "green",
      },
    ],
  }),
};
</script>
