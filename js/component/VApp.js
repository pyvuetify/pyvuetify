import { createRender } from "@pyvuetify/vuetify";
import VApp from "./VApp.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VApp);
export default { render };