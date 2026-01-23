import { createRender } from "@pyvuetify/vuetify";
import VLocaleProvider from "./VLocaleProvider.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VLocaleProvider);
export default { render };