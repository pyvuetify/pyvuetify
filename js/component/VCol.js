import { createRender } from "@pyvuetify/vuetify";
import VCol from "./VCol.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VCol);
export default { render };