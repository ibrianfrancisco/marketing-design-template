<template>
  <!-- you apply the width to columns to fit row: should = 100% -->
  <div class="col">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseColumn',
  parent: 'BaseRow',
};
</script>
