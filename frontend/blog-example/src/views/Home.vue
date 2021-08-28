<template>
  <h1>MY PROJECT</h1>
  <p ref="p">Hello !</p>
  <button @click="handleP">Change the hello</button>
  <hr>
  <h2>Refs</h2>
  <p>{{ ninjaOne.name }} - {{ ninjaOne.age }} years</p>
  <button @click="updateNinjaOne">update Ninja One</button>
  <hr>
  <h2>Reactive</h2>
  <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} years</p>
  <button @click="updateNinjaTwo">update Ninja Two</button>
  <hr>
  <h2>Computed</h2>
  <input type="text" v-model="search">
  <p>searched term: {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">
    {{ name }}
  </div>
  <button @click="handleClick">Stop watching</button>
  <hr>
  <p v-if="error" class="error">{{ error }}</p>
  <div v-if="posts.length">
    <PostList v-if="showPosts" :posts="posts" />
  </div>
  <div v-else class="loading">Loading...</div>
  <button @click="showPosts = !showPosts">Toggle Post</button>
  <button @click="posts.pop()">remove a Post</button>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue'
import { ref, reactive, computed, watch, watchEffect } from 'vue'
import getPosts from '@/composables/getPosts'

export default {
  name: 'Home',
  components: {
    PostList
  },
  setup() {
    
    //refs and reactive
    const p = ref(null)
    const ninjaOne = ref({ name: 'mario', age: 33 })
    const ninjaTwo = reactive({ name: 'luigi', age: 35 })

    const handleP = () => {
      p.value.classList.add('test')
      p.value.textContent = 'Is it you, Julien ?'
    }
    const updateNinjaOne = () => {
      ninjaOne.value.age = 42
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age = 45
    }

    //Computed
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koop', 'peach']) 

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const stopWatch = watch(search, () => {
      console.log('watch ...')
    })

    const stopEffect = watchEffect(() => {  //runs initially while watch doesn't
      console.log(' watchEffect ...', search.value)
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    //Props
    const { posts, error, load } = getPosts()

    load()
    

    const showPosts = ref(true)

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, p, handleP, search, matchingNames, handleClick, posts, showPosts, error } // or { name: name, age: age }
  }
}
</script>
<style>
  hr {
    width: 500px;
    margin-top: 30px;
  }
  .test {
    color: crimson;
    font-weight: bold;
  }
  .error, .loading {
    color: crimson;
    font-weight: bold;
    font-size: 2em;
  }
</style>