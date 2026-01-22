import { createRender } from "@pyvuetify/vuetify";
import VAppBar from "./VAppBar.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VAppBar);
export default { render };