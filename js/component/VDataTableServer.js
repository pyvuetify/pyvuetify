import { createRender } from "@pyvuetify/vuetify";
import VDataTableServer from "./VDataTableServer.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VDataTableServer);
export default { render };