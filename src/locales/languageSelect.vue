<template>
    <div class="language-select-bar">
        <span class="language-select-word">{{ $t('language') }}</span>
        <div class="language-select">
            <el-select v-model="currentLang" @change="handleChangeLang">
                <el-option v-for="(item, index) in langs" :key="index" :label="item.label"
                           :value="item.value" ></el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
export default {
    name: "languageSelect",
    data() {
        return {
            currentLang: 'zh-CN', // 当前语言
            langs: [ // 可用的语言
                {
                    label: '中文',
                    value: 'zh-CN',
                },
                {
                    label: 'English',
                    value: 'en-US',
                },
            ],
        };
    },
    methods: {
        handleChangeLang() {
            const i18n = this.$i18n;
            const currentLocale = i18n.locale;
            const locales = i18n.availableLocales;
            const nextLocale = this.currentLang;

            if (nextLocale !== currentLocale && locales.includes(nextLocale)) {
                i18n.locale = nextLocale;
            }
            document.title = this.$t('siteTitle');
        },
    },
    mounted() {
        this.handleChangeLang()
    }
}
</script>

<style scoped>
.language-select-bar {
    display: flex; /* 使用 flexbox 布局 */
    justify-content: center; /* 横向居中 */
    align-items: center; /* 纵向居中 */
}

.language-select-bar .language-select-word {
    width: 75px;
    margin-right: 10px; /* 可以设置间距 */
    text-align: center; /* 文字居中 */
}

.language-select-bar .language-select {
    width: 100px;
    height: 30px;
    text-align: center; /* 文字居中 */
}
</style>