import { createRender } from "@pyvuetify/vuetify";
import VStepperItem from "./VStepperItem.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VStepperItem);
export default { render };