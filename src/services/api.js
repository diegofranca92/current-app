import axios from "axios";

const api = axios.create({
  baseUrl: "https://economia.awesomeapi.com.br/json/all"
})

export default {
  api
  // all() {
  //   return api.get('all')
  // }
}