<template>
  <div class="galleries">
    <div class="gallery gallery1">
      <img
        @click="showImage(image, idx)"
        v-on:keyup.enter="showImage(image, idx)"
        v-on:keyup.esc="closeModal"
        v-on:keyup.right="showNextImage"
        v-on:keyup.left="showPrevImage"
        v-for="(image, idx) in images"
        :src="image.src"
        :alt="image.alt"
        :key="image.id"
        tabindex="0"
      />
    </div>

    <!-- FIXME: attach keyup to global window event so no matter what you're focused on, you will be able to scroll through gallery -->
    <div
      :class="{ open: isOpen }"
      v-on:keyup.esc="closeModal"
      v-on:keyup.right="showNextImage"
      v-on:keyup.left="showPrevImage"
      @click="handleClickOutside($event)"
      tabindex="0"
      class="modal"
    >
      <div class="modalInner">
        <button @click="showPrevImage" aria-label="Previous Photo" class="prev">
          ←
        </button>
        <figure>
          <img :src="this.modalSrc" :alt="this.modalAlt" />
          <figcaption>
            <h2>{{ modalTitle }}</h2>
            <p>
              {{ modalDescription }}
            </p>
          </figcaption>
        </figure>
        <button @click="showNextImage" aria-label="Next Photo" class="next">
          →
        </button>
      </div>
      <button class="close brf-circle brf-circle-blue mb-6">
        <font-awesome-icon class="text-xl" :icon="['fas', 'times']" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseGallery',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      currentImage: null,
      currentIndex: 0,
      modalSrc: null,
      modalAlt: null,
      modalTitle: null,
      modalDescription: null,
    };
  },
  methods: {
    openModal() {
      if (this.isOpen === true) return;
      this.isOpen = true;
    },
    closeModal() {
      if (this.isOpen === false) return;
      this.isOpen = false;
    },
    handleClickOutside(event) {
      if (!event.target.closest('.modalInner')) this.closeModal();
    },
    showImage(image, idx) {
      if (!image) return;
      // update modal with this info
      this.currentImage = image;
      this.currentIndex = idx;
      this.modalSrc = image.src;
      this.modalAlt = image.alt;
      this.modalTitle = image.title;
      this.modalDescription = image.description;
      this.openModal();
    },
    showPrevImage() {
      if (this.isOpen === false) return;
      if (this.currentIndex === 0) {
        return this.showImage(
          this.images[this.images.length - 1],
          this.images.length - 1
        );
      }
      this.showImage(this.images[this.currentIndex - 1], this.currentIndex - 1);
    },
    showNextImage() {
      if (this.isOpen === false) return;
      if (this.currentIndex === this.images.length - 1) {
        return this.showImage(this.images[0], 0);
      }
      this.showImage(this.images[this.currentIndex + 1], this.currentIndex + 1);
    },
  },
};
</script>

<style scoped>
.close {
  position: absolute;
  top: 16px;
  right: 16px;
  border: 0;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  z-index: 9999;
}
.galleries {
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}
.gallery {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
  padding: 2rem;
}

.gallery img {
  width: 100%;
  object-fit: cover;
  border: 1px solid black;
}

.modal {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  align-items: center;
  justify-items: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s;
}

.modalInner {
  border-radius: 4px;
  background: white;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
  transform: translateY(-100vh);
  transition: all 0.5s;
  max-width: 1000px;
  height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  color: black;
  margin: 3rem;
}

.modal figure {
  height: 100%;
  display: grid;
  margin: 0;
  grid-template-rows: 1fr auto;
}

.modal img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.modal.open {
  opacity: 1;
  pointer-events: all;
}

.modal figcaption {
  padding: 10px;
}

.modal h2 {
  color: black;
}

.modal.open .modalInner {
  transform: translateY(0);
}
</style>
