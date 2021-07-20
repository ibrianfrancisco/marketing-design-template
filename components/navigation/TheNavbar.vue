<template>
  <!-- TODO: add a skip to content button -->
  <!-- TODO: open drop down menus on tab cycling -->
  <!-- TODO: when switching to different layout, thats when it has to re-render everything -->
  <header
    id="nav"
    class="navbar px-0 lg:px-4 lg:py-2"
    v-bind:class="{
      'is-sticky': isSticky,
    }"
  >
    <b-container
      class="brf-container-lg"
      v-bind:class="{
        'is-open': isOpen,
      }"
    >
      <div class="lg:flex lg:justify-between lg:items-center">
        <div class="flex items-center justify-between py-2 mx-4 lg:mx-0">
          <div class="logo">
            <app-logo />
          </div>
          <!-- Close Icon -->
          <div class="lg:hidden">
            <button
              @click="isOpen = !isOpen"
              class="hamburger focus:outline-none"
              type="button"
            >
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  v-if="isOpen"
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
                <path
                  v-if="!isOpen"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav
          :class="isOpen ? 'block' : 'hidden'"
          class="py-2 self-center lg:max-w-xl xl:max-w-2xl flex-grow-2 lg:py-0 lg:flex lg:items-center"
        >
          <ul class="align-baseline mx-4 lg:w-full lg:flex lg:mx-5">
            <nav-item
              v-for="navItem in navItems"
              :key="navItem.id"
              hasDropdown
              :title="navItem.title"
              v-slot="{ isOpenn }"
            >
              <dropdown-menu
                class="brf-navbar-dropdown-menu"
                style="top: 68px"
                :is-open="isOpenn"
              >
                <dropdown-menu-item
                  v-for="page in navItem.pages"
                  :key="page.id"
                >
                  <n-link
                    @click.native="toggleIsOpen(isOpenn)"
                    prefetch
                    :to="page.link"
                  >
                    {{ page.title }}
                  </n-link>
                </dropdown-menu-item>
              </dropdown-menu>
            </nav-item>
            <nav-item :title="'Company'" :hasDropdown="false">
              <n-link
                @click.native="toggleIsOpen"
                prefetch
                to="/company"
                class="main-link block text-left lg:text-center"
              >
                Company
              </n-link>
            </nav-item>
            <nav-item :title="'Team'" :hasDropdown="false">
              <n-link
                @click.native="toggleIsOpen"
                prefetch
                to="/team"
                class="main-link block text-left lg:text-center"
              >
                Team
              </n-link>
            </nav-item>
            <nav-item :title="'Blog'" :hasDropdown="false">
              <n-link
                @click.native="toggleIsOpen"
                prefetch
                to="/blog"
                class="main-link block text-left lg:text-center"
              >
                Blog
              </n-link>
            </nav-item>
          </ul>
        </nav>
        <div
          class="absolute bottom-0 left-0 right-0 text-center p-4 lg:relative lg:p-0 lg:block"
          :class="isOpen ? 'block' : 'hidden'"
        >
          <!-- TODO: make dynamic depending on page. (did it but don't like how it's done with different layouts)-->
          <b-button
            @click.native="toggleIsOpen"
            prefetch
            is="nuxt-link"
            to="/contact"
            :class="
              ctaButton ? `brf-button-${ctaButton}` : 'brf-button-primary'
            "
            id="nav-button"
            class="w-full py-2 px-6 inline-block font-semibold text-center lg:py-1 lg:px-3 rounded-full cursor-pointer shadow-md transition-colors duration-100"
            >Get started today</b-button
          >
        </div>
      </div>
    </b-container>
  </header>
</template>

<script>
import AppLogo from '../AppLogo';
import NavItem from '../navigation/NavItem';
import DropdownMenu from '../navigation/DropdownMenu';
import DropdownMenuItem from '../navigation/DropdownMenuItem';

export default {
  name: 'TheNavbar',
  props: {
    ctaButton: {
      type: String,
      required: false,
    },
  },
  components: {
    AppLogo,
    NavItem,
    DropdownMenu,
    DropdownMenuItem,
  },
  data() {
    return {
      navItems: [
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
      ],
      isOpen: false,
      isSticky: false,
    };
  },
  mounted() {
    this.setSticky();
    window.document.onscroll = () => {
      this.setSticky();
    };
    window.addEventListener('resize', this.removeClass);
    // listen to the toggle from navItem
    // this.$root.$on('toggle', function (data) {
    //   this.isOpen = false;
    // });
  },
  methods: {
    setSticky() {
      const nav = document.getElementById('nav');
      const topOfNav = nav.offsetTop;
      this.isSticky = window.scrollY > topOfNav ? true : false;
    },
    removeClass() {
      if (
        document.getElementById('nav').offsetWidth > 959 &&
        this.isOpen === true
      )
        this.isOpen = false;
    },
    // closes mobile nav when clicking on nav item
    // FIXME: it shows that the mobile menu closes, and then goes to the new page. Need to go straight from mobile menu to new page with no in-between.
    toggleIsOpen(isOpenn) {
      this.isOpen = false;
      // TODO: maybe have to set up vuex or emit something to nav-item telling it's isOpenn prop data to turn to false somehow
      // console.log(this.isOpen, isOpenn);
      document.body.style.overflow = 'auto';
    },
  },
  watch: {
    isOpen: function () {
      document.body.style.overflow = this.isOpen ? 'hidden' : '';
    },
    // change data when route changes
    // $route() {
    //   this.isOpen = false;
    // },
  },
};
</script>

<style>
.navbar {
  @apply fixed left-0 top-0 w-full z-999 bg-transparent transition duration-300 ease-in-out;
  box-shadow: 0 14px 20px -8px rgba(14, 12, 27, 0);
}
.is-sticky {
  @apply bg-white transition duration-500 ease-in-out;
  box-shadow: 0 14px 20px -8px rgba(14, 12, 27, 0.05);
}

.is-open {
  @apply bg-white h-screen overflow-scroll max-h-screen;
}

.hamburger {
  @apply block cursor-pointer;

  svg {
    @apply text-gray-1000;

    /*    &:hover {
      @apply text-charcoal-400;
    }*/
  }
}

.is-on-dark .hamburger svg {
  @apply text-gray-1000;

  /*  &:hover {
    @apply text-charcoal-400;
  }
*/
}
.is-on-dark:not(.is-sticky) .hamburger svg {
  @apply text-white;

  /*  &:hover {
    @apply text-charcoal-400;
  }
*/
}

.is-on-dark .is-open .hamburger svg {
  @apply text-gray-1000;
}

#nav:hover .caret {
  @apply opacity-50 transition duration-300 ease-in-out;
}

/*#nav .is-open #nav-button {
  @apply bg-titleColor text-white border-titleColor;
}*/
</style>
