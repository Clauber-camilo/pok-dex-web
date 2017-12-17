<template>
    <div class="poke">
        <div class="poke__image"
            :style="{'background-image' : `url(${
                    pokemons[index].sprites
                        ? pokemons[index].sprites.front_default
                        : require('_img/no-image.jpg')})`
                }"
        >
        </div>
        {{ pokemons[index].name}}
    </div>
</template>

<script>
    export default {
        name: 'poke',
        props: {
            index: {
                type: Number
            }
        },
        computed: {
            pokemons () {
                return this.$store.state.poke.list
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import '~_scss_config/vars';

    .poke {
        margin: 10px;
        padding: 10px;

        background-color: $white;

        box-shadow: $raised;

        &__image {
            width: 200px;
            height: 200px;

            background-position: center;
            background-size: cover;
        }
    }
</style>
