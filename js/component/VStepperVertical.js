import { createRender } from "@pyvuetify/vuetify";
import VStepperVertical from "./VStepperVertical.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VStepperVertical);
export default { render };