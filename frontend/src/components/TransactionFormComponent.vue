<template>
  <div>
    <MessageComponent :msg="msg" v-show="msg" :isError="error"/>
    <div>
      <form id="transaction-form" @submit.prevent="createTransation">
        <div class="input-container">
          <label for="conta-origem">Conta de Origem</label>
          <input v-mask="'##########'" type="text" name="conta-origem" id="conta-origem" v-model="contaOrigem" placeholder="Digite a conta de origem">
        </div>
        <div class="input-container">
          <label for="conta-destino">Conta de Destino</label>
          <input v-mask="'##########'" type="text" name="conta-destino" id="conta-destino" v-model="contaDestino" placeholder="Digite a conta de destino">
        </div>
        <div class="input-container">
          <label for="valor-transferencia">Valor da transferência</label>
          <input  v-money="money" type="text" name="valor-transferencia" id="valor-transferencia" v-model.lazy="valorTransferencia" placeholder="Digite o valor">
        </div>
        <div class="my-calendar">
          <label for="calendario">Data de agendamento</label>
          <DatePicker name="calendario" v-model.string="date" mode="date" ></DatePicker>
        </div>
        <div class="input-container">
          <label for="valor-transferencia">Taxa</label>
          <input type="text" name="taxa" id="valor-transferencia" v-model="taxa" disabled>
        </div>
        <div class="input-container">
          <button id="btn-submit" class="btn-class">Agendar Transferencia </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import { DatePicker } from 'v-calendar'
import { mask } from 'vue-the-mask'
import { VMoney } from 'v-money3'
import MessageComponent from './MessageComponent.vue'

export default {
  name: 'TransactionFormComponent',
  components: {
    DatePicker,
    MessageComponent
  },
  directives: { mask, money: VMoney },
  data () {
    return {
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2
      },
      contaOrigem: '',
      contaDestino: '',
      valorTransferencia: '',
      date: new Date().toISOString(),
      taxa: '',
      msg: null,
      error: false
    }
  },
  methods: {
    async getTaxa (date, value) {
      const onlyValue = this.unformat(value)
      console.log(onlyValue)
      const getData = {
        tranferValue: parseFloat(onlyValue),
        appointmentDate: date.replace('Z', '')
      }
      try {
        const req = await fetch('http://localhost:8080/api/transaction/calculate?data=' + getData.appointmentDate + '&value=' + getData.tranferValue)
        if (!req.ok) {
          const res = await req.text()
          this.msg = res
          this.error = true

          setTimeout(() => {
            this.msg = ''
            this.error = false
          }, 3000)
        } else {
          const data = await req.json()
          console.log(data)
          this.taxa = data
        }
      } catch (error) {
        console.error(error)
      }
    },
    async createTransation () {
      const postData = {
        originAccount: this.contaOrigem,
        destinationAccount: this.contaDestino,
        tranferValue: this.valorTransferencia,
        appointmentDate: this.date,
        tranferDate: new Date().toISOString(),
        tax: this.taxa
      }
      console.log(postData)
      const dataJson = JSON.stringify(postData)

      console.log(dataJson)

      const req = await fetch('http://localhost:8080/api/transaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: dataJson
      })
      const res = await req.text()
      this.msg = res

      setTimeout(() => {
        this.msg = ''
      }, 3000)

      this.clean()
    },
    clean () {
      this.contaOrigem = ''
      this.contaDestino = ''
      this.valorTransferencia = ''
      this.taxa = ''
      this.date = new Date().toISOString()
      this.msg = ''
      this.error = false
    },
    unformat (value) {
      return value.replace('R$ ', '').replace('.', '').replace(',', '.')
    }
  },
  mounted () {

  },
  watch: {
    valorTransferencia (newValue, oldValue) {
      if (newValue !== 'R$ 0,00') {
        this.getTaxa(this.date, newValue)
      }
    },
    date (newValue, oldValue) {
      if (this.valorTransferencia !== 'R$ 0,00') {
        this.getTaxa(newValue, this.valorTransferencia)
      }
    }
  }
}
</script>

<script setup>

</script>

<style scoped>
#transaction-form {
  max-height: 40vh;
    margin: 0 auto;
    display: flex;
    width: 100%;
    flex-flow: wrap;
    justify-content: space-evenly;
    column-gap: 35vh;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
  margin-right: 2vh;
  width: 24.4vh;
}

.input-container input {
  width: 100%;
  border-radius: 5px;
  outline: none;
  border: 1px solid var(--featured-dark);
  color: var(--featured-dark)
}

.input-container input:disabled{
  cursor: no-drop;
  color: light-dark(rgb(84, 84, 84), rgb(170, 170, 170));
  border-color: rgba(118, 118, 118, 0.3);
}

.input-container input::placeholder{
  color: var(--featured-dark);
}

.my-calendar {
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
  margin-right: 2vh;
  width: 24.4vh;
}

label {
  font-weight: bold;
  margin-bottom: 1.5vh;
  color: var(--featured-dark);
}

.my-calendar :deep(.vc-container) {
  max-height: 25vh;
  border: 1px solid var(--featured-dark)
}

.my-calendar :deep(.vc-weekday, .vc-day){
  color: var(--featured-dark);
}

.my-calendar :deep(.vc-header .vc-title),
.my-calendar :deep(.vc-header .vc-arrow),
.my-calendar :deep(.vc-highlight-content-solid){
  background-color: var(--featured-dark);
  color: var(--featured);
}

.my-calendar :deep(.vc-header .vc-title):hover,
.my-calendar :deep(.vc-header .vc-arrow):hover,
.btn-class:hover{
  opacity: 0.75;
  transition: 0.5s;
}

.my-calendar :deep(.vc-focus:focus-within ){
  box-shadow: 0 0 0 2px var(--featured);
}

.btn-class {
  background-color: var(--featured-dark);
  color: var(--featured) !important;
  border-radius: 5px;
  margin-top: 3vh;
}
</style>
