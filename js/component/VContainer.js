import { createRender } from "@pyvuetify/vuetify";
import VContainer from "./VContainer.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VContainer);
export default { render };