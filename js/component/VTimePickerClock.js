import { createRender } from "@pyvuetify/vuetify";
import VTimePickerClock from "./VTimePickerClock.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VTimePickerClock);
export default { render };