<template>
  <div>
    <div class="container mt-5">
      <div class="c-summary row mb-5">
        <div class="col-12 col-md-7 pr-md-5">
          <div class="img-desc no-gutters mb-3">
            <div class="col-3 col-sm-2 pr-4">
              <img
                class="round"
                :src="course.logo"
                alt
              />
            </div>
            <div class="description col-9 col-sm-7 pl-3">
              <div>
                <h2 class="mb-2"> {{ course.title }} </h2>
                <div class="grey font-mds mb-2">
                  {{ course.subtitle }}
                </div>
                <div class="font-mds bold mb-3" v-if="course.instructors">
                  Taught By:
                  <span class="grey">
                    <span v-for="instructor in course.instructors" :key="instructor.id">
                      {{ instructor.name }} 
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <div class="d-flex badge" v-if="!course.organization">
              <h3 class="white col-10 col-sm-8">
                Get Certified & Win Goodies.
                <br />
                <span class="red">with this course</span>
              </h3>
              <img src="/images/stamp.png" alt="Coding Blocks Pvt Ltd" />
            </div>

            <h3 class="mt-5" v-if="course.language">
              Language
            </h3>
            <div class="font-mds grey" v-if="course.language">
              All course contents will be in 
              <span class="black">
                {{course.language}}
              </span>
            </div>

            <h3 class="mb-3 mt-5">Summary</h3>

            <div class="para summary grey">
              {{ course.summary }}
            </div>

            <p class="mt-5">Major Topics Covered</p>

            <div v-if="topRun && topRun.tags">
              <span class="pill m-1" v-for="tag in topRun.tags" :key="tag.id">
                {{ tag.name }}
              </span>
            </div>

          </div>

          <!-- Rating Widget -->
          <h3 class="mb-4">Student Feedback</h3> 
          <div class="row c-rating-stats no-gutters">
            <div class="col-4 score">
              <span class="font-lg bold">{{ course.rating }}
                <br class="d-sm-none">
              </span><span class="bold font-md">out of 5</span>
              

              <rating-stars-static :rating="course.rating" />

              <div class="font-md extra-bold">
                {{ course['review-count'] }} Ratings
              </div>
            </div>
            <div class="col-8 stats">
             
              <div class="row" v-for="index in 5" :key="index">
                <div class="col-12 col-sm-7">
                  <progress :value="stats[5-index]" :max="course['review-count']"></progress>
                </div>
                <div class="col-5 rating">
                  <span class="pos-rating" v-for="i in 6-index" :key="i">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
              </div>
              
            </div>
          </div>  
          <!--   End Rating Widget         -->

        </div>

        <div class="col-12 col-md-5 pr-md-0">
          <div class="c-buy-right">
            <div class="border-card">
              <div class="card-video">
                <iframe
                  class="video"
                  :src="course['promo-video']"
                  controls
                  allowfullscreen
                ></iframe>
              </div>
              <div class="button-container row justify-content-center">
                <button class="button-solid col-5">BUY NOW TO ENROLL</button>
                <button class="button-dashed col-5">ENROLL VIA OTP</button>
              </div>

              <div class="course-features" v-if="course.coursefeatures">
                <div class="row justify-content-center">
                  <div class="col-6 d-flex align-items-center mb-5" v-for="feature in course.coursefeatures" :key="feature.id">
                    <div class="col-5 pl-0">
                      <img
                        :src="feature.icon"
                        alt
                      />
                    </div>
                    <div class="col-7 align-self-center font-sm pr-0">{{ feature.text }}</div>
                  </div>
                </div>
              </div>

              <div class="footer" v-if="!course.organization">
                <img class="floating-img" src="/images/free.png" alt="free" />
                <div class="row red">
                  <div class="col-8">
                    Get a
                    <span class="white">Wildcraft Backpack</span> and
                    lots of goodies with this course!
                  </div>
                  <div class="col-4">
                    <img src="/images/wildcraft.png" alt="wildcraft" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="border-card mt-4" v-if="course.faq">
            <h3>Frequently Asked Questions</h3>
            <hr>
            <div>
              {{course.faq}} 
            </div>
          </div>

        </div>
      </div>

      <ReviewCarousel :course-id="course.id" />

      <div class="row justify-content-center" v-if="topRun">
        <div class="col-12 col-md-9" :class="{ 'col-md-9': course.projects }">
          <h3 class="mb-5">What will you learn?</h3>
          <!-- Accordion -->
          <div class="border-card accordion-card mb-5">
            <div class="c-accordion c-about-accordion">
              <div class="list-divided border-none">
               
                <SectionAccordion 
                  :section-id="section.id" 
                  v-for="section in topRun.sections" 
                  :key="section.id" 
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Projects -->
        <ProjectList :project-ids="projectIds" />
      </div>
    </div>

    <!-- Instructors -->
    <InstructorsList :instructors="course.instructors" />

    <Testimonials video-link="https://www.youtube.com/embed/h_YmJLN9IgY" />

    <RunsView :runs="course['active-runs']" />

  </div>
</template>


<script>
import RatingStarsStatic from '../../components/rating-stars-static.vue';
import ReviewCarousel from '../../components/review-carousel.vue';
import ProjectList from '../../components/project-list.vue';
import SectionAccordion from '../../components/section-accordion/index.vue';
import InstructorsList from '../../components/instructors-list.vue';
import Testimonials from '../../components/testimonials.vue';
import RunsView from '../../components/runs-view/index.vue';

export default {
  async asyncData ({ params, $axios, app }) {
    const res = await $axios.get(`/courses/${params.id}`)
    const course = app.$store.sync(res.data)
    return  {
      course: app.$store.find("courses", course.id)
    }
  },
  components: {
    RatingStarsStatic,
    ReviewCarousel,
    ProjectList,
    SectionAccordion,
    InstructorsList,
    Testimonials,
    RunsView
  },
  created () {
    this.getRatingStats.run()
  },
  computed: {
    projectIds: function () {
      return this.course.projects.map(x => x.id)
    },
    topRun: function () {
      let runs = this.course['active-runs']
      if (!runs || !runs.length)
        runs = this.course.runs

      const now = +new Date() / 1000.0

      const currentRuns = runs.filter((run, index) => {
        return run['enrollment-start'] < now && run['enrollment-end'] > now && !run.unlisted
      })

      const byPrice = l => l.price

      return currentRuns.sort(byPrice)[0] || runs.sort(byPrice)[0]
    }
  },
  data() {
    return {
      course: {
        instructors: [{ id: 2 }]
      },
      stats: [],
      session: {
        isAuthenticated: false 
      }
    }
  },
  methods: {
    logIn() {}
  },
  tasks(t) {
    return {
      getRatingStats: t(function * () {
        const response = yield this.$axios.get(`/courses/${this.course.id}/rating`)
        this.stats = response.data.stats
      })
    }
  }
}
</script>