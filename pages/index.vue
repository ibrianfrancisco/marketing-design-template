<template>
  <main>
    <b-section
      class="brf-section-default brf-section-lg brf-section-intro-lg gradient"
    >
      <div class="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 495">
          <path
            id="curve2"
            d="M0,48.379999999999995S291.69,211.11,565,211.11C945,211.11,1099,0.5,1487,0.5,1779.39,0.5,1920,107,1920,107V352H0V48.38Z"
            transform="translate(0, 145)"
          ></path>
          <path
            id="curve1"
            d="M0,19.80000000000001S278,204,552,204C1070,204,1064,0.410000000000025,1478.38 0.410000000000025,1780,0.410000000000025,1920,124,1920,124V285H1V19.8Z"
            transform="translate(0, 215)"
          ></path>
          <path
            id="curve0"
            d="M0,199V33S190,153.92,499.5,153.92C990.58,153.92,1065,0,1427.25,0,1712.37,0,1887,61.28,1920,79.14V196Z"
            transform="translate(0, 305)"
          ></path>
        </svg>
      </div>
      <b-container class="brf-container-lg relative z-10">
        <b-row class="items-center lg:-ml-8">
          <b-col class="mb-16 w-full lg:mb-0 lg:w-1/2 lg:pl-8">
            <div class="w-full lg:max-w-3xl ml-auto mr-auto">
              <!-- TODO: Fix font size in tablet horizontal view -->
              <h1 id="typed-text" class="text-center mb-6 lg:text-left">
                Connect with your
                <br />
                <span class="txt-type">
                  <span class="txt">{{ txt }}</span>
                  <span class="blinker"></span>
                </span>
              </h1>
              <p
                class="header-body text-center max-w-lg m-auto mb-8 lg:ml-0 lg:text-left"
              >
                <span class="text-charcoal-700">
                  Your fundraising, member organization, and community outreach
                  experts.
                </span>
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
          <b-col class="w-full lg:w-1/2 lg:pl-8">
            <connection class="m-auto" />
          </b-col>
        </b-row>
      </b-container>
    </b-section>
    <b-section class="brf-section-default" style="padding-top: 16px">
      <b-container class="brf-container-lg">
        <h1 class="section-title-copy text-center mb-20">
          Lorem ipsum, dolor sit amet, consectetur adipisicing.
        </h1>
        <!-- start of grid -->
        <div class="flex flex-wrap -ml-8">
          <b-col class="w-full pl-8 lg:w-1/3 md:w-1/2">
            <b-card class="brf-card-sm brf-card-default">
              <devices />
            </b-card>
          </b-col>
          <b-col class="w-full pl-8 mt-8 lg:w-1/3 md:w-1/2 sm:mt-0">
            <b-card
              title="Process your credit"
              style="
                background: hsl(210deg 100% 97%);
                background: none !important;
              "
              class="group brf-card-sm brf-card-default rounded-lg transition duration-300 border-2 border-transparent"
            >
              <template #icon>
                <div
                  class="w-16 h-16 block mb-4 brf-circle bg-primary-base text-white"
                >
                  <font-awesome-icon
                    class="text-xl lg:text-2xl"
                    :icon="['fas', 'credit-card']"
                  />
                </div>
              </template>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eos cum expedita accusamus nam voluptate reprehenderit
                esse.
              </p>
            </b-card>
          </b-col>
          <b-col class="w-full pl-8 mt-8 lg:w-1/3 md:w-1/2 lg:mt-0">
            <b-card
              title="Grow your community"
              style="
                background: hsl(0deg 100% 97%);
                background: none !important;
              "
              class="group brf-card-sm brf-card-default rounded-lg transition duration-300 border-2 border-transparent"
            >
              <template #icon>
                <div
                  class="w-16 h-16 block mb-4 brf-circle bg-primary-base text-white"
                >
                  <font-awesome-icon
                    class="text-xl lg:text-2xl"
                    :icon="['fas', 'users']"
                  />
                </div>
              </template>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eos cum expedita accusamus nam voluptate reprehenderit
                esse.
              </p>
            </b-card>
          </b-col>
          <b-col class="w-full pl-8 mt-8 lg:w-1/3 md:w-1/2">
            <b-card
              title="Get your word out"
              style="
                background: hsl(135deg 90% 97%);
                background: none !important;
              "
              class="group brf-card-sm brf-card-default rounded-lg transition duration-300 border-2 border-transparent"
            >
              <template #icon>
                <div
                  class="w-16 h-16 block mb-4 brf-circle bg-primary-base text-white"
                >
                  <font-awesome-icon
                    class="text-xl lg:text-2xl"
                    :icon="['fas', 'bullhorn']"
                  />
                </div>
              </template>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eos cum expedita accusamus nam voluptate reprehenderit
                esse.
              </p>
            </b-card>
          </b-col>
          <b-col class="w-full pl-8 mt-8 lg:w-1/3 md:w-1/2">
            <b-card
              title="Find solutions"
              style="
                background: hsl(135deg 90% 97%);
                background: none !important;
              "
              class="group brf-card-sm brf-card-default rounded-lg transition duration-300 border-2 border-transparent"
            >
              <template #icon>
                <div
                  class="w-16 h-16 block mb-4 brf-circle bg-primary-base text-white"
                >
                  <font-awesome-icon
                    class="text-xl lg:text-2xl"
                    :icon="['fas', 'chart-bar']"
                  />
                </div>
              </template>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eos cum expedita accusamus nam voluptate reprehenderit
                esse.
              </p>
            </b-card>
          </b-col>
          <b-col class="w-full pl-8 mt-8 lg:w-1/3 md:w-1/2">
            <b-card
              title="Organize for success"
              style="
                background: hsl(40deg 100% 97%);
                background: none !important;
              "
              class="group brf-card-sm brf-card-default rounded-lg transition duration-300 border-2 border-transparent"
            >
              <template #icon>
                <div
                  class="w-16 h-16 block mb-4 brf-circle bg-primary-base text-white"
                >
                  <font-awesome-icon
                    class="text-xl lg:text-2xl"
                    :icon="['fas', 'trophy']"
                  />
                </div>
              </template>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eos cum expedita accusamus nam voluptate reprehenderit
                esse.
              </p>
            </b-card>
          </b-col>
        </div>
        <!--           </b-col>
        </b-row> -->
      </b-container>
    </b-section>
    <!-- TODO: Add counter animation? -->
    <b-section class="theme-dark brf-section-secondary brf-section-lg">
      <b-container class="brf-container-lg">
        <!-- TODO: try lazy loading some components -->
        <b-row class="mb-20 lg:-ml-8">
          <b-col
            class="w-full max-w-2xl m-auto lg:max-w-full lg:text-left lg:pl-8 lg:w-7/12"
          >
            <h1 class="section-title mb-6">Lorem ipsum dolor, sit amet</h1>
            <div class="relative">
              <h3 class="text-lg leading-loose mb-6 lg:text-xl xl:text-2xl">
                “Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                facere sed magni minus delectus aperiam cumque, iure fuga cum
                sapiente ad quas voluptatum voluptatibus.”
              </h3>
              <div
                class="gray-out flex justify-start items-center lg:justify-start"
              >
                <img
                  class="rounded-full w-16"
                  src="https://picsum.photos/200?random=100"
                  alt=""
                />
                <div class="ml-4">
                  <p class="text-left text-sm font-semibold mb-0">
                    Leslie Knope, Director
                  </p>
                  <p class="text-left text-sm">Parks and Recreation</p>
                </div>
              </div>
            </div>
          </b-col>
          <b-col class="w-full mt-12 lg:mt-0 lg:pl-8 lg:w-5/12">
            <winners />
          </b-col>
        </b-row>
        <b-row class="-ml-6 lg:-ml-8">
          <b-col class="flex w-1/2 md:w-1/4 pl-6 lg:pl-8">
            <b-card
              class="w-full brf-card-sm brf-card-primary-light rounded-lg text-center"
            >
              <h2 class="stat-number">550+</h2>
              <p
                class="text-sm text-titleColor md:text-base font-semibold lg:text-xl"
              >
                Clients
              </p>
            </b-card>
          </b-col>
          <b-col class="flex w-1/2 md:mt-0 md:w-1/4 pl-6 lg:pl-8">
            <b-card
              class="w-full brf-card-sm brf-card-primary-light rounded-lg text-center"
            >
              <h2 class="stat-number">42</h2>
              <p
                class="text-sm text-titleColor md:text-base font-semibold lg:text-xl"
              >
                Awards
              </p>
            </b-card>
          </b-col>
          <b-col class="flex mt-6 w-1/2 md:mt-0 md:w-1/4 pl-6 lg:pl-8">
            <b-card
              class="w-full brf-card-sm brf-card-primary-light rounded-lg text-center"
            >
              <h2 class="stat-number">$4.17M</h2>
              <p
                class="text-sm text-titleColor md:text-base font-semibold lg:text-xl"
              >
                Raised
              </p>
            </b-card>
          </b-col>
          <b-col class="flex mt-6 w-1/2 md:mt-0 md:w-1/4 pl-6 lg:pl-8">
            <b-card
              class="w-full brf-card-sm brf-card-primary-light rounded-lg text-center"
            >
              <h2 class="stat-number">100%</h2>
              <p
                class="text-sm text-titleColor md:text-base font-semibold lg:text-xl"
              >
                Success
              </p>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-section>
    <b-section
      class="brf-section-secondary curve-above-rounded curve-default"
    ></b-section>
    <b-section
      class="brf-section-default brf-section-lg curve-below-rounded relative"
    >
      <b-container class="brf-container-lg">
        <b-row class="max-w-2xl m-auto mb-24">
          <b-col class="w-full text-center m-auto">
            <h1 class="section-title text-center mb-8">Products</h1>
            <p class="header-body">
              Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
              Similique quibusdam eveniet recusandae distinctio facere unde,
              eius quidem dolorem reiciendis delectus eaque, doloribus id labore
              dolore.
            </p>
          </b-col>
        </b-row>
        <b-container>
          <b-row class="mb-20 lg:-ml-20">
            <b-col class="w-full lg:pl-20 lg:w-1/2">
              <sync />
            </b-col>
            <b-col class="w-full mt-16 lg:mt-0 lg:pl-20 lg:w-1/2">
              <nuxt-link
                class="hover-card"
                title="Customer Service"
                to="/products/customer-service"
              >
                <b-card
                  class="group brf-card brf-card-default rounded-lg transition duration-300 border-2 border-transparent hover:border-charcoal-100"
                >
                  <h4 class="text-lg font-medium text-primary-base mb-6">
                    Customer Service
                  </h4>
                  <h1 class="section-title-copy mb-4">
                    Lorem, ipsum, dolor sit amet consectetur adipisicing
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
                    Similique quibusdam eveniet recusandae distinctio facere
                    unde, eius quidem dolorem reiciendis delectus eaque,
                    doloribus id labore dolore.
                  </p>
                  <b-button
                    tabindex="-1"
                    class="text-primary-base font-semibold brf-arrow brf-arrow-right-blue focus:outline-none group-hover:text-titleColor"
                    >Learn more</b-button
                  >
                </b-card>
              </nuxt-link>
            </b-col>
          </b-row>
          <b-row class="mb-20 lg:-ml-20">
            <b-col class="w-full mt-16 lg:mt-0 lg:pl-20 lg:w-1/2">
              <nuxt-link
                class="hover-card"
                title="Credit Card Processing"
                to="/products/credit-card-processing"
              >
                <b-card
                  class="group brf-card brf-card-default rounded-lg transition duration-300 border-2 border-transparent hover:border-charcoal-100"
                >
                  <h4 class="text-lg font-medium text-primary-base mb-6">
                    Credit Card Processing
                  </h4>
                  <h1 class="section-title-copy mb-4">
                    Lorem, ipsum, dolor sit amet consectetur adipisicing
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
                    Similique quibusdam eveniet recusandae distinctio facere
                    unde, eius quidem dolorem reiciendis delectus eaque,
                    doloribus id labore dolore.
                  </p>
                  <b-button
                    tabindex="-1"
                    class="text-primary-base font-semibold brf-arrow brf-arrow-right-blue focus:outline-none group-hover:text-titleColor"
                    >Learn more</b-button
                  >
                </b-card>
              </nuxt-link>
            </b-col>
            <b-col class="w-full order-first lg:order-last lg:pl-20 lg:w-1/2">
              <rain />
            </b-col>
          </b-row>
          <b-row class="lg:-ml-20">
            <b-col class="w-full lg:pl-20 lg:w-1/2">
              <help />
            </b-col>
            <b-col class="w-full mt-16 lg:mt-0 lg:pl-20 lg:w-1/2">
              <nuxt-link
                class="hover-card"
                title="Security Software"
                to="/products/security-software"
              >
                <b-card
                  class="group brf-card brf-card-default rounded-lg transition duration-300 border-2 border-transparent hover:border-charcoal-100"
                >
                  <h4 class="text-lg font-medium text-primary-base mb-6">
                    Security Software
                  </h4>
                  <h1 class="section-title-copy mb-4">
                    Lorem, ipsum, dolor sit amet consectetur adipisicing
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
                    Similique quibusdam eveniet recusandae distinctio facere
                    unde, eius quidem dolorem reiciendis delectus eaque,
                    doloribus id labore dolore.
                  </p>
                  <b-button
                    tabindex="-1"
                    class="text-primary-base font-semibold brf-arrow brf-arrow-right-blue focus:outline-none group-hover:text-titleColor"
                    >Learn more</b-button
                  >
                </b-card>
              </nuxt-link>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </b-section>
    <call-to-action
      class="theme-dark brf-section-primary"
      btn_variant="default"
      cta_nuxtlink="/contact"
    >
      <template v-slot:header>
        <span class="text-primary-900">Ready to get started?</span>
      </template>
      <template v-slot:lead> Start a risk-free trial today. </template>
    </call-to-action>
  </main>
