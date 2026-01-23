import { createRender } from "@pyvuetify/vuetify";
import VListItem from "./VListItem.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VListItem);
export default { render };