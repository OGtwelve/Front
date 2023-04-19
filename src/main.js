import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createI18n} from 'vue-i18n';

const i18n = createI18n({
    locale: 'zh-CN', // 默认语言
    messages: {
        'zh-CN': require('./locales/zh-CN.json'), // 中文语言包
        'en-US': require('./locales/en-US.json'), // 英文语言包
    },
    numberFormats: {
        'en-US': {
            currency: {
                style: 'currency', currency: 'USD', notation: 'standard'
            }
        },
        'zh-CN': {
            currency: {
                style: 'currency', currency: 'CHN', useGrouping: true, currencyDisplay: 'symbol'
            }
        }
    },
});
const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(ElementPlus)
app.config.globalProperties.$toggleLanguage = function () {
    const i18n = this.$i18n;
    const currentLocale = i18n.locale;
    const locales = i18n.availableLocales;

    const index = locales.indexOf(currentLocale);
    i18n.locale = locales[(index + 1) % locales.length];
};
app.mount('#app')

