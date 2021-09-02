<template>
  <h1>SUCCESS</h1>
  <p>The new job <strong>{{ title }}</strong> as been saved to database</p>
  <p><strong>With details:</strong> <br /> {{ details }}</p>
</template>

<script>
export default {
  name: 'SubmitSuccess',
  props: ['title', 'details']
}
</script>

<style scoped>

</style>
