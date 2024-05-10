<template>
    <NavbarComponent :logo="logo_src" :alt="app_name"/>
    <router-view/>
  <FooterComponent/>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    NavbarComponent,
    FooterComponent
  },
  data () {
    return {
      logo_src: '/img/casa-featured.png',
      app_name: 'Agende suas transações'
    }
  }

}
</script>

<style lang="scss">
.main-container {
  margin: 50px;
  min-height: 60vh;
}
h1 {
  text-align: center;
  font-size: 4.2vh;
  margin-bottom: 1vh;
  color: var(--featured-dark) !important;
}

</style>