</template>
<script>
import BCard from '~/components/ui/BaseCard';
import CallToAction from '~/components/layout/CallToAction';
import Connection from '~/assets/images/svg/undrawConnection';
import Devices from '~/assets/images/svg/undrawDevices';
import Winners from '~/assets/images/svg/undrawWinners';
import Sync from '~/assets/images/svg/undrawSync';
import Rain from '~/assets/images/svg/undrawRain';
import Help from '~/assets/images/svg/undrawHelp';

export default {
  name: 'Home',
  head: {
    title: 'Fundraising, Member Organization, and Community Outreach Experts',
  },
  components: {
    BCard,
    CallToAction,
    Connection,
    Devices,
    Winners,
    Sync,
    Rain,
    Help,
  },
  data() {
    return {
      typedWords: [
        {
          id: 1,
          title: 'Organization',
        },
        {
          id: 2,
          title: 'Members',
        },
        {
          id: 3,
          title: 'Association',
        },
        {
          id: 4,
          title: 'Community',
        },
        {
          id: 5,
          title: 'Union',
        },
      ],
      txt: '',
      wordIndex: 0,
      typeSpeed: 100,
      wait: 2000,
      isDeleting: false,
      interval: null,
    };
  },
  mounted() {
    this.type();
  },
  destroyed() {
    clearTimeout(this.interval);
  },
  methods: {
    type() {
      // Current index of word
      const currentIdx = this.wordIndex % this.typedWords.length;
      // Get full text of current word
      const word = this.typedWords[currentIdx].title;
      // Check if deleting
      if (this.isDeleting) {
        // Remove char
        this.txt = word.substring(0, this.txt.length - 1);
        this.typeSpeed = 25;
      } else {
        // Add char
        this.txt = word.substring(0, this.txt.length + 1);
        this.typeSpeed = 25;
      }

      // If word is complete
      if (!this.isDeleting && this.txt === word) {
        // Make a pause at end
        this.typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        this.typeSpeed = 200;
      }
      this.interval = setTimeout(() => this.type(), this.typeSpeed);
    },
  },
};
</script>

