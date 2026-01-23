import { createRender } from "@pyvuetify/vuetify";
import VOverlay from "./VOverlay.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VOverlay);
export default { render };