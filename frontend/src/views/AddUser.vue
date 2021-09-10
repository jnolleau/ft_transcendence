<template>
  <div v-if="!responseData">
    <h1>ADD USER</h1>
    <form @submit.prevent="handleSubmit">
      <label>Name</label>
      <input type="text" v-model="name" />
      <label>Surname</label>
      <input type="text" v-model="surname" />
      <div>
        <button>Save User</button>
      </div>
    </form>
  </div>
  <div v-else>
    <SubmitSuccess :name="name" :surname="surname"/>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { axios } from "axios";
import { SubmitSuccess } from "@/components/SubmitSuccess.vue";

export default defineComponent({
  data() {
    return {
      name: '',
      surname: '',
      responseData: null,
    };
  },
  components: {
    SubmitSuccess
  },
  methods: {
    async handleSubmit() {
      await axios
        .post("http://localhost:3000/users", {
          name: this.name,
          surname: this.surname,
        })
        .then((response) => (this.responseData = response.data))
        .catch((error) => {});
      console.log("responseData: ", this.responseData);
    },
  }
});
</script>
<style scoped>
form {
  max-width: 420px;
  margin: 15px auto;
  background: white;
  text-align: left;
  padding: 15px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 0 0 10px 0;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  margin-bottom: 40px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
