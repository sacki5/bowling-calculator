<template>
    <div id="app">
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

            <button class="success" @click="resetState">Reset</button>
        </modal>
        <button @click="resetState">Reset</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import scoreSelector from '@/components/scoreSelector';
import scoreBoard from '@/components/scoreBoard';
import modal from '@/components/modal';

export default {
    components: {
        scoreSelector,
        scoreBoard,
        modal,
    },
    computed: mapState(['turn', 'score']),
    methods: mapMutations(['resetState']),
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
</style>
