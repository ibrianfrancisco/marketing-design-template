<template>
  <!-- TODO: Change localhost -->
  <main>
    <b-section class="brf-section-light brf-section-intro-lg">
      <b-container class="brf-container-sm">
        <b-row>
          <b-col class="w-full flex items-center justify-between">
            <h1 class="p-4 section-title-copy">
              <n-link prefetch to="/blog">Blog</n-link>
            </h1>
            <div class="flex">
              <a
                style="min-width: 52.5px"
                class="p-4 text-center align-text-top leading-none text-gray-1000 text-xl rounded hover:bg-primary-base hover:text-white"
                :href="`https://www.facebook.com/sharer/sharer.php?u=${post.url}`"
                target="_blank"
              >
                <font-awesome-icon
                  class="w-5 h-5"
                  :icon="['fab', 'facebook-f']"
                />
              </a>
              <a
                style="min-width: 52.5px; top: 2px"
                class="relative align-text-top p-4 leading-none text-gray-1000 text-xl ml-2 rounded hover:bg-primary-base hover:text-white"
                :href="`https://twitter.com/intent/tweet?text=${post.title} localhost:3000/blog/${post.slug}`"
                target="_blank"
              >
                <font-awesome-icon class="w-5 h-5" :icon="['fab', 'twitter']" />
              </a>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="w-full">
            <div
              class="brf-tile bg-white text-textColor rounded-lg shadow-md py-10 px-5 lg:px-10"
            >
              <div class="max-w-3xl m-auto">
                <h1 class="section-title-copy text-center mb-4">
                  {{ post.title }}
                </h1>
                <h3 class="header-body text-center mb-6">
                  {{ post.primary_author.name }} posted in
                  <n-link
                    class="text-primary-base capitalize hover:text-titleColor"
                    :to="`/blog/${post.primary_tag.name}/page/1`"
                  >
                    {{ post.primary_tag.name }}
                  </n-link>
                  {{ dateFormatted }}
                </h3>
                <img :src="post.feature_image" alt="" />
                <div
                  v-html="post.html"
                  class="text-base mt-12 sm:text-lg"
                ></div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-section>
  </main>
</template>

<script>
import { getSinglePost } from '~/api/posts';

export default {
  layout: 'blog',
  data() {
    return {
      title: '',
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const dateFormatted = new Intl.DateTimeFormat('en-US', options).format(
      new Date(post.published_at)
    );
    return { post, dateFormatted, title: post.title };
  },
};
</script>
