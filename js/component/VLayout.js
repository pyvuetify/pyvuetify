import { createRender } from "@pyvuetify/vuetify";
import VLayout from "./VLayout.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VLayout);
export default { render };