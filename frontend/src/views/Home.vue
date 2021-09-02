<template>
  <div v-if="users.length">
    <h1>Best Tennis Players</h1>
    <div v-for="user in users" :key="user.id" class="user">
        <h2>{{ user.name }} {{ user.surname }}</h2>
    </div>
  </div>
  <div v-else>
    <p>loading some data...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
  },
  data() {
    return {
      users: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => this.users = data)
      .catch(err => console.log(err.message))
  }
});
</script>

<style>
  .user h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .user h2:hover {
    background: #ddd;
  }
  .user a {
    text-decoration: none;
  }
</style>
