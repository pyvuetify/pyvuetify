import { createRender } from "@pyvuetify/vuetify";
import VToolbarItems from "./VToolbarItems.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VToolbarItems);
export default { render };