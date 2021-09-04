<template>

</template>

<script lang="ts">
    import Vue from "vue"
    export type Todo = {
        id: string
        tasks: string
        done: boolean
    }

    export type Data = {
        firstName: string,
        lasName: string,
        todos: Todo[]
    }

    export default Vue.extend({
        name: "AppTodoList",
        data: (): Data => ({
            firstName: 'Taro',
            lasName: 'Yamada',
            todos: []
        })
    })
</script>

<style scoped>

</style>
