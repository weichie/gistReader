<template>
  <div>
    <ul class="gist-list" v-if="gists">
      <GistPreview v-for="(gist, i) in gists" :key="`gist-${i}`" :gist="gist" />
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

import Header from '~/components/Header.vue';
import GistPreview from '~/components/GistPreview.vue';

export default {
  name: 'Home',
  components: {
    Header,
    GistPreview,
  },
  computed: {
    gists() {
      return this.$store.state.gists;
    },
  },
}
</script>
