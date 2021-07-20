<template>
  <section class="brf-section px-4">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'BaseSection',
};
</script>

<style>
.brf-section {
  @apply py-20;
}
.brf-section-xs {
  @apply py-4;
}
.brf-section-sm {
  @apply py-12;
}
.brf-section-remove {
  @apply py-0;
}

.theme-dark {
  @apply text-white;
}

.brf-section-default {
  @apply bg-white;
}
.brf-section-light {
  @apply bg-primary-100;
}
.brf-section-charcoal {
  @apply bg-charcoal-100;
}
.brf-section-muted {
  @apply bg-charcoal-base;
}
.brf-section-primary {
  @apply bg-primary-700;
}
.brf-section-secondary {
  @apply bg-blue-700;
}
.brf-section-black {
  @apply bg-gray-1000;
}
.brf-section-warning {
  @apply bg-yellow-base;
}
.brf-section-danger {
  @apply bg-red-base;
}
.brf-section-teal {
  @apply bg-teal-700;
}
.brf-section-orange {
  @apply bg-orange-500;
}
.brf-section-indigo {
  @apply bg-indigo-500;
}
.brf-section-blue {
  @apply bg-primary-bright;
}
.brf-section-green {
  @apply bg-green-600;
}

.brf-section-intro,
.brf-section-intro-lg {
  @apply pt-32;
}

.curve-default {
  background-image: url('../../assets/images/svg/big-round-bottom-white.svg');
}
.curve-light {
  background-image: url('../../assets/images/svg/big-round-bottom-light.svg');
}
.curve-charcoal {
  background-image: url('../../assets/images/svg/big-round-bottom-charcoal.svg');
}
.curve-secondary {
  background-image: url('../../assets/images/svg/big-round-bottom-secondary.svg');
}
.curve-above-rounded {
  padding-top: 5%;
  padding-bottom: 0;
  background-position: center calc(100% + 1px);
  background-repeat: no-repeat;
  background-size: 100%;
}
.curve-below-rounded {
  padding-top: 40px;
}
@screen md {
  .curve-below-rounded {
    padding-top: 20px;
  }
}
@screen lg {
  .brf-section-lg {
    @apply py-32;
  }
  .brf-section-intro-lg {
    @apply pt-40;
  }
  .curve-below-rounded {
    padding-top: 40px;
  }
}
</style>
