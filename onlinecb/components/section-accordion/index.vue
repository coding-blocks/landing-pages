<template>
  <div class="list-divided border-radius-none border-none" @click="collapsed = !collapsed">
    <div class="row no-gutters pointer">
      <div class="li-left col-12 col-sm-8">
        <div class="col-1">{{ collapsed ? '+' : '-' }}</div>
        <div class="col-10">{{ section.name }}</div>
      </div>
      <div class="li-right col-4 dsp-none-xs">
        <div class="col-6">{{ section.contents.length }} Items</div>
        <div class="col-6">{{duration}}</div>
      </div>
    </div>
    <div class="pb-4 pt-4" v-show="!collapsed" @click.stop>
      <ContentItem
        class="row no-gutters pointer"
        :class="section.premium ? 'red': 'grey'"
        v-for="content in section.contents"
        :key="content.id"
        :content="content"
        :premium="section.premium"
      />
      
    </div>
  </div>
</template>


<script>
import ContentItem from './content-item.vue';

export default {
  props: ['sectionId'],
  components: {
    ContentItem
  },
  computed: {
    duration() {
      const secs = Math.floor(this.section.contents.reduce((acc, val) => acc += val.duration, 0) / 1000)
      const mins = Math.floor(secs/60)
      const hrs = Math.floor(mins/60)
      return `${hrs}:${mins % 60}:${secs % 60}`
    }
  },
  data() {
    return {
      section: {
        id: this.sectionId,
        contents: []
      },
      collapsed: true
    }
  },
  created() {
    this.fetchSection.run()
  },
  tasks(t) {
    return {
      fetchSection: t(function*() {
        const response = yield this.$axios.get(
          `sections/${this.sectionId}/?include=contents&exclude=contents.*&sort=content.section_content.order&public=true`
        )
        const section = this.$store.sync(response.data)
        this.section = section
      })
    }
  }
}
</script>