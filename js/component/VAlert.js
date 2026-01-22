import { createRender } from "@pyvuetify/vuetify";
import VAlert from "./VAlert.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VAlert);
export default { render };