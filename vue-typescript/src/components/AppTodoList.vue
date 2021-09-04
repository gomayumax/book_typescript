<template>

</template>

<script lang="ts">
    import Vue from "vue"
    export default Vue.extend({
        name: "AppTodoList",
        data: () => ({
            firstName: '',
            lasName: '',
            doneTodos: null as null,
            todos: [] as Array<{
                id: string
                tasks: string
                done: boolean
            }>
        })
    })
</script>

<style scoped>

</style>
