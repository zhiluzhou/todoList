<template>
  <li v-if="show">
    <span :class="messageClass(item.status)" @click="handleToggle(item.id)">{{index+1}}.{{item.message}}</span>
    <button @click="handleRemove(item.id)">delete</button>
  </li>
</template>
<script>
    export default {
      name: 'todo-items',
      props:['item','filter','index','handleToggle','handleRemove'],
      computed:{
        show() {
          return (
            this.filter === '全部' ||
            (this.filter === '未完成' && !this.item.status) ||
            (this.filter === '已完成' && this.item.status)
          )
        }
      },
      methods:{
        messageClass: status => ({ message: true, done: status })
      }
    }
</script>
<style scoped>
  .message{
    cursor: pointer;
    text-decoration-line: none;
    text-decoration: none;
  }
  .done{
    text-decoration-line: line-through;
    text-decoration: line-through;
  }
</style>

