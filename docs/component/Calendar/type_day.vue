<template>
  <v-calendar type="day" :value="value" :events="events"></v-calendar>
</template>

<script>
export default {
  data: () => ({
    value: "2025-11-28",
    events: [
      {
        name: "Morning Meeting",
        start: "2025-11-28 09:00",
        end: "2025-11-28 10:00",
      },
      {
        name: "Lunch Break",
        start: "2025-11-28 12:00",
        end: "2025-11-28 13:00",
      },
      {
        name: "Afternoon Session",
        start: "2025-11-28 14:00",
        end: "2025-11-28 16:00",
      },
    ],
  }),
};
</script>
