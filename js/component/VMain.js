import { createRender } from "@pyvuetify/vuetify";
import VMain from "./VMain.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VMain);
export default { render };