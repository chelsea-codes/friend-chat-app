<template>
  <div class="chat-container">
    <h1>{{chatName}}</h1>
    <TheChatWindow/>
    <TheChatInputArea/>
  </div>
</template>

<script>
import TheChatWindow from './TheChatWindow.vue';
import TheChatInputArea from './TheChatInputArea.vue';
export default {
  name: 'TheChatContainer',
  data: () => { 
    return { 
      chatName: "Chat Room Name"
    }
  },
  components: {
    TheChatWindow,
    TheChatInputArea
  }
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
