<template>
    <ui-modal v-if="poke"
        ref="modal"
        @close="close"
        :title="poke.name.toUpperCase()"
        class="modal"
    >
        <div class="modal__content">
            <div class="modal__content__image"
                :style="{'background-image' : `url(${poke.sprites.front_default})`}"
            ></div>

            <div class="modal__content__body body">
                <div class="body__skills">
                    <div class="body__skills__title">
                        Abilities
                    </div>
                    <ul>
                        <li v-for="(a, index) in poke.abilities" :key="index">
                            {{a.ability.name}}
                        </li>
                    </ul>
                </div>
                <div class="body__statics">
                    <div class="body__statics__title">
                        Statistics
                    </div>
                    <stats-chart></stats-chart>
                    <ul>
                        <li v-for="(s, index) in poke.stats" :key="index">
                            {{s.stat.name}} : {{s.base_stat}}
                        </li>
                    </ul>
                </div>

                <div class="body__weight">
                    <div class="body__weight__title">
                        Weight
                    </div>
                    <ul>
                        <li> {{poke.weight }}</li>
                    </ul>
                </div>

                <div class="body__moves">
                    <div class="body__moves__title">
                        Moves
                    </div>
                    <ul>
                        <li v-for="(m, index) in poke.moves" :key="index">
                            {{m.move.name}}
                        </li>
                    </ul>
                </div>

                <div class="body__types">
                    <div class="body__types__title">
                        Types
                    </div>
                    <ul>
                        <li v-for="(t, index) in poke.types" :key="index">
                            {{t.type.name}}
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    </ui-modal>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import { UiModal } from 'keen-ui'
    import StatsChart from '_components/StatsChart'

    export default {
        name: 'modal',
        data () {
            return {}
        },
        computed: {
            ...mapState({
                poke: state => state.poke.selectedPoke,
                modalBase: state => state.modal.base
            })
        },
        components: {
            UiModal,
            StatsChart
        },
        watch: {
            modalBase () {
                return this.modalBase ? this.$refs.modal.open() : this.$refs.modal.close()
            }
        },
        methods: {
            ...mapActions([
                'setToggleModal'
            ]),
            close () {
                this.setToggleModal({ type: 'base', bool: false })
            }
        }
    }

</script>

<style lang="scss">
    .ui-modal {
        &__container {
            max-height: 70vh;

            .ui-modal__body {
                max-height: calc(70vh - 3.5rem);
            }
        }
    }
</style>


<style lang="scss" scoped>
    @import '~_scss_config/vars';
    @import '~_scss_config/mixins';

    .modal {
        &__content {
            display: flex;

            &__image {
                background-position: center;
                background-size: cover;

                width: 96px;
                height: 96px;
            }

            &__body {
                padding-left: 10px;
                border-left: 1px solid $background-primary;
                width: 100%;
            }

            .body {
                &__skills,
                &__statics,
                &__weight,
                &__moves,
                &__types {
                    margin: 10px;
                    width: 100%;

                    &__title {
                        font-size: rem(16px);
                        padding-bottom: 5px;
                    }

                    ul {
                        li {
                            padding: 5px 10px;
                            background-color: $background-secondary;

                            &:nth-child(odd) {
                                background-color: $background-primary;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
