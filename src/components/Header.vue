<template>
  <header>
    <h1>{{ title }}</h1>
    <Button @show-form="$emit('show-form')"  :color="showAddTask?'green':'red'" :text="showAddTask?'close':'Add task' " />
  </header>
</template>

<script>
import Button from "./button.vue";
export default {
  name: 'Header',
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button
},
emits:["show-form"],
  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
