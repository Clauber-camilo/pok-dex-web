<template>
    <div id="app">
        <header>
            <header-template></header-template>
        </header>
        <main>
            <!-- <router-view></router-view> -->
            <stats-chart
                class="stats"
                :options="{
                    width: 700,
                    maxValue: 400
                }"
            ></stats-chart>
        </main>
    </div>
</template>

<script>
    import interceptor from '@/app/common/runs/interceptor'
    import HeaderTemplate from '_components/templates/HeaderTemplate'
    import StatsChart from '_components/StatsChart'

    export default {
        name: 'app',
        components: {
            HeaderTemplate,
            StatsChart
        },
        created () {
            interceptor()
        }
    }
</script>

<style lang="scss">
    @import '~_scss/main';

    .stats {
        margin-top: 100px;
    }
</style>
