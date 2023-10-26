import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#504190",
        success: "#7E6CCA",
        info: "#ffaa2c",
        error: "#1F3357",
        secondary: "#D2EBD3",
        warning: "#6FC073",
      },
    },
  },
});
