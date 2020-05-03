<template>
    <div>
        <p class="input-area">{{userName}} says: <input v-model="message" placeholder="super secret message..."></p>
    </div>
</template>

<script>
export default {
    name: 'TheChatInputArea',
    data: () => {
        return {
            userName: "User Name",
            message: ""
        }
    }
}
</script>

<style scoped>

</style>