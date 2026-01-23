import { createRender } from "@pyvuetify/vuetify";
import VResponsive from "./VResponsive.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VResponsive);
export default { render };