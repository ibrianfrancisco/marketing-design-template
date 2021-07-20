<template>
  <li
    @click="toggleClass"
    class="brf-nav-item brf-nav-item-primary flex-grow lg:inline-flex group"
  >
    <a
      v-if="hasDropdown"
      class="main-link flex items-center justify-between cursor-pointer lg:justify-center lg:pointer-events-none"
    >
      {{ title }}
      <svg
        style="top: 1px; left: 3px"
        class="relative caret -mr-4 fill-current h-4 w-4 hidden transition-transform duration-300 lg:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
      <svg
        :class="{ turn: isOpen }"
        class="block transform rotate-270 transition duration-300 lg:hidden"
        width="12"
        height="12"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        data-svg="chevron-left"
      >
        <polyline
          fill="none"
          stroke="#0C0C0C"
          stroke-width="3"
          points="13 16 7 10 13 4"
        ></polyline>
      </svg>
    </a>
    <slot v-bind:isOpenn="isOpen">{{ title }}</slot>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    title: {
      type: String,
      required: false,
    },
    hasDropdown: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleClass() {
      // checks if mobile nav is open
      if (!document.querySelector('#nav > div').classList.contains('is-open'))
        return;
      const accordionItems = this.$parent.$children.filter(
        item => item.hasDropdown === true
      );
      const isAllFalse = accordionItems.every(el => el.isOpen === false);
      const activeItem = accordionItems.find(el => el.isOpen === true);

      if (isAllFalse) return (this.isOpen = !this.isOpen);
      if (this === activeItem) activeItem.isOpen = false;
      if (this !== activeItem) {
        activeItem.isOpen = false;
        this.isOpen = true;
      }
      // emit to any listener from toggle
      // this.$root.$emit('toggle', false);
    },
  },
};
</script>

<style>
.main-link {
  @apply border-b border-charcoal-100 flex-grow py-3 px-0 pr-px;
}

@screen lg {
  .main-link {
    @apply py-4 px-2 pr-0 border-none;
  }
}

.brf-nav-item {
  @apply font-medium;
  a {
    @apply text-gray-1000;
  }
}
@screen lg {
  .brf-nav-item {
    @apply font-semibold;
  }
}

.brf-nav-item:hover .brf-navbar-dropdown-menu {
  @apply pointer-events-auto;
}

.brf-nav-item:hover svg.transition-transform {
  @apply transform rotate-180;
}

.caret {
  @apply opacity-0 transition duration-300 ease-in-out;
}

.turn {
  transform: rotate(90deg);
}
/* large screen width */
@screen lg {
  .navbar.is-on-dark:not(.is-sticky) .brf-nav-item > a,
  .navbar.is-on-dark:not(.is-sticky) .logo > a {
    @apply text-white;
  }
}
</style>
