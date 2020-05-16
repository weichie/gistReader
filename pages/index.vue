<template>
  <div class="container">
    <h1>Gist Reader</h1>

    <ul class="gist-list" v-if="gists">
      <li v-for="(gist, i) in gists" :key="`gist-${i}`">
        <!-- <pre>{{gist.files[Object.keys(gist.files)[0]]}}</pre> -->
        <strong>{{ gist.files[Object.keys(gist.files)[0]].filename }}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  computed: {
    gists() {
      return this.$store.state.gists;
    },
  },
}
</script>