<style>
.gray-out img {
  filter: grayscale(1);
}

#typed-text {
  @apply text-4xl text-gray-1000 leading-tight font-bold;
}
/* to offset the blinker and center the typed text */
.txt-type {
  @apply relative;
  left: 12px;
}
@screen md {
  #typed-text {
    @apply text-5xl;
  }
}
@screen lg {
  .txt-type {
    @apply static;
  }
}
@media only screen and (max-width: 1120px) and (min-width: 960px) {
  #typed-text {
    @apply text-5xl;
  }
}
@media only screen and (max-width: 1240px) and (min-width: 1121px) {
  #typed-text {
    @apply text-6xl;
  }
}
@media only screen and (max-width: 1440px) and (min-width: 1241px) {
  #typed-text {
    font-size: 3.5rem;
  }
}
@media only screen and (min-width: 1441px) {
  #typed-text {
    font-size: 3.7rem;
  }
}

.gradient {
  background: hsl(224deg 35% 58%);
  background: linear-gradient(90deg, hsl(224deg 35% 58%), hsl(174deg 100% 45%));
  background: linear-gradient(
    90deg,
    hsl(224deg, 35%, 58%),
    hsl(204deg, 100%, 45%)
  );
  background: linear-gradient(
    90deg,
    hsl(224deg, 35%, 58%),
    hsl(186deg, 100%, 45%)
  );
  background-position: center;
  position: relative;
  overflow: hidden;
}

