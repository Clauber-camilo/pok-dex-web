<template>
    <div id="app">
        <header>
            <header-template></header-template>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import interceptor from '@/app/common/runs/interceptor'
    import HeaderTemplate from '_components/templates/HeaderTemplate'

    export default {
        name: 'app',
        components: {
            HeaderTemplate
        },
        created () {
            interceptor()
        }
    }
</script>

<style lang="scss">
    @import '~_scss/main';
</style>
