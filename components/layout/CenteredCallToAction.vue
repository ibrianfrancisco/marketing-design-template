<template>
  <b-section class="brf-section-warning">
    <b-container>
      <b-col class="w-full text-center">
        <h3
          class="text-lg text-gray-1000 uppercase tracking-wider leading-normal mb-4"
        >
          Engage Your Community
        </h3>
        <h2 class="text-2xl text-gray-1000 font-semibold leading-tight mb-8">
          Book a demo with a member of our sales team
        </h2>
        <b-button
          prefetch
          is="nuxt-link"
          class="brf-button brf-button-lg brf-button-primary"
          to="/contact"
        >
          Request a demo
        </b-button>
      </b-col>
    </b-container>
  </b-section>
</template>

<script>
export default {
  name: 'CenteredCallToAction',
};
</script>
