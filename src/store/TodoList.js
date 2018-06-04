const state = {
  btnList: ['全部', '已完成', '未完成'],
  todoList: [],
  filter: '全部'
};
const mutations = {
  handleAdd(state, item) {
    state.todoList = [...state.todoList, item]
  },
  handleRemove(state, id) {
    state.todoList = state.todoList.filter(obj => obj.id !== id)
  },
  handleToggle(state, id) {
    state.todoList = state.todoList.map(
      obj => (obj.id === id ? { ...obj, status: !obj.status } : obj)
    )
  },
  handleUpdateFilter(state, filter) {
    state.filter = filter
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
