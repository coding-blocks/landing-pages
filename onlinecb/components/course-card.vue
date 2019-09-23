<template>
  <div class="border-card p-0 course-card mb-5">
    <div class="px-4 pt-4 white position-relative head bg-gradient-pink">
      <div class="t-align-r mb-2">
        <span class="font-lg" 
          v-for="i in 3"
          :key="i"
          :class="i-1 < course.difficulty ?  'orange' : 'white'"
        > 
          &#10625;
        </span>
        <div class="course-card__difficulty card-sm"> {{ difficultyText }} </div>
      </div>
      <h5> {{ course.title }} </h5>
      
      <RatingStarsStatic class="py-1" :rating="course.rating" :base-star-class="'fa-xs'" :pos-star-class="'white'" >
        {{ course.rating }}
      </RatingStarsStatic>
      <div class="position-absolute all-center course-card__course-logo p-3 s-80x80 br-50">
        <img :src="course.logo" :alt="course.title" />
      </div>
    </div>
    <div class="pb-5 px-4 foot">
      <div class="d-flex justify-content-between align-items-center">
        <div class="v-align-ma">
          <span class="bold orange font-xl">&#8377; {{topRun.price}} </span>
          <span class="card-md dark-grey ml-2">&#8377; {{topRun.price}} </span>
        </div>
        <nuxt-link class="button-solid button-pink-orange font-sm" :to="`/courses/${course.slug}`">Explore</nuxt-link>
      </div>
    </div>
  </div>
</template>


<script>
import RatingStarsStatic from './rating-stars-static.vue';

import { topRunForCourse, textForDifficulty } from '../utils/course';

export default {
  props: ['course'],
  components: {
    RatingStarsStatic
  },
  computed: {
    visibleInstructors() {
      return this.course.instructors.slice(0, 2)
    },
    topRun () {
      return topRunForCourse(this.course)
    },
    difficultyText () {
      return textForDifficulty(this.course.difficulty)
    }
  }
}
</script>