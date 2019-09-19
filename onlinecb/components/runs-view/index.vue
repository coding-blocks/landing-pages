<template>
  
<div class="bg-light-grey pb-5 pt-5 mb-5" id="runs" style="background-color: #f6f6f6 !important">
  <div class="container">
    <h3 class="t-align-c my-3">
      Choose Batches
    </h3>
  
    <div class="row justify-content-center m-0">
      <RunCard v-for="run in runs" :key="run.id"
        :run="run"
        :course="course"

       />

      <span v-if="!runs.length">
        No available runs right now ! Please check back later or drop a line at admissions.codingblocks.com.
      </span>
    </div>
  </div>
</div>
</template>

<script>
import RunCard from './run-card.vue';

export default {
  props: ['runs', 'course'],
  components: {
    RunCard
  }
}
</script>