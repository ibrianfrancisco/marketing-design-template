<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'DropdownMenuItem',
  parent: 'DropdownMenu',
};
</script>

<style>
.brf-navbar-dropdown-menu > li:hover {
  @apply bg-primary-base;
}
.brf-navbar-dropdown-menu > li > a,
.brf-navbar-dropdown-menu > li > .active-link {
  @apply block px-4 py-2 text-gray-1000;
  &:hover {
    @apply text-white;
  }
}
.brf-navbar-dropdown-menu > li > .active-link,
.brf-nav-item > .active-link {
  @apply text-primary-base;
}
.brf-nav-item > .active-link:hover {
  @apply text-titleColor;
}

.brf-basenav-item-dropdown a {
  @apply block py-2 px-6 bg-white text-gray-700 capitalize text-sm;
  &:hover {
    @apply bg-primary-base text-white;
  }
}

@screen md {
  .brf-basenav-item-dropdown {
    @apply py-2 px-6 inline-block;
  }
  .brf-basenav-item-dropdown a {
    @apply p-0 text-base font-semibold text-primary-base bg-transparent;
    &:hover {
      @apply bg-transparent text-titleColor;
    }
  }
}
</style>
