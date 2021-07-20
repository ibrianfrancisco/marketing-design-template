<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-charcoal-400 hover:border-black focus:outline-none focus:border-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="m-auto icon-user h-5 w-5 fill-current text-textColor"
      >
        <path class="primary" d="M12 12a5 5 0 110-10 5 5 0 010 10z" />
        <path
          class="secondary"
          d="M21 20v-1a5 5 0 00-5-5H8a5 5 0 00-5 5v1c0 1.1.9 2 2 2h14a2 2 0 002-2z"
        />
      </svg>
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
    ></button>
    <div
      v-if="isOpen"
      class="absolute z-50 right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
    >
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
      >
        Login
      </a>
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
      >
        Register
      </a>
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
      >
        Reset Password
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarMenu',
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    const handleEscape = e => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false;
      }
    };

    document.addEventListener('keydown', handleEscape);
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', handleEscape);
    });
  },
};
</script>
