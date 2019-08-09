<template>
    <div>
        <div v-if="visible" class="modal_wrapper">
            <div class="modal" tabindex="0">
                <slot />
            </div>
        </div>
        <div v-if="visible" class="backdrop" />
    </div>
</template>

<script>
export default {
    props: {
        title: { type: String, default: null },
        visible: { type: Boolean, default: false },
    },
};
</script>

<style lang="scss" scoped>
.backdrop {
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}

.modal_wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    overflow-y: scroll;

    .modal {
        width: 30%;
        background: #fff;
        border-radius: 3px;
        margin: 15vh auto;
        position: relative;
        padding: 20px;
        text-align: center;
    }
}
</style>
