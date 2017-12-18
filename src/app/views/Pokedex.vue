<template>
    <div class="pokedex">
        <div class="pokedex__container container">
            <transition name="fade">
                <router-view></router-view>
            </transition>
            <!-- <poke-list></poke-list> -->
        </div>

        <modal></modal>
    </div>
</template>

<script>

    import PokeList from '_components/PokeList'
    import Modal from '_components/Modal'

    export default {
        name: 'pokedex',
        data () {
            return {
                msg: 'Welcome to pokedex 2 '
            }
        },
        components: {
            PokeList,
            Modal
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_config/vars';

    .pokedex {
        background-color: $background-primary;

        &__container {
            min-height: calc(100vh - 56px);
            margin-top: $header-desk-height;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>
