<template>
    <div>
        <button
            v-for="(button, index) in remainingPins + 1"
            :key="index"
            :disabled="turn > 9"
            @click="add(index)"
        >
            {{ index }}
        </button>
    </div>
</template>

<script>
import store from '@/store';

export default {
    computed: {
        remainingPins() {
            return store.getters.getRemainingPins;
        },
        turn() {
            return store.state.turn;
        },
    },
    methods: {
        add(score) {
            // store.commit('addScore', score);
            store.dispatch('addRoll', score);
        },
    },
};
</script>

<style lang="scss" scoped>
div {
    margin-bottom: 20px;
}

button {
    border: none;
    color: white;
    background: rgb(55, 96, 172);
    margin-right: 5px;

    &:hover {
        background: rgb(64, 112, 201);
        cursor: pointer;
    }

    &:disabled {
        background: grey;
        cursor: no-drop;
    }
}
</style>
