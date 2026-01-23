import { createRender } from "@pyvuetify/vuetify";
import VParallax from "./VParallax.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VParallax);
export default { render };