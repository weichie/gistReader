<template>
  <li>
    <nuxt-link :to="`/snippets/${gist.id}`">
      <strong>{{ files(gist).filename }}</strong>
    </nuxt-link>

    <pre><code>{{ snippet }}</code></pre>
  </li>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GistPreview',
  props: {
    gist: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      snippet: null,
    }
  },
  mounted() {
    this.urlToHtml(this.gist.files[Object.keys(this.gist.files)[0]].raw_url);
  },
  methods: {
    files(gist) {
      return gist.files[Object.keys(gist.files)[0]];
    },
    async urlToHtml(url) {
      const res = await axios.get(url);
      this.snippet = res.data;
    },
  },
}
</script>
