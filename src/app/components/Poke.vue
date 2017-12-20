<template>
    <div class="poke" @click="selectPokemon">
        <div class="poke__image"
            :style="{'background-image' : `url(${ getImage ? getImage : require('_img/no-image.jpg')})`}"
        >
        </div>
        <div class="poke__name">
            {{ poke.name}}
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'poke',
        props: {
            poke: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                splitUrl: this.poke.url.split('/')
            }
        },
        computed: {
            getImage () {
                const splitUrl = this.poke.url.split('/')
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${splitUrl[splitUrl.length - 2]}.png`
            }
        },
        methods: {
            ...mapActions([
                'setPoke',
                'toggleModal'
            ]),
            selectPokemon () {
                this.setPoke(this.poke)
                    .then(() => {
                        this.toggleModal('base')
                    })
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import '~_scss_config/vars';
    @import '~_scss_config/mixins';

    .poke {
        margin: 10px;
        padding: 10px;
        width: calc(100% / 4 - 40px);

        background-color: $white;

        box-shadow: $raised;

        display: flex;
        flex-direction: column;
        align-items: center;

        cursor: pointer;

        transition: transform .2s ease;

        @include media-q ($screen-md) {
            width: calc(100% / 3 - 30px);
        }

        @include media-q ($screen-xs) {
            width: calc(100% / 2 - 20px);
        }

        @include media-q ($screen-mc) {
            width: 100%;
        }

        &:hover {
            transform: scale(1.1);
        }

        &__image {
            width: 100px;
            height: 100px;

            background-position: center;
            background-size: cover;
        }

        &__name {
            margin-top: 10px;
            text-transform: capitalize;
            font-size: rem(16px);
        }
    }
</style>
