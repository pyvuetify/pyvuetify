import { createRender } from "@pyvuetify/vuetify";
import VWindowItem from "./VWindowItem.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VWindowItem);
export default { render };