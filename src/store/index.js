// 引入模块
import TodoList from './TodoList'
// vuex 依赖
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 一个实例化的'store'对象
export default new Vuex.Store({
  modules: {
    TodoList,
  }
})
