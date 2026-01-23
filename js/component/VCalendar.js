import { createRender } from "@pyvuetify/vuetify";
import VCalendar from "./VCalendar.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VCalendar);
export default { render };