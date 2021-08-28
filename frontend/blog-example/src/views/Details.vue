<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post">
    <h2>Post: {{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <div v-for="tag in post.tags" :key="tag" class="tag">
      #{{ tag }}
    </div>  
  </div>
</template>

<script>
  import getPost from '@/composables/getPost'

  export default {
   name: 'Details',
   props: ['id'],
   setup(props) {
    const { post, error, load } = getPost(props.id)

    load()

    return { post, error }
  }
}
</script>
<style>
</style>