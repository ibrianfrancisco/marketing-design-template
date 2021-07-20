<template>
  <ul>
    <switcher-item
      v-for="event in content"
      :event="event"
      :key="event.id"
    ></switcher-item>
  </ul>
</template>

<script>
import SwitcherItem from './SwitcherItem';

export default {
  name: 'BaseSwitcher',
  components: {
    SwitcherItem,
  },
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
