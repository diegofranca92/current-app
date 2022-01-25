<template>
  <main class="container grid-lg my-2 py-2">
    <div class="card">
      <div class="card-header">
        <h4 class="h4">Todas as moedas</h4>
      </div>
      <div class="card-body">
        <list-quotes :quotes="quotes" />
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue"
// import api from "./services/api"
import ListQuotes from "./components/ListQuotes"
import axios from "axios";


export default {
  name: 'App',
  components: {
    ListQuotes
  },

  setup() {

    const data = reactive({
      quotes: {}
    })

    onMounted( async () => {
      const response = await axios.get('https://economia.awesomeapi.com.br/json/all')
      data.quotes = response.data
    })

    return {...toRefs(data)}    
  }
}
</script>

<style>
</style>
