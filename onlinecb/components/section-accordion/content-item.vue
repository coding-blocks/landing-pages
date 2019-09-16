<template>
  <div>
    <div class="li-left col-10 col-sm-8">
      <div class="col-1 content-icon" :class="content.iconClass + '-red'"></div>
      <div class="col-11 col-sm-8">{{ content.title }}</div>
    </div>
    <div class="li-right no-gutters col-2 col-sm-4">
      <div class="t-align-c" v-if="premium">
        <i class="fas fa-lock"></i>
      </div>

      <div class="grey">{{duration}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content', 'premium'],
  computed: {
    duration () {
      const secs = Math.floor(this.content.duration/1000)
      const mins = Math.floor(secs/60)
      return `${mins}:${secs%60}`
    }
  }
}
</script>