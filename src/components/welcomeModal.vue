<template>
    <div>
        <h1>Welcome to the bowling calculator</h1>
        <label>Please enter your name: (optional)</label>
        <br /><input
            v-model="name"
            placeholder="Your name here"
            @keydown.enter="$emit('start', name)"
        /><br />
        <button class="success" @click="$emit('start', name)">
            Start bowling!
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
        };
    },
};
</script>
