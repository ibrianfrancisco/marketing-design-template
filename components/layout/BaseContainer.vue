<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseContainer',
  parent: 'BaseSection',
};
</script>

<style>
.brf-container-xs {
  @apply max-w-3xl;
}
.brf-container-sm {
  @apply max-w-5xl;
}
.brf-container-lg {
  max-width: 1280px;
}
</style>
