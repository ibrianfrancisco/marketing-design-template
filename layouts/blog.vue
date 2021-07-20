<template>
  <div class="antialiased min-h-screen">
    <navbar />
    <nuxt />
    <centered-call-to-action />
    <the-footer />
  </div>
</template>

<script>
import Navbar from '~/components/navigation/TheNavbar';
import CenteredCallToAction from '~/components/layout/CenteredCallToAction';
import TheFooter from '~/components/layout/TheFooter';

export default {
  components: {
    Navbar,
    CenteredCallToAction,
    TheFooter,
  },
};
</script>
