<template>
  <div>
    <ul>
      <li v-for="course in courses" :key="course.id"> {{ course.title }} </li>
    </ul>
  </div>
</template>


<script>
export default {
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