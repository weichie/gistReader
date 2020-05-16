import {
  GET_GISTS,
  GET_USER,
} from '~/constants';

import axios from 'axios';

const gistAPI = process.env.gistAPI;

export const state = () => ({
  username: 'weichie', // Yame-
  gists: [],
  owner: [],
});

export const getters = {

};

export const actions = {
  async [GET_GISTS]({state, commit, dispatch}) {
    if(state.gists.length) return;

    try {
      const response = await axios.get(`${gistAPI}${state.username}/gists`);
      const data = response.data;

      const gists = data
        .map(({ id, html_url, files, created_at, updated_at, owner }) => ({
          id,
          html_url,
          files,
          created_at,
          updated_at,
          owner,
        }));
      
      commit(GET_GISTS, gists);
      dispatch(GET_USER, gists[0].owner.login);
    } catch(err) {
      console.error(err);
    }
  },
  async [GET_USER]({commit}, payload) {
    try {
      const response = await axios.get(`https://api.github.com/users/${payload}`);
      const data =response.data;
      commit(GET_USER, data);
    } catch(err) {
      console.error(err);
    }
  },
};

export const mutations = {
  [GET_GISTS]: (state, payload) => {
    state.gists = payload;
  },
  [GET_USER]: (state, payload) => {
    state.owner = payload;
  },
};
