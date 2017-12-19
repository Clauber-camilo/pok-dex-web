<template>
    <div class="my-pagination">
        <pagination
            :records="count"
            :per-page="20"
            @paginate="setPage"
            class="my-pagination__content"
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

<style lang="scss">
    @import '~_scss_config/vars';

    .VuePagination {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 20px;

        &__pagination {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            &-item {
                width: 35px;
                height: 35px;

                background-color: $primary;
                color: $white;
                box-shadow: $raised;

                margin: 10px;
                border-radius: 2px;

                display: flex;
                align-items: center;
                justify-content: center;

                transition: background-color .2s ease;

                &:hover {
                    background-color: lighten($primary, 10)
                }
            }
        }
    }
</style>
