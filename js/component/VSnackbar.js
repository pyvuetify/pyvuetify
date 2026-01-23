import { createRender } from "@pyvuetify/vuetify";
import VSnackbar from "./VSnackbar.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VSnackbar);
export default { render };