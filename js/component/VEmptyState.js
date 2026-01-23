import { createRender } from "@pyvuetify/vuetify";
import VEmptyState from "./VEmptyState.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VEmptyState);
export default { render };