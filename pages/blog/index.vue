<template>
  <!-- BLOG INDEX -->
  <main>
    <b-section class="brf-section-charcoal brf-section-intro-lg">
      <b-container class="brf-container-sm">
        <b-row class="mb-12">
          <b-col class="w-full">
            <h2 class="section-title text-center mb-4">Blog</h2>
            <p class="header-body text-center mb-20">
              Lorem, ipsum dolor sit amet consectetur, adipisicing.
            </p>
            <base-nav v-slot="{ isOpen }">
              <dropdown-menu :is-open="isOpen" class="md:text-center md:block">
                <dropdown-menu-item
                  v-for="tag in tags"
                  :key="tag.id"
                  class="brf-basenav-item-dropdown"
                >
                  <b-button
                    prefetch
                    is="nuxt-link"
                    :to="`/blog/${tag.slug}/page/1`"
                  >
                    {{ tag.name }}
                  </b-button>
                </dropdown-menu-item>
              </dropdown-menu>
            </base-nav>
          </b-col>
        </b-row>
        <b-row class="mb-6">
          <b-col class="w-full">
            <b-row>
              <news-featured-card
                v-for="post in featurePost"
                :key="post.id"
                v-bind="post"
                class="mb-8"
              />

              <news-card
                v-for="post in recentPosts"
                :key="post.id"
                v-bind="post"
                class="mb-8"
              />

              <news-card
                v-for="post in lastPosts"
                :key="post.id"
                v-bind="post"
                class="mb-8"
              />
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="w-full flex justify-between items-center">
            <!-- TODO: Why it not working in production -->
            <n-link
              prefetch
              class="text-primary-base font-semibold py-px brf-arrow brf-arrow-right-blue ml-auto hover:text-titleColor"
              v-show="nextPage"
              :to="{
                name: 'blog-page-page',
                params: { page: nextPage },
              }"
            >
              Older posts
            </n-link>
          </b-col>
        </b-row>
      </b-container>
    </b-section>
  </main>
</template>

<script>
import { getPosts, getTags } from '~/api/posts';
import BaseNav from '~/components/navigation/BaseNav';
import DropdownMenu from '~/components/navigation/DropdownMenu';
import DropdownMenuItem from '~/components/navigation/DropdownMenuItem';
import NewsCard from '~/components/ui/NewsCard';
import NewsFeaturedCard from '~/components/ui/NewsFeaturedCard';

export default {
  name: 'Page',
  layout: 'blog',
  head: {
    title: 'Blog',
  },
  components: {
    BaseNav,
    DropdownMenu,
    DropdownMenuItem,
    NewsCard,
    NewsFeaturedCard,
  },
  async asyncData(ctx) {
    const posts = await getPosts(1);
    const tags = await getTags();
    const numberOfPages = posts.meta.pagination.pages;
    const pages = [];

    posts.map(post => {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      post.dateFormatted = new Intl.DateTimeFormat('en-US', options).format(
        new Date(post.published_at)
      );
    });
    for (let idx = 1; idx <= numberOfPages; idx++) {
      pages.push(idx);
    }
    return {
      posts: posts,
      tags: tags,
      limit: posts.meta.pagination.limit,
      nextPage: posts.meta.pagination.next,
      numberOfPages: pages,
    };
  },
  data() {
    return {
      posts: [],
      tags: [],
      limit: null,
      nextPage: null,
      numberOfPages: null,
      currentPage: 1,
      isOpen: false,
    };
  },
  computed: {
    featurePost() {
      return this.posts.slice(0, 1);
    },
    recentPosts() {
      return this.posts.slice(1, 3);
    },
    lastPosts() {
      return this.posts.slice(3, 6);
    },
  },
  validate({ params }) {
    // TODO: set validation parameters for pages that doesn't exist or return content/posts
    return /^\d+$/.test(1);
  },
};
</script>
