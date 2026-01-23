import { createRender } from "@pyvuetify/vuetify";
import VExpansionPanels from "./VExpansionPanels.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VExpansionPanels);
export default { render };