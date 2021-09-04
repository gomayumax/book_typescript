<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"

  @Component
  export default class HelloWorld extends Vue {
    // Propsの定義
    @Prop({type: Boolean, default: false})
    flag!: boolean

    @Prop({type: String, default: null})
    message!: string | null

    @Prop({type: [String, Number], default: null})
    value!: string | number | nulll

    // Dataの定義
    inputText: string | null = null
    bounds: ClientRect | DOMRect | null = null
  }
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
