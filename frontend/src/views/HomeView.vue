<template>
  <div class="main-container">
    <h1>Seja bem vindo(a) ao sistema de transações</h1>
    <h2>Agende sua transferência abaixo:</h2>
    <TransactionFormComponent/>
  </div>
</template>

<script>
import TransactionFormComponent from '../components/TransactionFormComponent.vue'

export default {
  components: {
    TransactionFormComponent
  }

}
</script>
