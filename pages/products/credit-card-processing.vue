<template>
  <main>
    <b-section
      class="brf-section-charcoal brf-section-lg brf-section-intro-lg lg:min-h-2/3"
    >
      <b-container class="brf-container-lg">
        <b-row class="xl:-ml-24">
          <b-col class="w-full xl:pl-24 xl:w-1/2">
            <div class="flex items-center mb-8">
              <div class="brf-circle bg-primary-base text-white">
                <font-awesome-icon
                  class="text-xl lg:text-2xl"
                  :icon="['fas', 'credit-card']"
                />
              </div>
              <h4 class="text-lg text-titleColor font-medium ml-4">
                Credit Card Processing
              </h4>
              <div
                class="hidden text-lg text-titleColor font-thin mx-4 lg:block"
              >
                |
              </div>
              <h4 class="hidden text-lg text-titleColor font-medium lg:block">
                Products
              </h4>
            </div>
            <h1 class="section-title mb-6">Lorem ipsum dolor, sit.</h1>
            <p class="header-body mb-8">
              Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
              Similique quibusdam eveniet recusandae distinctio facere unde,
              eius quidem dolorem reiciendis delectus eaque, doloribus id labore
              dolore.
            </p>
            <b-button
              prefetch
              is="nuxt-link"
              class="brf-button brf-button-primary brf-button-lg"
              to="/contact"
            >
              Request a demo
            </b-button>
          </b-col>
          <b-col class="w-full mt-16 xl:mt-0 xl:pl-24 xl:w-1/2">
            <img
              class="rounded-lg shadow-lg"
              src="https://picsum.photos/608/402?random=3"
              alt=""
            />
          </b-col>
        </b-row>
      </b-container>
    </b-section>
    <section class="brf-section-default">
      <b-row>
        <b-col
          class="w-full people-hugging bg-no-repeat bg-cover xl:w-1/2"
        ></b-col>
        <b-col class="w-full xl:mt-0 xl:w-1/2">
          <div class="py-20 px-4 xl:p-12 max-w-3xl m-auto xl:mr-auto xl:ml-0">
            <div
              class="brf-circle brf-circle-lg bg-primary-base text-white mb-8"
            >
              <font-awesome-icon
                class="text-xl lg:text-3xl"
                :icon="['fas', 'laptop']"
              />
            </div>
            <h1 class="section-title mb-8">Lorem ipsum, dolor</h1>
            <p class="header-body m-auto mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              sequi numquam doloremque ipsum explicabo suscipit corporis
              voluptatem unde hic quidem accusantium, ipsam maiores voluptates
              voluptatibus ex minima nulla, ullam itaque nihil. Esse officiis
              totam ex iure, explicabo, nam exercitationem neque.
            </p>
            <b-row class="-ml-8">
              <b-col class="flex pl-8 w-1/3">
                <b-card>
                  <h2
                    class="text-xl sm:text-2xl md:text-3xl text-primary-base font-bold"
                  >
                    30,000+
                  </h2>
                  <p class="text-base sm:text-xl md:text-2xl">Clients</p>
                </b-card>
              </b-col>
              <b-col class="flex pl-8 w-1/3">
                <b-card>
                  <h2
                    class="text-xl sm:text-2xl md:text-3xl text-primary-base font-bold"
                  >
                    $4.17M
                  </h2>
                  <p class="text-base sm:text-xl md:text-2xl">Raised</p>
                </b-card>
              </b-col>
              <b-col class="flex pl-8 w-1/3">
                <b-card>
                  <h2
                    class="text-xl sm:text-2xl md:text-3xl text-primary-base font-bold"
                  >
                    100%
                  </h2>
                  <p class="text-base sm:text-xl md:text-2xl">Success</p>
                </b-card>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </section>
    <b-section class="brf-section-charcoal">
      <b-container>
        <b-row>
          <b-col class="w-full">
            <h1 class="section-title text-center mb-12">
              Lorem ipsum dolor sit amet
            </h1>
            <b-row class="-ml-8">
              <b-col class="flex pl-8 w-full md:w-1/3">
                <b-card
                  class="brf-card brf-card-default shadow-lg rounded-lg text-center"
                  title="Security"
                >
                  <template #icon>
                    <div
                      class="brf-circle brf-circle-lg bg-primary-base text-white mb-6"
                    >
                      <font-awesome-icon
                        class="text-xl lg:text-3xl"
                        :icon="['fas', 'shield-alt']"
                      />
                    </div>
                  </template>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rem, corrupti.
                  </p>
                </b-card>
              </b-col>
              <b-col class="flex pl-8 mt-10 w-full md:w-1/3 md:mt-0">
                <b-card
                  class="brf-card brf-card-default shadow-lg rounded-lg text-center"
                  title="Ease Of Use"
                >
                  <template #icon>
                    <div
                      class="brf-circle brf-circle-lg bg-primary-base text-white mb-6"
                    >
                      <font-awesome-icon
                        class="text-xl lg:text-3xl"
                        :icon="['fas', 'trophy']"
                      />
                    </div>
                  </template>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rem, corrupti.
                  </p>
                </b-card>
              </b-col>
              <b-col class="flex pl-8 w-full mt-10 md:w-1/3 md:mt-0">
                <b-card
                  class="brf-card brf-card-default shadow-lg rounded-lg text-center"
                  title="Community"
                >
                  <template #icon>
                    <div
                      class="brf-circle brf-circle-lg bg-primary-base text-white mb-6"
                    >
                      <font-awesome-icon
                        class="text-xl lg:text-3xl"
                        :icon="['fas', 'handshake']"
                      />
                    </div>
                  </template>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rem, corrupti.
                  </p>
                </b-card>
              </b-col>
            </b-row>
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
import BCard from '~/components/ui/BaseCard';
import CallToAction from '~/components/layout/CallToAction';

export default {
  name: 'Credit-Card-Processing',
  head: {
    title: 'Credit Card Processing',
  },
  components: {
    BCard,
    CallToAction,
  },
};
</script>

<style>
.people-hugging {
  padding-top: 64.6%;
  background-image: url('https://picsum.photos/896/572');
}

@screen xl {
  .people-hugging {
    padding-top: 0;
  }
}
</style>
