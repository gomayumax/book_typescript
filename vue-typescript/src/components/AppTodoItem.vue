<template>
    <div class="todo">
        {{myTask}}
    </div>
</template>

<script lang="ts">
    import Vue, {PropType} from "vue"
    export type Todo ={
        id: string
        task: string
        done: boolean
    }
  export default Vue.extend({
    name: "AppTodoItem",
      props: {
        todo: Object as PropType<Todo>
      },
      computed: {
        myTask(): string {
            return this.todo.task
        }
      }
  })
</script>

<style scoped>

</style>
