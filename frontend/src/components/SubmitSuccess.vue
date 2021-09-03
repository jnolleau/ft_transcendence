<template>
  <h1>SUCCESS</h1>
  <p>The new user <strong>{{ name }} {{ surname }}</strong> as been saved to database</p>
</template>

<script>
export default {
  name: 'SubmitSuccess',
  props: ['name', 'surname']
}
</script>

<style scoped>
</style>