.gradient {
  background: linear-gradient(
    135deg,
    hsl(218deg 24% 27%),
    hsl(358deg 100% 15%),
    hsl(41deg 100% 21%)
  );
  background: linear-gradient(135deg, #b2bed8, #c4d9ff);
  background: linear-gradient(0deg, hsl(221deg 39% 73%), hsl(219deg 100% 88%));
  background: linear-gradient(0deg, hsl(221deg 39% 73%), hsl(220, 63%, 82%));
  background: linear-gradient(
    125deg,
    hsl(220deg, 63%, 82%),
    hsl(200deg, 40%, 69%),
    hsl(220deg, 63%, 82%),
    hsl(200deg, 40%, 69%)
  );
  background: linear-gradient(
    90deg,
    hsl(154deg, 38%, 58%),
    hsl(186deg, 70%, 45%)
  );
  background: linear-gradient(90deg, hsl(164deg, 50%, 72%), hsl(184, 63%, 72%));
  background: linear-gradient(
    90deg,
    hsl(210deg, 100%, 86%),
    hsl(155deg, 55%, 72%)
  );
  /*background: hsl(220, 63%, 82%);*/
  background-size: 200% 200%;
  animation: waves 20s ease infinite;
}

/* left to right */
@keyframes waves {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* top to bottom */
/*@keyframes waves {
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
}*/

/*@media only screen and (max-width: 959px) {
  .gradient {
    background: linear-gradient(
      135deg,
      hsl(224deg 35% 58%),
      hsl(174deg 100% 45%)
    );
  }
}*/

.svg-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  svg {
    display: block;

    path {
      fill: #fff;

      &#curve1 {
        opacity: 0.6;
      }

      &#curve2 {
        opacity: 0.4;
      }
    }
  }
}

