import { createRender } from "@pyvuetify/vuetify";
import VKbd from "./VKbd.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VKbd);
export default { render };