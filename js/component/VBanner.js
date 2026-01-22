import { createRender } from "@pyvuetify/vuetify";
import VBanner from "./VBanner.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VBanner);
export default { render };