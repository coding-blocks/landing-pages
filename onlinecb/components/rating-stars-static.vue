<template>
  <div class="rating">
    <span 
      :class="i < rating ? 'pos-rating' : 'neg-rating'"
      v-for="i in 5" 
      :key="i"
    >
      <i class="fas fa-star"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: ['rating']
}
</script>