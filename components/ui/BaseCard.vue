<template>
  <div>
    <img
      class="align-middle rounded-t-lg"
      v-if="imgSrc"
      :src="imgSrc"
      :alt="imgAlt"
    />
    <blockquote :class="{ relative: imgSrc }" class="w-full">
      <svg
        class="absolute left-0 w-full block"
        v-if="imgSrc"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 583 95"
        style="height: 95px; top: -94px"
      >
        <polygon class="fill-current" points="-30,95 583,95 583,65" />
      </svg>
      <slot name="icon"></slot>
      <div class="content">
        <h4 v-if="title" class="title text-lg mb-2 font-semibold md:text-xl">
          {{ title }}
        </h4>
        <slot></slot>
      </div>
    </blockquote>
  </div>
</template>
<script>
export default {
  name: 'BaseCard',
  props: {
    imgSrc: {
      type: String,
      required: false,
    },
    imgAlt: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style>
.brf-card {
  @apply relative w-full min-w-0 block items-center break-words;

  blockquote {
    @apply p-4;
  }
}
@supports (display: flex) {
  .brf-card {
    @apply relative w-full min-w-0 flex flex-col items-center justify-start break-words;
  }
}

.brf-card-sm blockquote {
  @apply p-4;
}

.img-left-fixed blockquote,
.img-left blockquote {
  @apply flex;
}
.img-left-fixed .content,
.img-left .content {
  @apply pl-8;
}

.brf-card-default {
  @apply bg-white;

  blockquote {
    @apply text-textColor;
  }
  .title {
    @apply text-titleColor;
  }
  polygon {
    @apply text-white;
  }
}

.brf-card-light {
  @apply bg-primary-100;

  blockquote {
    @apply text-textColor;
  }
  .title {
    @apply text-titleColor;
  }
  polygon {
    @apply text-white;
  }
}

.brf-card-muted {
  @apply bg-charcoal-base;

  blockquote,
  .title {
    @apply text-white;
  }
  polygon {
    @apply text-charcoal-base;
  }
}
.brf-card-charcoal {
  @apply bg-charcoal-100;

  blockquote {
    @apply text-textColor;
  }
  .title {
    @apply text-titleColor;
  }
  polygon {
    @apply text-white;
  }
}

.brf-card-primary {
  @apply bg-primary-base;

  blockquote,
  .title {
    @apply text-white;
  }
  polygon {
    @apply text-primary-base;
  }
}
.brf-card-primary-light {
  background-color: hsl(210deg 100% 96%);

  blockquote,
  .title {
    @apply text-white;
  }
  polygon {
    @apply text-primary-base;
  }
}

.brf-card-secondary {
  @apply bg-blue-700;

  blockquote,
  .title {
    @apply text-white;
  }
  polygon {
    @apply text-blue-700;
  }
}

.brf-card-transparent {
  @apply bg-transparent;

  blockquote {
    @apply text-textColor;
  }
  .title {
    @apply text-titleColor;
  }
  polygon {
    @apply text-white;
  }
}

.card-link h4::after {
  content: '';
  display: inline-block;
  vertical-align: middle;
  background-image: url(../../assets/images/icons/icon-arrow-thick-right-circle-white.svg);
  background-repeat: no-repeat;
  @apply inline-block h-6 w-6 transition-transform ease-in-out duration-500;
}

.card-link-black h4::after {
  background-image: url(../../assets/images/icons/icon-arrow-thick-right-circle-black.svg);
}

.brf-card:hover .card-link::after,
.card-link:hover h4::after {
  @apply transform translate-x-2 ease-in-out duration-500;
}

@screen lg {
  .brf-card blockquote {
    @apply p-8;
  }
  .img-left blockquote {
    @apply block;
  }
  .img-left .content {
    @apply pl-0;
  }
}
</style>
