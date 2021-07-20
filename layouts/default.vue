<template>
  <div class="antialiased min-h-screen">
    <navbar />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import Navbar from '~/components/navigation/TheNavbar';
import TheFooter from '~/components/layout/TheFooter';

export default {
  components: {
    Navbar,
    TheFooter,
  },
};
</script>
