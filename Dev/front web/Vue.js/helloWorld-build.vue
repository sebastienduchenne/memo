<!-- à utiliser avec un outil de build tels que webpack ou Browserify -->

<template>
    <p>{{ msg }}</p>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                msg: "Hello world"
            }
        }
    }
</script>

<style scoped>
    p {
        color: blue;
    }
</style>