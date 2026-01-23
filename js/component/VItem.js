import { createRender } from "@pyvuetify/vuetify";
import VItem from "./VItem.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VItem);
export default { render };