<template>
  <main>
    <b-section class="theme-dark brf-section-secondary brf-section-intro-lg">
      <b-container class="brf-container-lg">
        <b-row class="xl:-ml-24">
          <b-col class="w-full xl:pl-24 xl:w-1/2">
            <div class="w-full">
              <!-- TODO: Fix font size in tablet horizontal view -->
              <h1
                class="header-intro-title leading-tight text-center mb-6 lg:text-left"
              >
                Lorem ipsum dolor sit amet illum
              </h1>
              <p class="header-body text-center mb-8 lg:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing, elit.
                Adipisci quam similique assumenda explicabo consectetur quia
                soluta sint odio, odit ad blanditiis.
              </p>
              <div class="text-center lg:text-left">
                <b-button
                  prefetch
                  is="nuxt-link"
                  class="brf-button brf-button-primary brf-button-lg"
                  to="/contact"
                >
                  Request a demo
                </b-button>
              </div>
            </div>
          </b-col>
          <b-col class="w-full mt-16 xl:mt-0 xl:pl-24 xl:w-1/2">
            <img
              class="rounded-lg shadow-lg m-auto lg:m-0"
              src="https://picsum.photos/608/402?random=24"
              alt=""
            />
          </b-col>
        </b-row>
      </b-container>
    </b-section>
    <b-section
      class="brf-section-secondary curve-above-rounded curve-charcoal"
    ></b-section>
    <b-section class="brf-section-charcoal curve-below-rounded program">
      <b-container class="brf-container-lg">
        <b-row class="mb-32">
          <b-col class="w-full max-w-3xl m-auto">
            <h1 class="section-title-copy m-auto text-center mb-8">
              Our mission is to bring support, guidance and solutions to
              business owners
            </h1>
            <p class="header-body m-auto text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              cumque dolor nostrum facere illum. Dolore perferendis, amet alias
              quae consectetur cumque quidem similique, provident vitae ipsum,
              eius doloremque vero quia.
            </p>
          </b-col>
        </b-row>
        <b-row class="-ml-12 mb-20">
          <b-col class="flex pl-12 w-full md:w-1/2 xl:w-1/3">
            <b-card
              class="brf-card brf-card-default img-left-fixed shadow-md rounded-lg"
              title="Credit Card Processing"
            >
              <template #icon>
                <div
                  class="program-icon w-16 h-16 block mb-6 brf-circle brf-circle-lg bg-primary-base text-white"
                >
                  <font-awesome-icon
                    class="text-xl lg:text-3xl"
                    :icon="['fas', 'credit-card']"
                  />
                </div>
              </template>
              <p class="text-center xl:text-left md:text-base">
                Lorem ipsum dolor sit, amet consectetur, adipisicing elit.
                Doloremque perspiciatis illo sunt voluptatum laborum.
              </p>
            </b-card>
          </b-col>
          <b-col class="flex pl-12 w-full mt-24 md:mt-0 md:w-1/2 xl:w-1/3">
            <b-card
              class="brf-card brf-card-default img-left-fixed shadow-md rounded-lg"
              title="Community"
            >
              <template #icon>
                <div
                  class="program-icon w-16 h-16 block mb-6 brf-circle brf-circle-lg bg-primary-base text-white"
                >
                  <font-awesome-icon
                    class="text-xl lg:text-3xl"
                    :icon="['fas', 'users']"
                  />
                </div>
              </template>
              <p class="text-center xl:text-left md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                impedit dolor assumenda animi voluptate.
              </p>
            </b-card>
          </b-col>
          <b-col class="flex pl-12 w-full mt-24 md:w-1/2 xl:mt-0 xl:w-1/3">
            <b-card
              class="brf-card brf-card-default img-left-fixed shadow-md rounded-lg"
              title="Security Software"
            >
              <template #icon>
                <div
                  class="program-icon w-16 h-16 block mb-6 brf-circle brf-circle-lg bg-primary-base text-white"
                >
                  <font-awesome-icon
                    class="text-xl lg:text-3xl"
                    :icon="['fas', 'shield-alt']"
                  />
                </div>
              </template>
              <p class="text-center xl:text-left md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                mollitia quod tempore, consequatur.
              </p>
            </b-card>
          </b-col>
          <b-col class="flex pl-12 w-full mt-24 md:w-1/2 xl:w-1/3">
            <b-card
              class="brf-card brf-card-default img-left-fixed shadow-md rounded-lg"
              title="Ease Of Use"
            >
              <template #icon>
                <div
                  class="program-icon w-16 h-16 block mb-6 brf-circle brf-circle-lg bg-primary-base text-white"
                >
                  <font-awesome-icon
                    class="text-xl lg:text-3xl"
                    :icon="['fas', 'trophy']"
                  />
                </div>
              </template>
              <p class="text-center xl:text-left md:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus asperiores ducimus nemo vero nobis
              </p>
            </b-card>
          </b-col>
          <b-col class="flex pl-12 w-full mt-24 md:w-1/2 xl:w-1/3">
            <b-card
              class="brf-card brf-card-default img-left-fixed shadow-md rounded-lg"
              title="Customer Service"
            >
              <template #icon>
                <div
                  class="program-icon w-16 h-16 block mb-6 brf-circle brf-circle-lg bg-primary-base text-white"
                >
                  <font-awesome-icon
                    class="text-xl lg:text-3xl"
                    :icon="['fas', 'hands-helping']"
                  />
                </div>
              </template>
              <p class="text-center xl:text-left md:text-base">
                Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Totam
                asperiores iure officiis. Sequi, libero.
              </p>
            </b-card>
          </b-col>
          <b-col class="flex pl-12 w-full mt-24 md:w-1/2 xl:w-1/3">
            <b-card
              class="brf-card brf-card-default img-left-fixed shadow-md rounded-lg"
              title="Solutions"
            >
              <template #icon>
                <div
                  class="program-icon w-16 h-16 block mb-6 brf-circle brf-circle-lg bg-primary-base text-white"
                >
                  <font-awesome-icon
                    class="text-xl lg:text-3xl"
                    :icon="['fas', 'chart-bar']"
                  />
                </div>
              </template>
              <p class="text-center xl:text-left md:text-base">
                Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Totam
                asperiores iure officiis. Sequi, libero.
              </p>
            </b-card>
          </b-col>
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
import CallToAction from '~/components/layout/CallToAction';
import BCard from '~/components/ui/BaseCard';

