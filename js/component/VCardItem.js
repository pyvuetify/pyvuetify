import { createRender } from "@pyvuetify/vuetify";
import VCardItem from "./VCardItem.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VCardItem);
export default { render };