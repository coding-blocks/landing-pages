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


        <button class="button-solid col-4" v-if="isFree" @click="startTrial"> Access Now </button>
        <button class="button-solid col-4" v-else @click="enrollTask.run()" :disabled="enrollTask.isActive"> Enroll Now </button>
      </div>

      <div class="divider-h"></div>

      <div class="row justify-content-between align-items-center">
        <div class="col-7 align-self-center">
          You may also try our
          free lectures:
        </div>

        <button 
          class="button-dashed"
          :class="{ disabled: enrollTask.isActive }" 
          v-if="$session.isAuthenticated"
          @click="startTrial"
          :disabled="enrollTask.isActive"
        > 
          Start Free Trial
        </button>
        <button class="button-dashed" @click="login" v-else >Start Free Trial</button>
      </div>
    </div>


    <CartDialog class="display-none" :course="course"  :run="run" :cart="cart" ref="cartDialog" />

  </div>
</template>

<script>
import dayjs from 'dayjs'
import CartDialog from './cart-dialog';

export default {
  props: ['run', 'course'],
  components: {
    CartDialog
  },
  computed: {
    isFree () {
      return this.run['is-free']
    }
  },
  data () {
    return {
      cart: {}
    }
  },
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
    },
    startTrial () {
      window.location.href = `/app/classroom/course/${this.course.id}/run/${this.run.id}/`
    },
    async addToCartTask (clear = false) {
      if (clear)
        await this.$axios.get(`/runs/clear_cart`)
      
      await this.$axios.get(`/runs/${this.run.id}/buy`)
      window.location.href = process.env.dukaanUrl 
    }
  },
  tasks(t) {
    return {
      enrollTask: t(async function () {
        const runId = this.run.id
      
        if (!this.$session.isAuthenticated) {
          // force login
          return this.$session.authenticate()
        }

        try {
          await this.addToCartTask()
        } catch (err) {
          let errorCode;
          if (err.status == 400 && err.payload.err == 'TRIAL_WITHOUT_MOBILE') {
            errorCode = 'NO_USER_MOBILE_NUMBER'
            this.$swal.fire({
              type: 'error',
              title: 'Mobile number not verified!',
              text: 'Please verify your mobile number <a href="https://account.codingblocks.com/users/me"> here </a>.' 
            })

          } else {
            const cart = await this.$axios.request(`/runs/cart`).then(resp => resp.data)
            // if the product in cart is the same as product user wants to buy; just continue
            if (cart.cartItems[0].product_id == this.run['product-id']) {
              return window.location.href = process.env.dukaanUrl
            } else {
              this.cart = cart.cartItems[0]
              // show swal
              this.$nextTick(async () => {
                const response = await this.$swal.fire({
                  type: 'warning',
                  title: 'You already have some product in your cart',
                  html: this.$refs.cartDialog.$el.innerHTML,
                  showCancelButton: true,
                  confirmButtonText: 'Enroll',
                  confirmButtonClass: 'button-solid ml-4',
                  cancelButtonClass: 'button-dashed',
                  cancelButtonText: 'Checkout With Existing',
                  reverseButtons: true,
                  buttonsStyling: false,
                  customClass: {
                    popup: 'w-50'
                  }
                })

                if (response.value) {
                  // enroll into this course
                  await this.addToCartTask(true)
                } else if (response.dismiss == 'cancel') {
                  window.location.href = process.env.dukaanUrl
                }
              })
              
            }
          }
        }
      })
    }
  }
}
</script>