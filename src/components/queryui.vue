<template>
  <section id="sqltools">
      
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'sqltools',
  data: function () {
    return {
      textarea: 'SELECT * FROM myindex',
      activeName: 1
    }
  },
  computed: {
    ...mapGetters([
      'dslBody',
      'sqlBody',
      'currentError',
      'serverhost'
    ])
  },
  created: function () {
  },
  mounted () {
  },
  methods: {
    sqlExplain () {
      var tmpVal = {url: '/_sql2dsl', sql: this.textarea, host: this.serverhost}
      this.$store.dispatch('ConvertSQLToDSL', tmpVal)
      document.getElementById('dslBody').style.display = 'block'
    }
  }
}
</script>

<style>
</style>

