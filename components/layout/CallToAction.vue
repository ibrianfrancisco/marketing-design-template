<template>
  <b-section>
    <b-container class="brf-container-lg">
      <b-row class="-ml-24 text-center lg:text-left">
        <b-col class="w-full pl-24 mb-12 lg:w-2/3 lg:mb-0">
          <h1 class="section-title mb-4">
            <slot name="header">See why our clients stay with us.</slot>
          </h1>
          <p class="font-bold leading-dense text-2xl">
            <slot name="lead">Start a risk-free trial today.</slot>
          </p>
        </b-col>
        <b-col
          class="w-full pl-24 lg:w-1/3 lg:flex lg:items-center lg:justify-end"
        >
          <b-button
            v-if="cta_href"
            :href="cta_href"
            :class="`brf-button-${btn_variant}`"
            class="brf-button brf-button-lg lg:w-auto"
            target="_blank"
          >
            <slot name="cta">Request a demo</slot>
          </b-button>
          <nuxt-link
            v-else
            :class="`brf-button-${btn_variant}`"
            class="brf-button brf-button-lg lg:w-auto"
            :to="cta_nuxtlink"
          >
            <slot name="cta">Request a demo</slot>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </b-section>
</template>

<script>
export default {
  name: 'CallToAction',
  props: {
    title: {
      type: String,
    },
    lead: {
      type: String,
    },
    btn_variant: {
      type: String,
    },
    cta: {
      type: String,
    },
    cta_href: {
      type: String,
    },
    cta_nuxtlink: {
      type: String,
    },
  },
};
</script>

<style>
.gradient2 {
  background: linear-gradient(90deg, hsl(42, 100%, 57%), hsl(42, 100%, 57%));
}
</style>
