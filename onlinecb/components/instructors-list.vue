<template>
  <div class="c-about-instructors mt-5">
    <div class="container">
      <h3 class="mb-5">About Instructors</h3>

      <div class="row no-gutters">
        <div class="col-12 col-md-6 mb-5" 
          v-for="instructor in instructors" :key="instructor.id">
          <div class="img-desc row no-gutters">
            <div class="col-3 pr-4">
              <img
                class="round"
                :src="instructor.photo"
                :alt="'photo of' + instructor.name"
                loading="lazy"
              />
            </div>
            <div class="description col-8">
              <div class="heading-d">
                <h4 class="bold">{{instructor.name}}</h4>
                <div class="red font-sm mb-3">
                  Mentor, Coding Blocks
                  <br />
                  <a :href="'mailto:' + instructor.email">{{instructor.email}}</a>
                </div>
                <MarkdownToHtml class="classroom-para" :markdown="instructor.description" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import MarkdownToHtml from './markdown-to-html.vue';

export default {
  props: ['instructors'],
  components: {
    MarkdownToHtml
  }
}
</script>
