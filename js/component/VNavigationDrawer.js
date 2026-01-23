import { createRender } from "@pyvuetify/vuetify";
import VNavigationDrawer from "./VNavigationDrawer.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VNavigationDrawer);
export default { render };