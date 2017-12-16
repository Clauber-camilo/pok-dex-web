<template>
    <div class="hello">
        <div class="hello__container container">
            {{msg}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to pokedex'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .hello {

        &__container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: calc(100vh - 56px);
        }
    }
</style>
