// https://ghost.org/docs/api/v3/nuxtjs/

import GhostContentApi from '@tryghost/content-api';

const api = new GhostContentApi({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_KEY,
  version: 'v3',
});

export async function getPosts(pageNumber) {
  const postIndexFields = [
    'id',
    'uuid',
    'title',
    'slug',
    'feature_image',
    'published_at',
    'html',
    'custom_excerpt',
    'dateFormatted',
    'created_at',
    'updated_at',
    'published_at',
  ];

  return await api.posts
    .browse({
      include: 'tags',
      fields: postIndexFields,
      limit: '6',
      page: pageNumber,
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getTags() {
  return await api.tags.browse().catch(err => {
    console.error(err);
  });
}

export async function getCategory(tag, pageNumber) {
  return await api.posts
    .browse({
      include: 'tags',
      filter: `tag:${tag}`,
      limit: '6',
      page: pageNumber,
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
      include: ['authors', 'tags'],
    })
    .catch(err => {
      console.error(err);
    });
}
