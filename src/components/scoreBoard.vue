<template>
    <div class="scoreBoard">
        <div
            v-for="(turnScore, index) in turnScores"
            :key="index"
            class="turn"
            :class="{ active: index === turn }"
        >
            <div class="turnNumber">
                {{ index + 1 }}
            </div>
            <score-box
                :last="index === turnScores.length - 1"
                :turn-score="turnScore"
            />
        </div>
        <div class="hdcpScore">
            <div class="turnNumber">
                Score
            </div>
            <div class="scoreBox">
                <div class="totalScore">
                    {{ score }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import scoreBox from '@/components/scoreBox';

export default {
    components: {
        scoreBox,
    },
    props: {
        score: { type: Number, required: true },
        turnScores: { type: Array, required: true },
        turn: { type: Number, required: true },
    },
};
</script>

<style lang="scss">
.scoreBoard {
    width: 80%;
    min-width: 600px;
    background: rgb(237, 240, 241);
    display: flex;
    border: 1px solid rgb(76, 105, 124);
    border-radius: 3px;
    flex-direction: row;
    flex-wrap: wrap;

    .turn {
        border-right: 1px solid rgb(76, 105, 124);
    }
}

.turn {
    flex-basis: 100%;
    flex: 1;

    &.active {
        background: rgb(198, 211, 219);
    }
}

.turnNumber {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgb(76, 105, 124);
    font-weight: 600;
    padding: 5px 10px;
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
        border-left: 1px solid rgb(76, 105, 124);
        border-bottom: 1px solid rgb(76, 105, 124);
    }

    .totalScore {
        grid-column: span 2;
    }
}

.scoreBox.last {
    grid-template-columns: auto auto auto;

    .thirdScore {
        border-left: 1px solid rgb(76, 105, 124);
        border-bottom: 1px solid rgb(76, 105, 124);
    }

    .totalScore {
        grid-column: span 3;
    }
}
</style>
