import { createRender } from "@pyvuetify/vuetify";
import VForm from "./VForm.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VForm);
export default { render };