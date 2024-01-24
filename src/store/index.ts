import { createStore } from 'vuex'

const state = {
  selectedCity: '',
  btnSities: {
    'Москва': 'Заказать в Москву',
    'Санкт-Петербург': 'Заказать в Санкт-Петербург'
  },
  cities: [{
    id: 1,
    name: "Москва"
  },
  {
    id: 2,
    name: "Санкт-Петербург"
  },
  {
    id: 3,
    name: "Казань"
  }]
}

const mutations = {
  SET_SELECTED(state: any, payload: any) {
    state.selectedCity = payload;
  }
}

const actions = {
  setSelected(context: any, index: any) {
    context.commit('SET_SELECTED', index)
  }
}

const getters = {
  getCurrentSelect(state: any) {
    return state.selectedCity;
  },

  getBtnCities(state: any) {
    return state.btnSities;
  },

  getCities(state: any) {
    return state.cities;
  }
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})
