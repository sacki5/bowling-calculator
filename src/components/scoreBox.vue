<template>
    <div v-if="!last" class="scoreBox">
        <div class="firstScore">
            <span v-if="turnScore.first !== 10">{{ turnScore.first }}</span>
        </div>
        <div class="secondScore">
            <span v-if="turnScore.first === 10">
                {{ turnScore.first | bowlingScore(turnScore.first) }}
            </span>
            <span v-else>
                {{ turnScore.second | bowlingScore(turnScore.first) }}
            </span>
        </div>
        <div class="totalScore">
            {{ turnScore.total }}
        </div>
    </div>
    <div v-else class="scoreBox last">
        <div class="firstScore">
            {{ turnScore.first | bowlingScore }}
        </div>
        <div class="secondScore">
            {{ turnScore.second | bowlingScore(turnScore.first) }}
        </div>
        <div class="thirdScore">
            {{ turnScore.third | bowlingScore(turnScore.second) }}
        </div>
        <div class="totalScore">
            {{ turnScore.total }}
        </div>
    </div>
</template>

<script>
export default {
    filters: {
        bowlingScore(value, oldValue) {
            if (!value) return null;
            if (value === 10) return 'X';
            if (oldValue + value === 10) return '/';

            return value;
        },
    },
    props: {
        last: { type: Boolean, default: false },
        turnScore: { type: Object, required: true },
    },
};
</script>
