import { createStore } from 'vuex';
import { State, StateGetter } from '@/shared/types/store';

const state = {
  selectedCity: '',
  btnSities: {
    Москва: 'Заказать в Москву',
    'Санкт-Петербург': 'Заказать в Санкт-Петербург',
  },
  cities: [
    {
      id: 1,
      name: 'Москва',
    },
    {
      id: 2,
      name: 'Санкт-Петербург',
    },
    {
      id: 3,
      name: 'Казань',
    },
  ],
  htmlBlock: null,
};

const mutations = {
  SET_ITEM(state: any, payload: any) {
    state[payload.key] = payload.value;
  },
};

const getters: Record<string, StateGetter> = {
  getCurrentSelect(state) {
    return state.selectedCity;
  },

  getBtnCities(state) {
    return state.btnSities;
  },

  getCities(state) {
    return state.cities;
  },

  getResponse(state) {
    return state.htmlBlock;
  },

  getIdByName: state => (city: string) => {
    let result = null;

    state.cities.forEach(element => {
      if (element.name === city) result = element.id;
    });

    return result;
  },
};

export default createStore<State>({
  state,
  mutations,
  getters,
});
