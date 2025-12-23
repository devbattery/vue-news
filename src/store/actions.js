import {
  fetchAskList,
  fetchItem,
  fetchJobsList,
  fetchNewsList,
  fetchUserInfo,
} from "@/api";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        console.log(response.data);
        context.commit("SET_NEWS", response.data);
        return response;
      })
      .catch((error) => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => commit("SET_JOBS", data))
      .catch((error) => console.log(error));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => commit("SET_ASK", data))
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, username) {
    fetchUserInfo(username)
      .then(({ data }) => commit("SET_USER", data))
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    fetchItem(id)
      .then(({ data }) => commit("SET_ITEM", data))
      .catch((error) => console.log(error));
  },
};
