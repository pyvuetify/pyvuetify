import { createRender } from "@pyvuetify/vuetify";
import VSystemBar from "./VSystemBar.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VSystemBar);
export default { render };