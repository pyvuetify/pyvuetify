import { createRender } from "@pyvuetify/vuetify";
import VField from "./VField.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VField);
export default { render };