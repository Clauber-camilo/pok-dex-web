<template>
    <div class="poke">

        {{ pokemons[index].name }}
    </div>
</template>

<script>
    export default {
        name: 'poke',
        props: {
            index: {
                type: Number
            }
        },
        computed: {
            pokemons () {
                return this.$store.state.poke.list
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import '~_scss_config/vars';

    .poke {
        margin: 10px;
        padding: 10px;

        background-color: $white;

        box-shadow: $raised;
    }
</style>
