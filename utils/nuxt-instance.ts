/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { NuxtCookies } from "cookie-universal-nuxt";

let $axios: NuxtAxiosInstance;
let $cookies: NuxtCookies;

export function initializeAxios(axiosInstante: NuxtAxiosInstance) {
  $axios = axiosInstante;
}

export function initializeCookies(cookiesInstante: NuxtCookies) {
  $cookies = cookiesInstante;
}

export { $axios, $cookies };
