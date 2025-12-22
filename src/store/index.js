import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList } from "@/api";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      // news: response.data
      state.news = news;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          console.log(response.data);
          context.commit("SET_NEWS", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
});
