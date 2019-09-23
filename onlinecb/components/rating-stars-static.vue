<template>
  <div class="rating">
    <span 
      :class="i < rating ? `pos-rating ${posStarClass}`: 'neg-rating'"
      v-for="i in 5" 
      :key="i"
    >
      <i class="fas fa-star" :class="baseStarClass" ></i>
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['rating', 'baseStarClass', 'posStarClass']
}
</script>