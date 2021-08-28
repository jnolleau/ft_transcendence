<template>
  <p> Reaction time: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  name: 'Results',
  props: ['score'],
  data() {
    return {
      rank: null,
    }
  },
  mounted() {
    if (this.score <= 250)
      this.rank = 'Your the best!'
    else if (this.score < 400)
      this.rank = 'Your doing good!'
    else
      this.rank = 'I like snails :)'
  }
}
</script>

<style>
  .rank {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
  }
</style>