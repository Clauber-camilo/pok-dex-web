<template>
    <div class="poke-items">
        <div class="poke-items__content">
            <template v-if="items">
                <item v-for="(item, index) in items" :key="index" :item="item"></item>
            </template>

        </div>

        <div v-if="items" class="poke-items__pagination">
            <my-pagination store="items"></my-pagination>
        </div>

        <div class="poke-items__overlay" v-if="isLoading">
            <ui-progress-circular :size="50" color="white" class="poke-items__overlay__progress"></ui-progress-circular>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { UiProgressCircular } from 'keen-ui'
    import Item from '_components/Item.vue'
    import MyPagination from '_components/MyPagination'

    export default {
        name: 'poke-items',
        data () {
            return {
                page: this.$route.params.page
            }
        },
        computed: {
            items () {
                return this.$store.state.items.list
            },
            isLoading () {
                return this.$store.state.toggle.loading
            }
        },
        components: {
            Item,
            MyPagination,
            UiProgressCircular
        },
        watch: {
            $route () {
                this.getItems(this.$route.params.page)
            }
        },
        methods: {
            ...mapActions([
                'getItems'
            ])
        },
        created () {
            this.getItems(this.page)
        }
    }

</script>

<style lang="scss" scoped>
    @import '~_scss_config/vars';

    .poke-items {

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
