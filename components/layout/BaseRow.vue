<template>
  <!-- apply the negative left margin to then apply padding to columns. Negative margin and padding should === 0 -->

  <!-- can also be used to make grids -->
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseRow',
  parent: 'BaseContainer',
};
</script>

<style>
.row {
  @apply flex flex-wrap flex-row;
}
</style>
