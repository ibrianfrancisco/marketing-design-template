<template>
  <main>
    <b-section class="brf-section-charcoal brf-section-lg brf-section-intro-lg">
      <b-container class="max-w-4xl m-auto">
        <h1 class="section-title-copy text-center mb-5">Meet the team</h1>
        <b-row>
          <b-card class="brf-card-sm text-center w-1/2 md:w-1/4">
            <img
              class="w-40 m-auto rounded-full"
              src="https://picsum.photos/200/200?random=1"
              alt=""
            />
            <p class="team-member">Ron Swanson</p>
            <p class="text-sm">Director</p>
          </b-card>

          <b-card class="brf-card-sm text-center w-1/2 md:w-1/4">
            <img
              class="w-40 m-auto rounded-full"
              src="https://picsum.photos/200/200?random=2"
              alt=""
            />
            <p class="team-member">Leslie Knope</p>
            <p class="text-sm">Deputy Director</p>
          </b-card>

          <b-card class="brf-card-sm text-center w-1/2 md:w-1/4">
            <img
              class="w-40 m-auto rounded-full"
              src="https://picsum.photos/200/200?random=3"
              alt=""
            />
            <p class="team-member">Tom Haverford</p>
            <p class="text-sm">Administrator</p>
          </b-card>

          <b-card class="brf-card-sm text-center w-1/2 md:w-1/4">
            <img
              class="w-40 m-auto rounded-full"
              src="https://picsum.photos/200/200?random=8"
              alt=""
            />
            <p class="team-member">Donna Meagle</p>
            <p class="text-sm">Office Manager</p>
          </b-card>
          <b-card class="brf-card-sm text-center w-1/2 md:w-1/4">
            <img
              class="w-40 m-auto rounded-full"
              src="https://picsum.photos/200/200?random=4"
              alt=""
            />
            <p class="team-member">Andy Dwyer</p>
            <p class="text-sm">Shoe Shiner</p>
          </b-card>

          <b-card class="brf-card-sm text-center w-1/2 md:w-1/4">
            <img
              class="w-40 m-auto rounded-full"
              src="https://picsum.photos/200/200?random=6"
              alt=""
            />
            <p class="team-member">April Ludgate</p>
            <p class="text-sm">Intern</p>
          </b-card>
          <b-card class="brf-card-sm text-center w-1/2 md:w-1/4">
            <img
              class="w-40 m-auto rounded-full"
              src="https://picsum.photos/200/200?random=5"
              alt=""
            />
            <p class="team-member">Ann Perkins</p>
            <p class="text-sm">Nurse</p>
          </b-card>
          <b-card class="brf-card-sm text-center w-1/2 md:w-1/4">
            <img
              class="w-40 m-auto rounded-full"
              src="https://picsum.photos/200/200?random=7"
              alt=""
            />
            <p class="team-member">Jerry Gergich</p>
          </b-card>
        </b-row>
      </b-container>
    </b-section>
    <call-to-action
      btn_variant="default"
      cta_nuxtlink="/contact"
      class="theme-dark brf-section-primary"
    >
      <template v-slot:header>
        <span class="text-primary-900">Ready to get started?</span>
      </template>
      <template v-slot:lead> Start your free trial today. </template>
    </call-to-action>
  </main>
</template>

<script>
import BCard from '~/components/ui/BaseCard';
import CallToAction from '~/components/layout/CallToAction';

export default {
  name: 'Team',
  head: {
    title: 'Team',
  },
  components: {
    BCard,
    CallToAction,
  },
};
</script>

<style>
.team-member {
  @apply text-titleColor font-semibold mt-4 mb-0;
}
</style>
