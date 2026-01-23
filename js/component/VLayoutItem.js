import { createRender } from "@pyvuetify/vuetify";
import VLayoutItem from "./VLayoutItem.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VLayoutItem);
export default { render };