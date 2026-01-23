import { createRender } from "@pyvuetify/vuetify";
import VCounter from "./VCounter.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VCounter);
export default { render };