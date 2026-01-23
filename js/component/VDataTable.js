import { createRender } from "@pyvuetify/vuetify";
import VDataTable from "./VDataTable.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VDataTable);
export default { render };