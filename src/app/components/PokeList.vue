<template>
    <div class="poke-list">
        <div class="poke-list__content">
            <template v-if="pokemons">
                <poke v-for="(poke, index) in pokemons" :key="index" :poke="poke"></poke>
            </template>

        </div>

        <div v-if="pokemons" class="poke-list__pagination">
            <my-pagination></my-pagination>
        </div>

        <div class="poke-list__overlay" v-if="isLoading">
            <ui-progress-circular :size="50" color="white" class="poke-list__overlay__progress"></ui-progress-circular>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { UiProgressCircular } from 'keen-ui'
    import Poke from '_components/Poke'
    import MyPagination from '_components/MyPagination'

    export default {
        name: 'poke-list',
        data () {
            return {
                page: this.$route.params.page
            }
        },
        computed: {
            pokemons () {
                return this.$store.state.poke.list
            },
            isLoading () {
                return this.$store.state.toggle.loading
            }
        },
        components: {
            MyPagination,
            Poke,
            UiProgressCircular
        },
        watch: {
            $route () {
                this.getPokemons(this.$route.params.page)
            }
        },
        methods: {
            ...mapActions([
                'getPokemons'
            ])
        },
        created () {
            this.getPokemons(this.page)
        }
    }

</script>

<style lang="scss" scoped>
    @import '~_scss_config/vars';

    .poke-list {

        &__content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        &__pagination {
            margin-top: 20px;
        }

        &__overlay {
            position: fixed;
            top: 0;
            left: 0;

            width: 100vw;
            height: 100vh;

            background-color: $primary;
            opacity: .5;

            &__progress {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
</style>
