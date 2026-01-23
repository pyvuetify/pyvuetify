import { createRender } from "@pyvuetify/vuetify";
import VTable from "./VTable.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VTable);
export default { render };