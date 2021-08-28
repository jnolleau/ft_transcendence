<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id }}">
    <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <div v-for="tag in post.tags" :key="tag" class="tag">
      #{{ tag }}
    </div>    
  </div>

</template>

<script>
  import { computed } from 'vue'
  export default {
    name: 'SinglePost',
    props: ['post'],
    setup(props) {
      const snippet = computed(() => {
        return props.post.body.substring(0, 100) + '...'
      })

      return { snippet }
    }
  }
</script>
<style>
.tag {
  display: inline-block;
  border-radius: 10px;
  background: #ddd;
  padding: 6px;
  margin: 5px 10px;
}
</style>