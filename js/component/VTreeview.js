import { createRender } from "@pyvuetify/vuetify";
import VTreeview from "./VTreeview.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VTreeview);
export default { render };