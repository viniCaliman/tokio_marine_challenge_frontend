<template>
  <div class="message-container" :class="[ isError ? 'error' : '' ]">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'MessageComponent',
  props: {
    msg: String,
    isError: Boolean
  }
}
</script>

<style scoped>
.message-container {
  color: var(--featured-dark);
  background-color: var(--featured);
  border: 1px solid var(--featured-dark);
  border-radius: 5px;
  padding: 10px;
  margin: 30px auto;
}
.message-container p {
  margin-bottom: 0;
}
.error {
  background-color: var(--error);
  border-color: var(--error-border);
  color: var(--error-border);
}
</style>
