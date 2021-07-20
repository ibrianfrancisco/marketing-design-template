<template>
  <div>
    <slot>New</slot>
  </div>
</template>

<script>
export default {
  name: 'BaseBadge',
};
</script>

<style scoped>
.brf-badge {
  @apply inline-block rounded-full py-px px-2 font-semibold tracking-wider uppercase;
}
.brf-badge-small {
  @apply py-px px-2 text-xxs;
}

.brf-badge-primary {
  @apply bg-primary-base text-white;
}
.brf-badge-yellow {
  @apply bg-yellow-base text-titleColor;
}

.brf-badge-intro {
  background: hsl(210, 100%, 92%);
  color: hsl(239, 41%, 48%);
}
.brf-badge-posts {
  background: hsl(9, 89%, 93%);
  color: hsl(338, 71%, 38%);
}
.brf-badge-settings {
  background: hsl(44, 77%, 85%);
  color: hsl(21, 95%, 31%);
}
.brf-badge-life {
  background: hsl(117, 66%, 87%);
  color: hsl(160, 76%, 22%);
}

@screen lg {
  .brf-badge {
    @apply py-1 px-4;
  }
}
</style>
