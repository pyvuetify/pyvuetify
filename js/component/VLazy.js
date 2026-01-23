import { createRender } from "@pyvuetify/vuetify";
import VLazy from "./VLazy.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VLazy);
export default { render };