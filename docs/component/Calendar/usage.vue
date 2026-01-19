<template>
  <v-calendar type="month" :value="value" :events="events"></v-calendar>
</template>

<script>
export default {
  data: () => ({
    value: "2025-11-01",
    events: [
      {
        name: "Meeting",
        start: "2025-11-01 09:00",
        end: "2025-11-01 10:00",
      },
      {
        name: "Conference",
        start: "2025-11-05 14:00",
        end: "2025-11-05 17:00",
      },
      {
        name: "Birthday Party",
        start: "2025-11-10",
        color: "green",
      },
      {
        name: "PTO",
        start: "2025-11-15",
        end: "2025-11-17",
        color: "blue",
      },
    ],
  }),
};
</script>
