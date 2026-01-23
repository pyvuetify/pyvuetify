import { createRender } from "@pyvuetify/vuetify";
import VNoSsr from "./VNoSsr.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VNoSsr);
export default { render };