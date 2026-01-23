import { createRender } from "@pyvuetify/vuetify";
import VMessages from "./VMessages.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VMessages);
export default { render };