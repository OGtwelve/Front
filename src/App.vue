<template>
    <div>
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
*{
    font-family: Calibri, sans-serif;
}
body{
    margin: 0;
}
main {
    margin-top: 100px; /* Set the margin-top value to the same height as the header */
    margin-bottom: 100px; /* Set the margin-bottom value to the same height as the footer */
}
</style>
