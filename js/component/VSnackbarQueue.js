import { createRender } from "@pyvuetify/vuetify";
import VSnackbarQueue from "./VSnackbarQueue.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VSnackbarQueue);
export default { render };