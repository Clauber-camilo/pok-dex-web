<template>
    <div class="header-template">
        <UiToolbar
            class="header-template__toolbar toolbar"
            textColor="white"
            :removeNavIcon="true"
            :loading="isLoading"
        >
            <div class="toolbar__body">
                <div class="toolbar__body__logo" ref="logo">
                </div>
                <div class="toolbar__body__title">
                    Pokedex Web
                </div>

                <div class="toolbar__body__items">
                    <router-link class="link" :to="{ name: 'poke-list'}"> pokémons </router-link>
                    <router-link class="link" :to="{ name: 'poke-items'}"> items </router-link>
                </div>

            </div>
        </UiToolbar>
    </div>
</template>

<script>
    import { UiToolbar } from 'keen-ui'

    export default {
        name: 'header-template',
        data () {
            return {}
        },
        computed: {
            isLoading () {
                return this.$store.state.toggle.loading
            }
        },
        components: {
            UiToolbar
        }
    }

</script>

<style lang="scss" scoped>
    @import '~_scss_config/vars';
    @import '~_scss_config/mixins';

    .header-template {
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        z-index: 100;

        &__toolbar {
            background-color: $primary;
            padding: 0 1rem;

            .toolbar {
                &__body {
                    display: flex;
                    align-items: center;
                    flex: 1;

                    &__logo {
                        background-image: url('~_img/poke_ball_icon.svg');
                        background-size: 40px;
                        background-position: center;
                        background-repeat: no-repeat;

                        position: relative;

                        width: 50px;
                        height: 50px;
                        margin-right: 15px;

                        transition: transform .3s ease;
                        transform-style: preserve-3d;

                        cursor: pointer;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &:hover {
                            transform: rotateY(180deg);
                        }
                    }

                    &__title {
                        padding-right: 20px;
                        border-right: 1px solid $background-primary;

                        @include media-q($screen-xs) {
                            display: none;
                        }
                    }

                    &__items {
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        font-size: rem(14px);

                        padding-left: 20px;

                        @include media-q($screen-xs) {
                            width: 100%;
                            justify-content: flex-end;
                        }

                        .link {
                            &:last-child {
                                margin-left: 20px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
