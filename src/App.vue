<template>
    <div class="app-container">
        <Header ref="header"/>
        <main ref="main">
            <router-view/>
        </main>
        <Footer ref="footer"/>
    </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
}
</script>

<style src="@/css/common.css"></style>
<style>
* {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, segoe ui, Roboto,
    Helvetica, Arial,
    sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;
    font-size: 16px;
}

body {
    margin: 0;
}

.app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
