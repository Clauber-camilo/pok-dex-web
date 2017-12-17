<template>
    <div class="hello">
        <div class="hello__container container">
            <poke-list></poke-list>
        </div>
    </div>
</template>

<script>

    import PokeList from '_components/PokeList'

    export default {
        name: 'pokedex',
        data () {
            return {
                msg: 'Welcome to pokedex 2 '
            }
        },
        components: {
            PokeList
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_config/vars';

    .hello {
        background-color: $background-primary;

        &__container {
            min-height: calc(100vh - 56px);
        }
    }
</style>
