<template>
  <div class="card-layout col-md-4 col-sm-6">
    <div class="border-card c-run-card">
      <h3>{{ run.description }}</h3>

      <div class="d-flex mb-4">
        <div class="font-sm">
          <div class="grey">Starts</div>
          <div class="text">{{ formatDate(run.start, "MMM DD YYYY") }}</div>
        </div>

        <div class="divider-v bg-grey"></div>

        <div class="font-sm">
          <div class="grey">Ends</div>
          <div class>{{ formatDate(run.end, "MMM DD YYYY") }}</div>
        </div>
      </div>

      <div class="row justify-content-between align-items-center">
        <div class="col-8 align-self-center">
          <div class="price">
            {{ formatPrice(run.price) }}
            <span class="grey card-md" v-if="run.mrp != run.price">
              <strike>{{ formatPrice(run.mrp) }}</strike>
            </span>
          </div>
          <div class="red">Enrollment ends {{ formatDate(run['enrollment-end'], 'MMM DD YYYY') }}</div>
        </div>
      </div>

      <div class="divider-h"></div>

      <div class="row justify-content-between align-items-center">
        <div class="col-7 align-self-center">
          You may also try our
          free lectures:
        </div>

        <button class="button-dashed" @click="login">Start Free Trial</button>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: ['run'],
  methods: {
    formatDate(unixSeconds, format) {
      return dayjs.unix(unixSeconds).format(format)
    },
    formatPrice(input) {
      let price = parseInt(input)
      return isNaN(price) || price == 0 ? 'Free' : `₹ ${price}`
    },
    login () {
      this.$session.authenticate()
    }
  }
}
</script>