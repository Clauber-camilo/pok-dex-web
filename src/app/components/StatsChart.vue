<template>
    <!-- <svg width="500" height= "300" ref="svg">
        <circle cx="100" cy="100" r="100" fill="black"></circle>
    </svg> -->
    <div class="chart" ref="chart"></div>
</template>

<script>
    const d3 = require('d3')

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
                    maxValue: 100,
                    format: 'r',
                    levels: 3,
                    radians: 2 * Math.PI
                },
                availableOptions: [
                    'width',
                    'height',
                    'maxValue',
                    'format',
                    'levels'
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
            this.overwriteOptions()

            const allAxis = this.stats.map(i => i.axis)
                , total = allAxis.length
                , radius = Math.min(this.defaultOptions.width / 2, this.defaultOptions.height / 2)
                , format = d3.format(this.defaultOptions.format)

            d3.select(this.$refs.chart).select('svg').remove()
            const group = d3.select(this.$refs.chart)
                .append('svg')
                .attr('width', this.defaultOptions.width)
                .attr('height', this.defaultOptions.height)
                .append('g')

            for (let i = 0; i < this.defaultOptions.levels; i += 1) {
                const levelFactor = radius * ((i + 1) / this.defaultOptions.levels)
                group.selectAll('.levels')
                    .data(allAxis)
                    .enter()
                    .append('svg:line')
                    .attr('x1', (d, j) => levelFactor * (1 - Math.sin((j * this.defaultOptions.radians) / total)))
                    .attr('y1', (d, j) => levelFactor * (1 - Math.cos((j * this.defaultOptions.radians) / total)))
                    .attr('x2', (d, j) => levelFactor * (1 - Math.sin(((j + 1) * this.defaultOptions.radians) / total)))
                    .attr('y2', (d, j) => levelFactor * (1 - Math.cos(((j + 1) * this.defaultOptions.radians) / total)))
                    .attr('class', 'line')
                    .style('stroke', 'black')
                    .style('stroke-opacity', '1')
                    .style('stroke-width', '0.3px')
                    .attr(
                        'transform',
                        `translate(
                            ${((this.defaultOptions.width / 2) - levelFactor)},
                            ${((this.defaultOptions.height / 2) - levelFactor)})`
                    )
            }

            for (let i = 0; i < this.defaultOptions.levels; i += 1) {
                const levelFactor = radius * ((i + 1) / this.defaultOptions.levels)
                group.selectAll('.levels')
                    .data([1]) // dummy data
                    .enter()
                    .append('svg:text')
                    .attr('x', () => levelFactor * (1 - Math.sin(0)))
                    .attr('y', () => levelFactor * (1 - Math.cos(0)))
                    .attr('class', 'legend')
                    .style('font-family', 'sans-serif')
                    .style('font-size', '10px')
                    .attr(
                        'transform',
                        `translate(
                            ${(this.defaultOptions.width / 2) - levelFactor},
                            ${(this.defaultOptions.height / 2) - levelFactor})`
                    )
                    .attr('fill', '#737373')
                    .text(format(i + 1) * (this.defaultOptions.maxValue / this.defaultOptions.levels))
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>
