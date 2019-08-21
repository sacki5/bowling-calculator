<template>
    <div>
        <h1>Finished!</h1>
        <img src="/images/winner.svg" width="70%" />
        <p>
            Great job! You finished with at score of
            <strong>{{ score }} points!</strong>
        </p>

        <button class="success" @click="$emit('reset')">Reset</button>
    </div>
</template>
