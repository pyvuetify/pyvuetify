import { createRender } from "@pyvuetify/vuetify";
import VCardText from "./VCardText.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VCardText);
export default { render };