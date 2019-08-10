<template>
    <div id="app">
        <h1>Bowlingcalculator</h1>

        <modal :visible="!gameStarted">
            <h1>Welcome to the bowling calculator</h1>
            <label>Please enter your name: (optional)</label>
            <br /><input
                v-model="formName"
                placeholder="Your name here"
                @keydown.enter="start"
            /><br />
            <button class="success" @click="start">
                Start bowling!
            </button>
        </modal>

        <label>Submit how many pins you knocked down:</label>

        <score-selector />

        <label v-if="name">Player: {{ name }}</label>
        <score-board />

        <button @click="resetState">Reset</button>

        <modal :visible="turn > 9">
            <h1>Finished!</h1>
            <img src="/images/winner.svg" width="70%" />
            <p>
                Great job! You finished with at score of
                <strong>{{ score }} points!</strong>
            </p>

            <button class="success" @click="resetState">Reset</button>
        </modal>

        <footer-component />
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import scoreSelector from '@/components/scoreSelector';
import scoreBoard from '@/components/scoreBoard';
import modal from '@/components/modal';
import footerComponent from '@/components/footerComponent';

export default {
    components: {
        footerComponent,
        scoreSelector,
        scoreBoard,
        modal,
    },
    data() {
        return {
            formName: null,
        };
    },
    computed: mapState(['turn', 'score', 'name', 'gameStarted']),
    methods: {
        ...mapMutations(['resetState', 'saveName', 'startGame']),
        start() {
            this.saveName(this.formName);
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

#nav {
    a {
        font-weight: bold;
        color: var(--color-green);
        margin-right: 1rem;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
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
