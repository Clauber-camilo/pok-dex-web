<template>
    <ui-modal ref="modal" @close="close">
        Initial
    </ui-modal>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import { UiModal } from 'keen-ui'

    export default {
        name: 'modal',
        data () {
            return {}
        },
        computed: {
            ...mapState({
                selectedPoke: state => state.poke.selectedPoke,
                modalBase: state => state.modal.base
            })
        },
        components: {
            UiModal
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

<style lang="scss" scoped>

</style>
