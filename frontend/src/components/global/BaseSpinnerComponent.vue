<template>
  <div class="base-spinner fa-3x" v-if="visible">
    <i class="fas fa-circle-notch fa-spin"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss" scoped>

.base-spinner{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-medium);
  color: var(--featured);
  z-index: 100;
}

</style>
