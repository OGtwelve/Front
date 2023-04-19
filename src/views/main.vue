<template>
    <div class="hello">
        <button @click="toggleLanguage">切换语言</button>
        <h1>{{ $t('hello') }}</h1>
    </div>
</template>

<script>
export default {
    name: "pageMain",
    methods: {
        toggleLanguage() {
            const i18n = this.$i18n;
            const currentLocale = i18n.locale;
            const locales = i18n.availableLocales;

            const index = locales.indexOf(currentLocale);
            i18n.locale = locales[(index + 1) % locales.length];
        },
    },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
