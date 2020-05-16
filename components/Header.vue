<template>
  <header>
    <h1>{{userInfo.login}}'s Gists.</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    userInfo() {
      return this.$store.state.owner;
    },
  },
}
</script>
