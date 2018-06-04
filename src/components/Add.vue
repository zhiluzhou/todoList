<template>
    <div>
      <h1>To Do List</h1>
      <ul class="btn_list">
        <li v-for="btn,i in btnList" :key="i">
          <button @click='handleUpdateFilter(btn)'>{{btn}}</button>
        </li>
      </ul>
      <input type="text" @keyup.enter="add" />
      <button @click="add">add</button>
      <ul class="eve_list">
        <todo-item v-for="item,index in todoList" :key="item.id"
              :item="item"
              :index="index"
              :filter="filter"
              :handleToggle="handleToggle"
              :handleRemove="handleRemove"></todo-item>
      </ul>
    </div>
</template>
<script>
  import TodoItem from './ToDoItem.vue';
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapMutations } = createNamespacedHelpers('TodoList');

    export default {
      name:'todo-list',
      components: { TodoItem },
      computed: {
        ...mapState(['btnList','todoList','filter']),
      },
      methods: {
        ...mapMutations([
          'handleAdd',
          'handleRemove',
          'handleToggle',
          'handleUpdateFilter'
        ]),
        add(e) {
//          let val = this.$refs.val.value.trim()
          const val = e.target.value.trim();
          if (val) {
            this.handleAdd({
              id: new Date().getTime(),
              message: val,
              status: false
            });
            e.target.value = ''
//            this.$refs.val.value = ''
          }
        },

      },
    }
</script>
<style scoped>
  h1{
    font-size: 30px;
  }
  .btn_list{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin: 30px auto;
    text-align: center;
  }
  .btn_list>li{
    margin-right: 20px;
  }
  .btn_list>li>button{
    width: 100px;
  }
  .eve_list{
    border: 1px solid black;
    width: 500px;
    height: 300px;
    margin: 30px auto;
  }
  .eve_list>li {
    width: 50%;
    margin: 10px auto;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .eve_list>li>button{
    margin-left: 15px;
  }

</style>

