import { createRender } from "@pyvuetify/vuetify";
import VDatePickerControls from "./VDatePickerControls.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VDatePickerControls);
export default { render };