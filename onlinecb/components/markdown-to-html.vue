<template>
  <div v-html="html">
  </div>
</template>


<script>
import snarkdown from 'snarkdown';

export default {
  props: ['markdown'],
  computed: {
    html () {
      return snarkdown(this.markdown)
    }
  }
}
</script>