<template>
  <component :is="type" :href="href">
    <slot>Learn More</slot>
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: [String, Object],
      default: null,
    },
  },
  computed: {
    type() {
      return this.href ? 'a' : 'button';
    },
  },
};
</script>

<style>
.brf-button {
  @apply inline-block font-semibold text-center py-1 px-3 rounded-full cursor-pointer shadow-md transition-colors duration-100;
}

/*.brf-button-variant {
  @apply border;
  background-color: var(--buttonColor);
  color: var(--knockoutColor);
  border-color: var(--buttonColor);
  &:hover {
    @apply bg-titleColor border-titleColor text-white;
  }
}*/

.brf-button-default {
  @apply bg-white text-titleColor border border-white;
  &:hover {
    @apply bg-titleColor border-titleColor text-white;
  }
}

.brf-button-muted {
  @apply bg-charcoal-base text-white border border-charcoal-base;
  &:hover {
    @apply bg-titleColor border-titleColor;
  }
}

.brf-button-primary {
  @apply bg-primary-base text-white border border-primary-base;
  &:hover {
    @apply bg-titleColor border-titleColor;
  }
}

.brf-button-secondary {
  @apply bg-titleColor text-white border border-titleColor;
  &:hover {
    @apply bg-primary-base border-primary-base;
  }
}

.brf-button-danger {
  @apply bg-red-base text-white border border-red-base;
  &:hover {
    @apply bg-titleColor border-titleColor;
  }
}

.brf-button-teal {
  @apply bg-teal-700 text-white border border-teal-700;
  &:hover {
    @apply bg-titleColor border-titleColor;
  }
}

.brf-button-green {
  @apply bg-green-600 text-white border border-green-600;
  &:hover {
    @apply bg-titleColor border-titleColor;
  }
}

.brf-button-orange {
  @apply bg-orange-500 text-white border border-orange-500;
  &:hover {
    @apply bg-titleColor border-titleColor;
  }
}

.brf-button-indigo {
  @apply bg-indigo-500 text-white border border-indigo-500;
  &:hover {
    @apply bg-titleColor border-titleColor;
  }
}

.brf-button-blue {
  @apply bg-primary-bright text-white border border-primary-bright;
  &:hover {
    @apply bg-titleColor border-titleColor;
  }
}

.theme-dark .brf-button-outline {
  @apply border-gray-200 text-white;
}
.brf-button-outline {
  @apply bg-transparent border border-gray-900;
  &:hover {
    @apply bg-primary-base border-primary-base text-white;
  }
}

.footer .brf-button-link {
  @apply text-gray-700;

  &:hover {
    @apply text-primary-base;
  }
}
/*TODO: Create a theme dark version for links*/
.brf-button-link {
  @apply text-primary-base cursor-pointer;

  &:hover {
    @apply text-titleColor;
  }
}

.brf-arrow::before,
.brf-arrow::after {
  @apply inline-block bg-contain align-text-top transition duration-300 ease-in-out;
}
.brf-arrow-right-black::after {
  content: '';
  background: url(../../assets/images/icons/icon-arrow-thick-right-circle-black.svg)
    no-repeat;
  width: 22px;
  height: 22px;
}
.brf-arrow-left-black::before {
  content: '';
  background: url(../../assets/images/icons/icon-arrow-thick-left-circle-black.svg)
    no-repeat;
  width: 22px;
  height: 22px;
}
.brf-arrow-right-blue::after {
  content: '';
  background: url(../../assets/images/icons/icon-arrow-thick-right-circle-blue.svg)
    no-repeat;
  width: 22px;
  height: 22px;
}
.brf-arrow-left-blue::before {
  content: '';
  background: url(../../assets/images/icons/icon-arrow-thick-left-circle-blue.svg)
    no-repeat;
  width: 22px;
  height: 22px;
}
.brf-arrow-right-red::after {
  content: '';
  background: url(../../assets/images/icons/icon-arrow-thick-right-circle-red.svg)
    no-repeat;
  width: 22px;
  height: 22px;
}
.brf-arrow-right-white::after {
  content: '';
  background: url(../../assets/images/icons/icon-arrow-thick-right-circle-white.svg)
    no-repeat;
  width: 22px;
  height: 22px;
}

.hover-card:hover .brf-arrow::after {
  transform: translateX(4px);
  background: url(../../assets/images/icons/icon-arrow-thick-right-circle-black.svg)
    no-repeat;
  @apply transition duration-300 ease-in-out;
}
.brf-arrow:hover::after {
  transform: translateX(4px);
  background: url(../../assets/images/icons/icon-arrow-thick-right-circle-black.svg)
    no-repeat;
  @apply transition duration-300 ease-in-out;
}
.brf-arrow:hover::before {
  transform: translateX(-4px);
  background: url(../../assets/images/icons/icon-arrow-thick-left-circle-black.svg)
    no-repeat;
  @apply transition duration-300 ease-in-out;
}
.brf-button.brf-arrow:hover::after {
  transform: translateX(4px);
  background: url(../../assets/images/icons/icon-arrow-thick-right-circle-white.svg)
    no-repeat;
  @apply transition duration-300 ease-in-out;
}

.brf-button-sm {
  @apply py-px px-4;
}
.brf-button-lg {
  @apply py-2 px-6;
}
</style>