export default {
  name: 'Foundation-Page',
  layout: 'dark',
  head: {
    title: '9-99 Foundation',
  },
  components: {
    CallToAction,
    BCard,
  },
  data() {
    return {
      accordionData: [
        {
          id: 1,
          active: false,
          title: 'Public Awareness',
          details:
            'Working to improve public knowledge of the experiences that officers go through and change the idea that heroes can’t ask for help.',
        },
        {
          id: 2,
          active: false,
          title: 'Emergency Relief Support',
          details:
            'Providing immediate financial assistance following a critical or career-ending injury to be used as needed for the officer and their family.',
        },
        {
          id: 3,
          active: false,
          title: 'K-9 Unit Stipend',
          details:
            'Contributing financially to K-9 units for the purposes of building a K-9 program, conducting training or purchasing needed safety devices.',
        },
        {
          id: 4,
          active: false,
          title: 'General Scholarship',
          details:
            'Awarding additional scholarships annually to officers who have protected and served their communities, but are no longer able to.',
        },
        {
          id: 5,
          active: false,
          title: 'Mental Health Experts',
          details:
            'The foundation seeks to work with mental health organizations, psychiatrists, and counselors to create a network of providers who can offer help for PTSD pro-bono.',
        },
      ],
    };
  },
};
</script>

<style>
.program-icon {
  position: absolute;
  left: 32px;
  top: -32px;
}
.program .brf-card blockquote {
  padding-top: 3rem;
}

.program .img-left-fixed .content,
.program .img-left .content {
  padding-left: 0;
}
@media only screen and (max-width: 1139px) {
  .program .content .title {
    @apply text-center;
  }
  .program-icon {
    left: calc(50% - 32px);
  }
}

@media only screen and (max-width: 767px) {
  .program .brf-card blockquote {
    padding-bottom: 3rem;
  }
}
</style>
