<template>
  <ul
    :class="{ active: isOpen }"
    class="hidden transition duration-300 hover:opacity-100 group-hover:opacity-100 lg:block"
  >
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    isOpen: {
      type: Boolean,
    },
  },
};
</script>

<style>
.brf-navbar-dropdown-menu {
  @apply static py-2 w-auto rounded-lg pointer-events-none z-50;
}
.mega-menu {
  @apply py-0;
}
.active {
  @apply block;
}

@screen lg {
  .brf-navbar-dropdown-menu {
    @apply absolute w-64 bg-white opacity-0 shadow-dense;
  }
}
</style>
