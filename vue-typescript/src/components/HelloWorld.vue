<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="onClickElement">
      test
    </div>
  </div>
</template>

<script lang="ts">
  import Vue, {PropType} from "vue"

  export type Rect = {
    width: number
    height: number
  }
  export type Position = {
    top: number
    left: number
  }
  export default Vue.extend({
    name: 'HelloWorld',
    props: { // props の型宣言
      msg: String,
      value: [String, Number],
      requiredValue: {
        type: [Number, String],
        required: true
      },
      obj: {
        type: Object as PropType<{ name: string }>,
        required: true
      },
      arr: {
        type: Array as PropType<{ task: string }[]>
      }
    },
    data: () => ({
      bounds: null as Clientrect | DOMRect | null,
    }),
    methods: {
      onClickElement({target}: {target: HTMLElement}): void {
        this.bounds = target.getBoundingClientRect()
      }
    },
    computed: {
      message(): string{
        return this.msg
      },
      myName(): string{
        return this.obj.name
      },
      myFirstTask(): string{
        return this.arr[0].task
      },
      boundsInfo(): string {
        if (this.bounds === null) return ""
        return JSON.stringify(this.bounds)
      },
      rect(): Rect {
        if( this.bounds === null) return {width: 0, height: 0}
        return {
          width: this.bounds.width,
          height: this.bounds.height
        }
      },
      position(): Position {
        if(this.bounds === null) return {top: 0, left: 0}
        return {
          top: this.bounds.top,
          left: this.bounds.left
        }
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
