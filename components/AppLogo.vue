<template>
  <h1 class="logo">BRF.</h1>
</template>

<script>
export default {
  name: 'AppLogo',
};
</script>

<style>
.logo {
  @apply text-3xl text-titleColor font-bold;
}
.is-on-dark:not(.is-sticky) .logo {
  @apply text-white;
}
.is-on-dark .is-open .logo {
  @apply text-gray-1000;
}
</style>
