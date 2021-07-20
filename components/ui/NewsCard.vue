<template>
  <nuxt-link :to="'/blog/' + slug">
    <div class="bg-white md:flex shadow-md rounded md:mx-0 overflow-hidden">
      <div class="md:w-1/3">
        <img
          v-if="feature_image !== null"
          class="w-full h-full object-cover"
          :src="feature_image"
        />
        <img
          class="w-full h-full object-cover"
          v-else
          :src="`/blog_${tag}.png`"
          alt=""
        />
      </div>
      <div class="p-6 md:w-2/3 relative">
        <h3 class="text-2xl text-titleColor font-semibold">
          <slot name="card-title">
            {{ title }}
          </slot>
        </h3>
        <!-- <h6 class="uppercase text-gray-300 capitalize">
          <slot name="card-meta">
            {{ dateFormatted }}
                      <img
            class="w-12 h-12 object-cover rounded-full"
            :src="authors[0].profile_image"
          />

          </slot>
        </h6> -->
        <ul>
          <li v-for="tag in tags" :key="tag.id">
            <b-badge>
              <span
                :class="`brf-badge-${tag.name}`"
                class="brf-badge brf-badge-small text-xs capitalize"
                :to="`/blog/category/${tag.name}/page/1`"
              >
                {{ tag.name }}
              </span>
            </b-badge>
          </li>
        </ul>
        <p class="py-4">
          <slot name="card-body">{{ custom_excerpt }}</slot>
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import BBadge from '~/components/ui/BaseBadge';

export default {
  name: 'NewsCard',
  components: {
    BBadge,
  },
  data() {
    return {
      tag: this.tags[0].name,
    };
  },
  props: {
    title: {
      type: String,
    },
    published_at: {
      type: String,
    },
    feature_image: {
      type: String,
    },
    authors: {
      type: Array,
    },
    custom_excerpt: {
      type: String,
    },
    dateFormatted: {
      type: String,
    },
    slug: {
      type: String,
    },
    tags: {
      type: Array,
    },
  },
};
</script>
