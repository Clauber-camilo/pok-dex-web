<template>
    <div class="poke-list">
        <poke v-for="(n, i) in 20" :key="n" :index="i"></poke>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import Poke from '_components/Poke'

    export default {
        name: 'poke-list',
        data () {
            return {
                page: this.$route.params.page
            }
        },
        components: {
            Poke
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
        display: flex;
        flex-wrap: wrap;
    }
</style>
