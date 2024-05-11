<template>
  <div class="main-container">
    <h1>Transações Agendadas</h1>
    <div id="transation-table">
      <div>
        <div id="table-header">
          <div class="transation-id">#:</div>
          <div>Conta Origem</div>
          <div>Conta de Destino</div>
          <div>Data de Agendamento</div>
          <div>Data da transferência</div>
          <div>Valor</div>
          <div>Taxa Aplicada</div>
        </div>
        <div id="table-rows">
          <div class="table-row" v-for="transaction of this.transactions" :key="transaction.id">
            <div class="transation-number"> {{ transaction.id }}</div>
            <div>{{ transaction.originAccount }}</div>
            <div>{{ transaction.destinationAccount }}</div>
            <div>{{ this.formatDate(transaction.appointmentDate) }}</div>
            <div>{{ this.formatDate(transaction.tranferDate) }}</div>
            <div>{{ transaction.tranferValue }}</div>
            <div>{{ transaction.tax }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transactions: []
    }
  },
  methods: {
    async getTransations () {
      try {
        const req = await fetch('http://localhost:8080/api/transactions')
        if (req.ok) {
          const data = await req.json()
          this.transactions = data
        }
      } catch (error) {
        console.error(error)
      }
    },
    formatDate (date) {
      console.log(date)
      return new Date(date).toLocaleDateString()
    }
  },
  mounted () {
    this.getTransations()
  }
}
</script>

<style scoped>
#transation-table {
  max-width: 80%;
  margin: 0 auto;
  border: 1px solid var(--featured-dark);
  border-radius: 5px;
}
#table-header,
#table-row,
.table-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly
}
#table-header {
  color: var(--featured-dark);
  font-weight: bold;
  padding: 10px;
  border-bottom: 3px solid var(--featured-dark);
}

#table-header div,
.table-row div {
  width: 15%
}
.table-row {
  color: var(--featured-dark);
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid var(--featured-dark);
}

#table-header .transation-id,
.table-row .transation-number {
  width: 5%;
}

</style>
