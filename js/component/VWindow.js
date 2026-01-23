import { createRender } from "@pyvuetify/vuetify";
import VWindow from "./VWindow.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VWindow);
export default { render };