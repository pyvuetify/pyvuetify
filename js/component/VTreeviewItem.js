import { createRender } from "@pyvuetify/vuetify";
import VTreeviewItem from "./VTreeviewItem.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VTreeviewItem);
export default { render };