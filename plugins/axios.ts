/* eslint-disable dot-notation */
import { Plugin } from "@nuxt/types";

const axiosPlugin: Plugin = ({ app, store, redirect }) => {
  app.$axios.onRequest((config) => {
    const token = app.$cookies.get("token");

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
  });

  app.$axios.onError((error) => {
    if (error.response?.status === 401) {
      app.$cookies.remove("token");

      store.dispatch("users/auth/update", { token: null });

      return redirect("/login");
    }
  });
};

export default axiosPlugin;
