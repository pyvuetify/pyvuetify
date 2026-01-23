import { createRender } from "@pyvuetify/vuetify";
import VList from "./VList.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VList);
export default { render };