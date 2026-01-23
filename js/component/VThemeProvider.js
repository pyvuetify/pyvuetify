import { createRender } from "@pyvuetify/vuetify";
import VThemeProvider from "./VThemeProvider.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VThemeProvider);
export default { render };