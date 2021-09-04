<template>
    <div class="todos">
        <div v-for="todo in todos" :key="todo.id">
            <AppTodoItem :todo="todo" />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import AppTodoItem, {Todo} from './AppTodoItem.vue'

    export type Data = {
        todos: Todo[]
    }
    export default Vue.extend({
        name: "AppTodoList",
        data: (): Data => ({
            todos: []
        }),
        components: {
            AppTodoItem
        }
    })

</script>

<style scoped>

</style>
