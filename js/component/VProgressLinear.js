import { createRender } from "@pyvuetify/vuetify";
import VProgressLinear from "./VProgressLinear.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VProgressLinear);
export default { render };