<template>
  <div class="page">
    <Searchbar />

    <div class="content-wrapper container lg">
      <Sidebar />

      <div class="the-content">
        <Header />
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { GET_GISTS } from '~/constants';

import Searchbar from '~/components/Searchbar.vue';
import Header from '~/components/Header.vue';
import Sidebar from '~/components/Sidebar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Searchbar,
    Header,
    Sidebar,
  },
  created() {
    this.$store.dispatch(GET_GISTS);
  },
}
</script>
