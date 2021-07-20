<template>
  <div class="brf-basenav shadow md:shadow-none">
    <div class="bg-white rounded mb-1 w-full block md:hidden">
      <a
        @click="isOpen = !isOpen"
        class="py-2 px-6 font-semibold text-sm flex items-center justify-between cursor-pointer"
      >
        Menu
        <svg
          :class="{ 'transform rotate-180': isOpen }"
          class="block fill-current transition-transform duration-300"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </a>
    </div>
    <slot v-bind:isOpen="isOpen"></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseNav',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
.brf-basenav ul li:first-child a {
  @apply rounded-tl rounded-tr;
}
.brf-basenav ul li:last-child a {
  @apply rounded-bl rounded-br;
}
</style>
