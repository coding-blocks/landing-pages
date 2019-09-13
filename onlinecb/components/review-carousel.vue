<template>
  <div>
    <div class="row c-card-carousel">
        
      <div class="col-8 col-md-4 col-lg-3" v-for="rating in ratingsArray" :key="rating.id">
        <div class="border-card round c-rating-card">
          <div class="row justify-content-between no-gutters">
            <div class="bold font-sm">{{ rating.user.firstname }} {{ rating.user.lastname }}</div>
            <!-- TODO: Make this human readable -->
            <div class="grey card-md">{{ rating.updatedAt }}</div>
          </div>

          <div class="heading text-ellipses">
            {{ rating.heading }}
          </div>

          <rating-stars-static :rating="rating.value" />

          <div class="review grey">
            {{ rating.review }}
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center align-items-center" v-if="meta.nextOffset">
      <button class="button-dashed" @click="fetchRatings.run()">Load More Reviews</button>
    </div>
  </div>
</template>

<script>
import RatingStarsStatic from './rating-stars-static.vue'
export default {
  props: ['courseId'],
  components: {
    RatingStarsStatic
  },
  async mounted () {
    this.fetchRatings.run()
  },
  data () {
    return {
      ratingsArray: [],
      meta: {}
    }
  },
  tasks(t) {
    return {
      fetchRatings: t(function * () {
        const response = yield this.$axios.get('ratings/course/' + this.courseId, {
          params: {
            page: {
              offset: this.meta ? this.meta.nextOffset : 0,
              limit: 10
            }
          }
        })

        const { data: ratings, meta} = this.$store.syncWithMeta(response.data)

        this.ratingsArray = [...this.ratingsArray, ...ratings]
        this.meta = response.data.meta.pagination
      })
    }
  }
}
</script>