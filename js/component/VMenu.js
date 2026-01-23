import { createRender } from "@pyvuetify/vuetify";
import VMenu from "./VMenu.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VMenu);
export default { render };