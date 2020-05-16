<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import { GET_GISTS } from '~/constants';

export default {
  name: 'DefaultLayout',
  created() {
    this.$store.dispatch(GET_GISTS);
  },
}
</script>
