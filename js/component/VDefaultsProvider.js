import { createRender } from "@pyvuetify/vuetify";
import VDefaultsProvider from "./VDefaultsProvider.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VDefaultsProvider);
export default { render };