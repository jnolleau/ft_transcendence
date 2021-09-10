<template>
  <h1>Best Tennis Players</h1>
  <div v-if="users.length">
    <div v-for="user in users" :key="user.id" class="user">
      <h2>{{ user.name }} {{ user.surname }}</h2>
    </div>
  </div>
  <div v-else>
    <p>Loading some data...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { User } from "@/types/User";
import { DefaultApi } from "@/../sdk/typescript-axios-client-generated";

export default defineComponent({
  name: "Users",
  setup() {
    const users = ref<User[]>([]);
    const config = {
      basePath: 'http://localhost:3000',
    };
    const api = new DefaultApi(config);

    onMounted(() => {
      api.usersControllerGetUsers()
        .then(res => (users.value = res.data))
        .catch(err => console.log(err.message));
    });
  
    // onMounted(() => {
    //   fetch("http://localhost:3000/users")
    //     .then((res) => res.json())
    //     .then((data) => (users.value = data))
    //     .catch((err) => console.log(err.message));
    // });

    return { users };
  },
});

// import { defineComponent } from "vue";
// import { User } from "@/types/User";

// export default defineComponent({
//   name: "Users",
//   components: {},
//   data() {
//     return {
//       users: [] as User[]
//     }
//   },
//   mounted() {
//     fetch("http://localhost:3000/users")
//       .then((res) => res.json())
//       .then((data) => (this.users = data))
//       .catch((err) => console.log(err.message));
//   },
// });
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
