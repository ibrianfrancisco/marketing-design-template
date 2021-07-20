<template>
  <div
    @click="toggleClass"
    class="accordion-item mb-2"
    :class="{ 'is-active': item.active }"
  >
    <dt class="accordion-item-title">
      <h4>{{ item.title }}</h4>
      <svg
        class="bg-yellow-base rounded-full absolute inset-y-0 left-0 m-auto fill-current h-5 w-5 block transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <dd v-if="item.active" class="accordion-item-details">
        <div v-html="item.details" class="accordion-item-details-inner"></div>
      </dd>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AccordionItem',
  props: {
    item: {
      type: Object,
    },
    multiple: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  methods: {
    toggleClass() {
      const accordionItems = this.$parent.$children;
      const isAllFalse = accordionItems.every(el => el.item.active === false);
      const activeItem = accordionItems.find(el => el.item.active === true);

      if (this.multiple) return (this.item.active = !this.item.active);
      if (isAllFalse) return (this.item.active = !this.item.active);
      if (this === activeItem) activeItem.item.active = false;
      if (this !== activeItem) {
        activeItem.item.active = false;
        this.item.active = true;
      }
    },

    startTransition(el) {
      el.style.height = el.scrollHeight + 'px';
    },

    endTransition(el) {
      el.style.height = '';
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
</style>
