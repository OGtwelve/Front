<template>
    <header>
        <div class="container">
            <div class="content">
<!--                -->
                <nav class="nav">
                    <ul class="nav-left">
                        <li class="icon"><a href="/"><img src="@/assets/logo.png" alt="logo" class="icon-img"></a></li>
                        <li class="normal-li"><router-link to="/">{{ $t('home') }}</router-link></li>
                        <li class="normal-li"><router-link to="/about">{{ $t('about') }}</router-link></li>
                        <li class="normal-li"><router-link to="/contact">{{ $t('contact') }}</router-link></li>
                    </ul>
                    <div class="nav-right">
                        <a>Login</a>
                    </div>
                </nav>
<!--                -->
            </div>
            <languageSelect/>
        </div>
    </header>
</template>

<script>
import languageSelect from "@/locales/languageSelect.vue";
export default {
    name: "pageHeader",
    components: {
        languageSelect
    }
}
</script>

<style src="@/css/common.css"/>
<style scoped>
.nav{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    min-width: 992px;
    max-width: 72rem;
    padding-left: unset;
    padding-right: unset;
    width: 100%;
    flex-wrap: nowrap;
    position: relative;
}
.nav-left{
    display: flex;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 0;
    padding: 0;
}
.nav-right{
    display: flex;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    align-items: center;
}
.icon{
    height: 24px;
    width: 62.5px;
    list-style: none;
}
.icon-img{
    height: 24px;
    width: 62.5px;
}
.normal-li{
    height: 24px;
    width: 36px;
    font-style: normal;
    line-height: 24px;
    font-weight: 400;
    font-size: 16px;
    margin-left: 31.5px;
    color: black;
    cursor: pointer;
    list-style: none;
    text-align: center;
}
.normal-li:last-of-type{
    width: fit-content;
}
</style>