<template>
  <button @click="task.run" :disabled="task.running">
    <slot v-show="!task.running"></slot>
    <span v-show="task.runnning"> {{ runningText }} </span>
  </button>
</template>


<script>
export default {
  props: ['task', 'runningText'],
}

</script>