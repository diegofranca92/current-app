<template>
  <table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Máximo</th>
        <th>Mínimo</th>
        <th>Variação</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(quote, key) in quotes" :key="key">
        <td>{{key}}</td>
        <td>{{quote.name}}</td>
        <td>{{quote.high}}</td>
        <td>{{quote.low}}</td>
        <td>
          <span 
          class="label label-rounded text-small"
          :class="{ 'label-error': quote.pctChange < 0, 'label-success': quote.pctChange > 0}"
          >
            {{quote.pctChange}} %
          </span>
        </td>
        <td>
          <a 
            href="#"
            class="btn btn-primary btn-sm tootip tootip-left"
            data-tootip="Seguir"
          >
            <i class="icon icon-plus"></i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    quotes: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>