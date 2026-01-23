import { createRender } from "@pyvuetify/vuetify";
import VDataTableRows from "./VDataTableRows.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VDataTableRows);
export default { render };