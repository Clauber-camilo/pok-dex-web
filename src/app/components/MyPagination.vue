<template>
    <div class="pagination">
        <pagination
            :records="count"
            :per-page="20"
            @paginate="setPage"
        ></pagination>
    </div>
</template>

<script>
    import { Pagination } from 'vue-pagination-2'

    export default {
        name: 'my-pagination',
        data () {
            return {
                page: this.$route.params.page
            }
        },
        components: {
            Pagination
        },
        computed: {
            count () {
                return this.$store.state.poke.count
            },
            total () {
                return Math.ceil(this.count / 20) // 20 is the number of pokemons showed per page
            }
        },
        methods: {
            setPage (page) {
                this.$router.push(`/pokemon/${page}`)
            }
        }
    }

</script>

<style lang="scss" scoped>
    .pagination {

    }
</style>
