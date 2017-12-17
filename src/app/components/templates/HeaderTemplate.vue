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
                Pokedex Web
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

    .header-template {
        &__toolbar {
            background-color: $primary;

            .toolbar {
                &__body {
                    display: flex;
                    align-items: center;

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
                }
            }
        }
    }
</style>
