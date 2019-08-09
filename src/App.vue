<template>
    <div id="app">
        <router-view />
    </div>
</template>

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
    box-shadow: 1px 2px 3px #eaeaea;
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
