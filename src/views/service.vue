<template>
    <div id="home">
        <h1>Bowlingcalculator</h1>

        <label>Submit how many pins you knocked down:</label>
        <score-selector />
        <score-board />
        <modal :visible="turn > 9">
            <h1>Finished!</h1>
            <img src="/images/winner.svg" width="70%" />
            <p>
                Great job! You finished with at score of
                <strong>{{ score }} points!</strong>
            </p>

            <button class="success" @click="reset">Reset</button>
        </modal>
        <button @click="reset">Reset</button>
    </div>
</template>

<script>
import scoreSelector from '@/components/scoreSelector';
import scoreBoard from '@/components/scoreBoard';
import modal from '@/components/modal';
import store from '@/store';

export default {
    components: {
        scoreSelector,
        scoreBoard,
        modal,
    },
    computed: {
        turn() {
            return store.state.turn;
        },
        score() {
            return store.state.score;
        },
    },
    methods: {
        reset() {
            store.commit('resetState');
        },
    },
};
</script>
