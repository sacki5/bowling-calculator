<template>
    <div id="about">
        <navigation />
        <h4>About</h4>
        <input
            v-model="message"
            placeholder="Write a message"
        >

        <p>{{ message }}</p>
    </div>
</template>

<script>
import navigation from '@/components/navigation';

export default {
    components: {
        navigation,
    },
    data() {
        return {
            message: '',
        };
    },
};
</script>
