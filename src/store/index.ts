import { createStore } from 'vuex'

const state = {
  selected: 0
}

const mutations = {
  SET_SELECTED (state: any, payload: any) {
    state.selected = payload
  }
}

const actions = {
  setSelected (context: any, index: any) {
    context.commit('SET_SELECTED', index)
  }
}

const getters = {
  getSelected(state: any) {
    return state.selected
  }
}

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export default store