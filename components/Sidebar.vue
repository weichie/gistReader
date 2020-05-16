<template>
  <div class="sidebar">
    <img v-if="userInfo.avatar_url"
         :src="userInfo.avatar_url"
         :alt="`${userInfo.login} avatar`" 
         class="user-avatar"
    />

    <div class="user-title">
      <h4>{{userInfo.name}}</h4>
      <small>Living in {{userInfo.location}}.</small>
      <a :href="userInfo.blog" target="_blank" rel="noopener noreferrer">
        View website
      </a> &middot;
      <a :href="userInfo.html_url" target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
    
    <p v-html="userInfo.bio"></p>
    
    <ul class="repo-list">
      <li>Public Repos: <span>{{userInfo.public_repos}}</span></li>
      <li>Public Gists: <span>{{userInfo.public_gists}}</span></li>
      <li>Followers: <span>{{userInfo.followers}}</span></li>
      <li>Following: <span>{{userInfo.following}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    userInfo() {
      return this.$store.state.owner;
    },
  },
}
</script>
