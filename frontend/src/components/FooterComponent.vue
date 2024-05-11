<template>
  <div id="footer">
    <p> Sistemas de transações &copy; 2024 -Todos os direitos Reservados</p>
  </div>

</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
#footer {
  height: 10vh;
  background-color: var(--featured-dark);
  border-top: 0.4vh solid var(--featured);
  color: var(--featured);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}
#footer p {
  margin-bottom: 0;
}
</style>
