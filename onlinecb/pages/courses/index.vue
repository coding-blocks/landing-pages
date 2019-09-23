<template>
  <div class="container">
    <h2 class="t-align-c mt-5 mb-5">
      All Courses
    </h2>
    <div class="row justify-content-center">
      <div class="c-layout-card col-12 col-md-6 col-lg-4 pr-md-0">
        <CourseCard v-for="course in courses" :key="course.id" :course="course"> {{ course.title }} </CourseCard>
      </div>
    </div>
  </div>
</template>


<script>
import CourseCard from '../../components/course-card.vue';


export default {
  components: {
    CourseCard
  },
  async asyncData ({ $axios, app }) {
    const res = await $axios.get('/courses', {
      params: {
        exclude: `ratings,instructors.*`,
        include: `instructors,runs`,
        filter: {
          unlisted: false,
          domains: {
            $contains: ['hellointern']
          }
        },
        page: {
          limit: 100
        }
      }
    })
    const courses = app.$store.sync(res.data)
    return  { courses }
  },
  data () {
    return {
      courses: [] 
    }
  }
}
</script>