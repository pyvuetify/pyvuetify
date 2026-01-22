import { createRender } from "@pyvuetify/vuetify";
import VAppBarTitle from "./VAppBarTitle.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VAppBarTitle);
export default { render };