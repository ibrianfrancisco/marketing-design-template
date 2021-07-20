<template>
  <div class="container py-48 text-center m-auto">
    <h1 v-if="error.statusCode === 404" class="text-5xl mb-2">
      404
    </h1>
    <h4 v-if="error.statusCode === 404" class="text-4xl mb-8">
      Page not found
    </h4>
    <h1 v-else class="text-5xl">An error occurred</h1>
    <nuxt-link to="/" class="py-2 px-4 bg-gray-400 font-semibold rounded-full">
      Home page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
};
</script>
