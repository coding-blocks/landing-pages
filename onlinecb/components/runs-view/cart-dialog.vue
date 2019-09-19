<template>
  <div class="container p-4">
    <div class="row t-align-ca">
      <div class="justify-content-center">
        <h2>Replace Cart Items?</h2>
        <p class="grey">
          Your cart contains other items. Do you want to discard previous items from your cart and continue buying new
          one?
        </p>
      </div>
    </div>
    <div class="row align-items-center mb-3">
      <div class="col-5">
        <div class="heading-u my-2">Existing Cart</div>
        <div class="row justify-content-center align-items-center no-gutters">
          <div class="col-lg-4 col-md-12">
            <div class="round">
              <img :src="cart.image_url" alt />
            </div>
          </div>
          <div class="col-lg-8 col-md-12">
            <p>{{ cart.productName }}</p>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="row justify-content-center align-items-center no-gutters">
          <img src="/images/swap.svg" alt="swap-icon" />
        </div>
      </div>
      <div class="col-5">
        <div class="heading-u my-2">New Cart</div>
        <div class="row justify-content-center align-items-center no-gutters">
          <div class="col-lg-4 col-md-12">
            <div class="round">
              <img :src="course.logo" alt />
            </div>
          </div>
          <div class="col-lg-8 col-md-12">
            <p>{{run.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import TaskButton from '../task-button.vue';

export default {
  props: ['run', 'cart', 'course']
}
</script>