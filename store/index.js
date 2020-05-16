import {
  GET_GISTS,
} from '~/constants';

import axios from 'axios';

const gistAPI = process.env.gistAPI;

export const state = () => ({
  gists: [],
  username: 'weichie',
});

export const getters = {

};

export const actions = {
  async [GET_GISTS]({state, commit}) {
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
    } catch(err) {
      console.error(err);
    }
  },
};

export const mutations = {
  [GET_GISTS]: (state, payload) => {
    state.gists = payload;
  },
};
