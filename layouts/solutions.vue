<template>
  <div class="antialiased min-h-screen">
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/layout/TheFooter';

export default {
  components: {
    TheFooter,
  },
};
</script>
