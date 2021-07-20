<template>
  <dl class="accordion" role="presentation">
    <accordion-item
      v-for="item in content"
      :multiple="multiple"
      :item="item"
      :key="item.id"
    ></accordion-item>
  </dl>
</template>

<script>
import AccordionItem from './AccordionItem';

export default {
  name: 'BaseAccordion',
  components: {
    AccordionItem,
  },
  props: {
    content: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
