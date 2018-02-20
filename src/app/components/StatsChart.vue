<template>
    <svg width="500" height= "300" ref="svg">
        <circle cx="100" cy="100" r="100" fill="black"></circle>
    </svg>
</template>

<script>
    // const d3 = require('d3')

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
                ],
                defaultOptions: {
                    width: 500,
                    height: 500,
                    maxValue: 100
                },
                availableOptions: [
                    'width',
                    'height',
                    'maxValue'
                ]
            }
        },

        props: {
            options: {
                type: Object,
                default: null
            }
        },

        methods: {
            /*
            * Check if the component has options
            * overwrite the defaultOptions values
            * by the sent options
            * checking if the sent value has on the availableOptions property
            */
            overwriteOptions () {
                if (this.options) {
                    Object.entries(this.options)
                        .forEach(val => {
                            if (this.availableOptions.includes(val[0])) {
                                this.defaultOptions[val[0]] = this.options[val[0]]
                            }
                        })
                }
            }
        },

        mounted () {
            // const svg = d3.select(this.$refs.svg)
            // , width = 500
            // , heigth = 300

            // Overwrite Options
            // This will
            this.overwriteOptions()
        }
    }

</script>

<style lang="scss" scoped>

</style>
