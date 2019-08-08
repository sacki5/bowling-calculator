<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
@import '../config.json';

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 3rem;

    color: $color;
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
</style>
