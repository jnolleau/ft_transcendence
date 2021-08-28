<template>
  <div class="post-list">
    <h2>posts</h2>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"/>
    </div>
  </div>

</template>

<script>
  import { onMounted, onUnmounted, onUpdated } from 'vue'
  import SinglePost from '@/components/SinglePost.vue'

  export default {
    name: 'PostList',
    components: { SinglePost },
    props: ['posts'],
    setup(props) {
      onMounted(() => {
        console.log('component mounted')
      })
      onUnmounted(() => {
        console.log('component unmounted')
      })
      onUpdated(() => {
        console.log('component updated')
      })
    }
  }
</script>
<style>
</style>