<template>
  <li
    class="event-package rounded-lg cursor-pointer list-none"
    :class="{ 'event-active': event.active }"
  >
    <div @click="toggleClass(event.title)" class="flex p-4">
      <b-card class="img-left-fixed" :title="event.title">
        <template #icon>
          <div class="brf-circle brf-circle-lg brf-circle-blue mb-6">
            <font-awesome-icon class="text-3xl" :icon="['fas', event.icon]" />
          </div>
        </template>
        <p class="text-sm md:text-base">{{ event.description }}</p>
      </b-card>
    </div>
  </li>
</template>

<script>
import BCard from '~/components/ui/BaseCard';

export default {
  name: 'SwitcherItem',
  components: {
    BCard,
  },
  props: {
    event: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    toggleClass(title) {
      const eventPackages = this.$parent.$children;
      const activeItem = eventPackages.find(el => el.event.active === true);
      const switcherOne = document.querySelector('#switcher-one');
      const eventClass = title.split(' ').join('').toLowerCase();
      // TODO: get rid of hardcoding. push to array from list of titles
      const classes = ['rookie', 'professional', 'bigleague', 'custom'];
      if (this === activeItem) return;
      if (this !== activeItem) {
        activeItem.event.active = false;
        this.event.active = true;
      }
      classes.forEach(evtClass => switcherOne.classList.remove(evtClass));
      switcherOne.classList.add(eventClass);
    },
  },
};
</script>

<style scoped>
.accordion-item {
  @apply p-4 bg-charcoal-100 cursor-pointer;

  &:hover {
    @apply bg-opacity-75;
  }
}

.accordion-item:last-child {
  @apply mb-0;
}
.accordion-item-details-inner {
  @apply pt-0 pb-3 pl-8 pr-0;
}

.accordion-item-title {
  @apply relative pt-2 pb-2 pl-8 pr-0;

  h4 {
    @apply text-base font-semibold mb-0 pr-5;
  }
}

.is-active svg {
  @apply transform rotate-180;
}

.accordion-item-details {
  @apply overflow-hidden;
}

.accordion-item-enter-active,
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.2s ease;
}
.accordion-item-enter,
.accordion-item-leave-to {
  height: 0 !important;
}
.event-package:hover:not(.event-active) {
  @apply bg-blue-100;
}

.event-package {
  @apply my-2;
}

.event-package:first-child {
  @apply mt-0;
}
.event-package:last-child {
  @apply mb-0;
}
</style>
