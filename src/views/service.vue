<template>
    <div id="home">
        <h4>Bowlingcalculator</h4>
        <score-selector />
        <score-board />
    </div>
</template>

<script>
import scoreSelector from '@/components/scoreSelector';
import scoreBoard from '@/components/scoreBoard';

export default {
    components: {
        scoreSelector,
        scoreBoard,
    },
};
</script>
