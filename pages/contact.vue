<template>
  <main>
    <b-section
      class="theme-dark brf-section-secondary brf-section-lg brf-section-intro-lg"
    >
      <b-container>
        <b-row class="mb-12">
          <b-col class="w-full text-center">
            <h1 class="text-5xl mb-4">Contact us</h1>
            <h3 class="text-xl">
              Get in touch and let us know how we can help.
            </h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="w-full">
            <b-row class="-ml-8">
              <b-col class="flex pl-8 w-full md:w-1/3">
                <b-card
                  class="brf-card brf-card-default shadow-lg rounded-lg text-center"
                  title="Sales"
                >
                  <template #icon>
                    <div
                      class="brf-circle brf-circle-lg brf-circle-orange mb-6"
                    >
                      <font-awesome-icon
                        class="text-xl lg:text-2xl"
                        :icon="['fas', 'user-friends']"
                      />
                    </div>
                  </template>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </b-card>
              </b-col>
              <b-col class="flex pl-8 mt-10 w-full md:w-1/3 md:mt-0">
                <b-card
                  class="brf-card brf-card-default shadow-lg rounded-lg text-center"
                  title="Help & Support"
                >
                  <template #icon>
                    <div
                      class="brf-circle brf-circle-lg brf-circle-orange mb-6"
                    >
                      <font-awesome-icon
                        class="text-xl lg:text-2xl"
                        :icon="['fas', 'question']"
                      />
                    </div>
                  </template>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </b-card>
              </b-col>
              <b-col class="flex pl-8 w-full mt-10 md:w-1/3 md:mt-0">
                <b-card
                  class="brf-card brf-card-default shadow-lg rounded-lg text-center"
                  title="Zendesk"
                >
                  <template #icon>
                    <div
                      class="brf-circle brf-circle-lg brf-circle-orange mb-6"
                    >
                      <font-awesome-icon
                        class="text-xl lg:text-2xl"
                        :icon="['fas', 'tasks']"
                      />
                    </div>
                  </template>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </b-section>
  </main>
</template>

<script>
import BCard from '~/components/ui/BaseCard';

export default {
  name: 'Contact-Us',
  layout: 'dark',
  head: {
    title: 'Contact Us',
  },
  components: {
    BCard,
  },
};
</script>

<style></style>
