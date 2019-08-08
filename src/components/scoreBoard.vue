<template>
    <div v-if="turnScores.length" class="scoreBoard">
        <div v-for="(turn, index) in 10" :key="index" class="turn">
            <div class="turnNumber">
                {{ turn }}
            </div>
            <div class="scoreBox">
                <div class="firstScore">
                    {{ turnScores[index].first }}
                </div>
                <div class="secondScore">
                    {{
                        turnScores[index].second
                            | bowlingScore(turnScores[index].first)
                    }}
                </div>
                <div class="totalScore">
                    {{ turnScores[index].total }}
                </div>
            </div>
        </div>
        <div class="hdcpScore">
            <div class="turnNumber">
                Hdcp Score
            </div>
            <div class="scoreBox">
                <div class="totalScore">
                    {{ hdcpScore }}
                </div>
            </div>
        </div>
        <div class="maxPossible">
            <div class="turnNumber">
                Max possible
            </div>
            <div class="scoreBox">
                <div class="totalScore">
                    15
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store';

export default {
    filters: {
        bowlingScore(value, oldValue) {
            if (value === 10) return 'X';
            if (oldValue + value === 10) return '/';

            return value;
        },
    },
    computed: {
        hdcpScore() {
            return store.state.hdcpScore;
        },
        turnScores() {
            return store.state.turnScores;
        },
    },
};
</script>

<style lang="scss">
.scoreBoard {
    width: 80%;
    min-width: 600px;
    background: #eaeaea;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    & > div {
        border: 1px solid grey;
    }
}

.turn {
    flex-basis: 100%;
    flex: 1;
}

.turnNumber {
    width: 100%;
    text-align: center;
    border-bottom: 2px solid grey;
    font-weight: 600;
    padding: 10px;
}

.scoreBox {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 25px 25px;
    text-align: center;
    font-weight: 800;

    div {
        padding: 0 5px;
    }

    .secondScore {
        border-left: 1px solid grey;
        border-bottom: 1px solid grey;
    }

    .totalScore {
        grid-column: span 2;
    }
}
</style>