/* Cursor */
.txt-type > .txt {
  @apply text-primary-base;
}
.txt-type > .blinker {
  position: relative;
  top: -9px;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-bottom: 0.3rem solid hsla(209, 0%, 16%, 1); /* The typewriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  padding-right: 1.5rem;
  animation: blink-caret 0.7s infinite;
}

@keyframes blink-caret {
  50% {
    border-color: hsla(29, 0%, 16%, 0);
  }
}

@screen xl {
  .txt-type > .blinker {
    top: -15px;
    border-bottom: 0.7rem solid hsla(209, 0%, 16%, 1);
    padding-right: 3.5rem;
  }
}

/* matches timing for increase of size for text */
@media only screen and (max-width: 1220px) and (min-width: 960px) {
  .txt-type > .blinker {
    top: -15px;
    border-bottom: 0.5rem solid hsla(209, 0%, 16%, 1);
    padding-right: 2.5rem;
  }
}

.news-feed-list-item {
  @apply bg-charcoal-100 rounded shadow p-4 mb-4;
}
.news-feed-list-item:last-child {
  @apply mb-8;
}

.stat-number {
  @apply text-4xl text-gray-1000 leading-tight font-bold mb-3;
}

@screen sm {
  .stat-number {
    @apply text-5xl;
  }
}
@screen xl {
  .stat-number {
    @apply text-6xl;
  }
}

@media only screen and (max-width: 810px) and (min-width: 768px) {
  .stat-number {
    @apply text-4xl;
  }
}
</style>
