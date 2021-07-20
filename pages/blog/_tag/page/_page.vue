<template>
  <!-- BLOG CATEGORY -->
  <main>
    <b-section class="brf-section-light brf-section-intro-lg">
      <b-container class="brf-container-sm">
        <b-row class="mb-12">
          <b-col class="w-full">
            <h4 class="text-lg text-center mb-3" v-if="posts.length === 1">
              Category • {{ posts.length }} Post
            </h4>
            <h4 class="text-lg text-center mb-3" v-else>
              Category • {{ posts.length }} Posts
            </h4>
            <h2 class="section-title text-center capitalize mb-24">
              {{ tag }}
            </h2>
            <base-nav v-slot="{ isOpen }">
              <dropdown-menu :is-open="isOpen" class="md:text-center md:block">
                <dropdown-menu-item class="brf-basenav-item-dropdown">
                  <b-button prefetch is="nuxt-link" to="/blog"> Blog </b-button>
                </dropdown-menu-item>
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
              <news-card
                v-for="post in posts"
                :key="post.id"
                v-bind="post"
                class="mb-8"
              />
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="w-full flex justify-between items-center">
            <n-link
              prefetch
              class="text-primary-base font-semibold py-px brf-arrow brf-arrow-left-blue hover:text-titleColor"
              v-show="prevPage"
              :to="{
                name: 'blog-tag-page-page',
                params: { tag: tag, page: prevPage },
              }"
            >
              Newer posts
            </n-link>
            <n-link
              prefetch
              class="text-primary-base font-semibold py-px brf-arrow brf-arrow-right-blue ml-auto hover:text-titleColor"
              v-show="nextPage"
              :to="{
                name: 'blog-tag-page-page',
                params: { tag: tag, page: nextPage },
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
import { getCategory, getTags } from '~/api/posts';
import BaseNav from '~/components/navigation/BaseNav';
import DropdownMenu from '~/components/navigation/DropdownMenu';
import DropdownMenuItem from '~/components/navigation/DropdownMenuItem';
import NewsCard from '~/components/ui/NewsCard';

export default {
  name: 'Category',
  layout: 'blog',
  head() {
    return {
      title: this.tag.charAt(0).toUpperCase() + this.tag.slice(1),
    };
  },
  components: {
    BaseNav,
    DropdownMenu,
    DropdownMenuItem,
    NewsCard,
  },
  async asyncData(ctx) {
    const posts = await getCategory(ctx.params.tag, ctx.params.page);
    const tags = await getTags();

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
    const numberOfPages = posts.meta.pagination.pages;
    const pages = [];
    for (let idx = 1; idx <= numberOfPages; idx++) {
      pages.push(idx);
    }
    return {
      posts: posts,
      tags: tags,
      limit: posts.meta.pagination.limit,
      nextPage: posts.meta.pagination.next,
      prevPage: posts.meta.pagination.prev,
      numberOfPages: pages,
    };
  },
  data() {
    return {
      posts: [],
      tags: [],
      limit: null,
      nextPage: null,
      prevPage: null,
      numberOfPages: null,
      currentPage: this.$route.params.page,
      tag: this.$route.params.tag,
      isOpen: false,
    };
  },
};
</script>
