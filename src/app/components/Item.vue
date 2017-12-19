<template>
    <div class="item">
        <div class="item__name">
            {{item.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Item',
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        data () {
            return {}
        }
    }

</script>

<style lang="scss" scoped>
    @import '~_scss_config/vars';
    @import '~_scss_config/mixins';

    .item {
        margin: 10px;
        padding: 10px;
        width: calc(100% / 4 - 40px);

        background-color: $white;

        box-shadow: $raised;

        display: flex;
        flex-direction: column;
        align-items: center;

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
    }
</style>
