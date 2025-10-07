import {createI18n }from 'vue-i18n'
import { defineNuxtPlugin } from '#app'
import en from '../locales/en.json'
import ar from '../locales/ar.json'
import Cookies from 'js-cookie'
export default defineNuxtPlugin((nuxtApp) => {
    const i18n = createI18n({
        legacy: false,
        locale: Cookies.get("lang") || 'en',
        fallbackLocale:Cookies.get("lang")|| 'en',
        messages: {
            en,
            ar
        }
    })
      nuxtApp.vueApp.use(i18n)
})