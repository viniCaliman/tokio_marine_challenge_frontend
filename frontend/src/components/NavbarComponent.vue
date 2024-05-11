<template>
  <div id="nav">
    <RouterLink to="/" id="logo_url">
      <img :src="logo" :alt="alt" id="logo">
    </RouterLink>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/transacoes">Transações</RouterLink>

  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  props: ['logo', 'alt']
}
</script>

<style scoped>
#nav {
  background-color: var(--featured-dark);
  border-bottom: 0.5vh solid var(--featured);
  padding: 1vh 5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#nav #logo_url {
  margin: auto;
  margin-left: 0
}
#logo {
  width: 4vh;
  height: 4vh;
}
#nav a {
  color: var(--featured);
  text-decoration: none;
  margin: 1.2vh;
  transition: 0.5s;
}

#nav a:hover {
  color: var(--light);
}

</style>
