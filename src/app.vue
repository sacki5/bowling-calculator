<template>
    <div id="app">
        <h1>Bowlingcalculator</h1>

        <modal :visible="!gameStarted">
            <welcome-modal @start="start" />
        </modal>

        <label>Submit how many pins you knocked down:</label>

        <score-selector
            :turn="turn"
            :remaining-pins="getRemainingPins"
            @roll="addRoll"
        />

        <label v-if="name">Player: {{ name }}</label>
        <score-board :turn="turn" :turn-scores="turnScores" :score="score" />

        <button @click="reset">Reset</button>

        <modal :visible="turn > 9">
            <congratulation-modal :score="score" @reset="reset" />
        </modal>

        <footer-component />
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import scoreSelector from '@/components/scoreSelector';
import scoreBoard from '@/components/scoreBoard';
import modal from '@/components/modal';
import footerComponent from '@/components/footerComponent';
import congratulationModal from '@/components/congratulationModal';
import welcomeModal from '@/components/welcomeModal';

export default {
    components: {
        footerComponent,
        scoreSelector,
        scoreBoard,
        modal,
        congratulationModal,
        welcomeModal,
    },
    computed: {
        ...mapGetters(['getRemainingPins']),
        ...mapState(['turn', 'turnScores', 'score', 'name', 'gameStarted']),
    },
    methods: {
        ...mapActions(['addRoll', 'reset', 'saveName', 'startGame']),
        start(name) {
            this.saveName(name);
            this.startGame();
        },
    },
};
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 3rem;
}

button {
    background: rgb(231, 231, 231);
    border: 1px solid rgb(199, 199, 199);
    border-radius: 3px;
    padding: 10px;
    font-weight: 600;
    margin: 10px 0;

    &.success {
        background: rgb(56, 158, 56);
        border-color: rgb(70, 194, 70);
        color: white;
    }
}

input {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #dddddd;
    width: 60%;
    margin: 10px 0;
}
</style>
