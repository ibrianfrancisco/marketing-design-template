<template>
  <footer>
    <b-section class="footer brf-section-light overflow-hidden relative">
      <!--     <div class="section-circle-bl"></div>
      <div class="section-circle-tr"></div>
   -->
      <b-container class="brf-container-lg">
        <b-row class="lg:-ml-20">
          <b-col class="w-full flex flex-col justify-between lg:pl-20 lg:w-1/3">
            <app-logo />
            <div
              class="hidden flex flex-col justify-between lg:block xl:flex-row xl:justify-start"
            >
              <b-button
                class="brf-button-link text-sm mb-2 xl:mb-0"
                href="tel:15555558942"
              >
                (555) 555-8942
              </b-button>
              <b-button
                class="eye-catching ml-0 xl:ml-2 text-sm"
                href="mailto:support@example.com"
              >
                support@example.com
              </b-button>
              <!--               <b-button
                prefetch
                is="nuxt-link"
                class="brf-button-link px-2 text-sm"
                to="/sitemap"
              >
                Site Map
              </b-button> -->
            </div>
          </b-col>
          <b-col class="w-full mt-12 lg:mt-0 lg:pl-20 lg:w-2/3">
            <b-row>
              <b-col
                v-for="card in cards"
                :key="card.id"
                class="flex w-1/2 lg:w-1/3"
              >
                <b-card
                  :title="card.title"
                  class="brf-card-light w-full px-2 py-4 lg:py-0"
                >
                  <ul>
                    <li v-for="page in card.pages" :key="page.id">
                      <nuxt-link
                        prefetch
                        class="brf-button-link text-sm"
                        :to="page.link"
                      >
                        {{ page.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <hr class="my-8" />
        <b-row>
          <b-col class="w-full">
            <div class="flex flex-col justify-between md:flex-row">
              <div
                class="flex flex-col justify-center items-center mb-4 md:mb-0 md:flex-row"
              >
                <div class="text-center text-sm">© 2021 BRF</div>
              </div>
              <ul class="flex justify-center lg:justify-between">
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    class="text-xl rounded-full hover:text-primary-base"
                  >
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                  </a>
                </li>
                <li class="ml-4">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    class="text-xl rounded-full hover:text-primary-base"
                  >
                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                  </a>
                </li>
                <li class="ml-4">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    class="text-xl rounded-full hover:text-primary-base"
                  >
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                  </a>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-section>
  </footer>
</template>

<script>
import BCard from '~/components/ui/BaseCard';
import AppLogo from '~/components/AppLogo';

export default {
  name: 'TheFooter',
  components: {
    BCard,
    AppLogo,
  },
  data() {
    return {
      date: new Date().getFullYear(),
      cards: [
        {
          id: 0,
          title: 'Products',
          pages: [
            {
              id: 1,
              link: '/products/credit-card-processing',
              title: 'Credit Card Processing',
            },
            {
              id: 2,
              link: '/products/customer-service',
              title: 'Customer Service',
            },
            {
              id: 3,
              link: '/products/security-software',
              title: 'Security Software',
            },
          ],
        },
        {
          id: 17,
          title: 'About Us',
          pages: [
            {
              id: 18,
              link: '/company',
              title: 'Company',
            },
            { id: 19, link: '/team', title: 'Team' },
          ],
        },
        {
          id: 24,
          title: 'Get in Touch',
          pages: [
            {
              id: 27,
              link: '/blog',
              title: 'Blog',
            },
            {
              id: 28,
              link: '/contact',
              title: 'Contact Us',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.eye-catching {
  @apply text-primary-base;
}
.section-circle-tr {
  position: absolute;
  background: white;
  border-radius: 9999px;
  z-index: 1;
  opacity: 0.1;
  width: 15rem;
  height: 15rem;
  right: 0;
  top: -7.5rem;
  left: unset;
}
.section-circle-bl {
  position: absolute;
  background: white;
  border-radius: 9999px;
  z-index: 1;
  opacity: 0.1;
  width: 20rem;
  height: 20rem;
  top: 22rem;
  left: -10rem;
}

.footer blockquote li {
  @apply leading-normal my-3;
}
.footer blockquote li:last-child {
  @apply mb-0;
}
</style>
