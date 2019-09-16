<template>
  <div class="col-12 col-md-3">
    <h3 class="mb-5">Projects</h3>
    <div class="row">
      <div class="col-12 mb-4" v-for="(project, index)  in projects" :key="project.id">
        <div class="img-card">
          <div class="head">
            <img class="back-img" :src="project.image"  loading="lazy"/>
            <div class="content white">
              <h4>Project {{ index + 1 }}</h4>
            </div>
          </div>
          <div class="foot">
            <h4>{{project.title}}</h4>
            <div class="card-md">
              {{project.description}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['projectIds'],
  mounted() {
    this.fetchProjects.run()
  },
  data () {
    return {
      projects: []
    }
  },
  tasks(t) {
    return {
      fetchProjects: t(function * () {
        const response = yield this.$axios.get('projects', {
          params: {
            filter: {
              id: {
                $in: this.projectIds
              }
            }
          }
        })
        this.projects = this.$store.sync(response.data)
      })
    }
  }
}
</script>