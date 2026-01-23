import { createRender } from "@pyvuetify/vuetify";
import VDataTableVirtual from "./VDataTableVirtual.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VDataTableVirtual);
export default { render };