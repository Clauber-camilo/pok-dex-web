<template>

</template>

<script>
    import d3 from 'd3'

    export default {
        name: 'stats-chart',
        data () {
            return {
                stats: [
                    {
                        name: 'HP',
                        base_stat: 70
                    },
                    {
                        name: 'speed',
                        base_stat: 40
                    },
                    {
                        name: 'special defense',
                        base_stat: 90
                    },
                    {
                        name: 'special atack',
                        base_stat: 80
                    },
                    {
                        name: 'defense',
                        base_stat: 40
                    },
                    {
                        name: 'atack',
                        base_stat: 70
                    }
                ]
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>
