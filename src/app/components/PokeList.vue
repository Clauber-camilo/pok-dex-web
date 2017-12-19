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
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
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
            }
        },
        components: {
            MyPagination,
            Poke
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
    .poke-list {

        &__content {
            display: flex;
            flex-wrap: wrap;
        }

        &__pagination {
            margin-top: 20px;
        }
    }
</style>
