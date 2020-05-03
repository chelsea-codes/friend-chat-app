<template>
  <div id="app">
    <TheChatContainer/>
  </div>
</template>

<script>
import TheChatContainer from './components/TheChatContainer.vue'

export default {
  name: 'App',
  components: {
    TheChatContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
