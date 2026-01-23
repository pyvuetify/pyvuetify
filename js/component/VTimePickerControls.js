import { createRender } from "@pyvuetify/vuetify";
import VTimePickerControls from "./VTimePickerControls.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VTimePickerControls);
export default { render };