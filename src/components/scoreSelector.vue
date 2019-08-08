<template>
    <div>
        <button
            v-for="(button, index) in remainingPins + 1"
            :key="index"
            @click="add(index)"
        >
            {{ index }}
        </button>
    </div>
</template>

<script>
import store from "@/store";

export default {
    computed: {
        remainingPins() {
            return store.getters.getRemainingPins;
        }
    },
    methods: {
        add(score) {
            store.commit("addScore", score);
        }
    }
};
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 20px;
}

button {
  padding: 10px;
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 3px;
  background: rgb(55, 96, 172);
  margin-right: 5px;

  &:hover {
    background: rgb(64, 112, 201);
    cursor: pointer;
  }
}
</style>
