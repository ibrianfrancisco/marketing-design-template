import Vue from 'vue';
import BSection from '~/components/layout/BaseSection';
import BContainer from '~/components/layout/BaseContainer';
import BRow from '~/components/layout/BaseRow';
import BCol from '~/components/layout/BaseColumn';
import BButton from '~/components/ui/BaseButton';

const components = {
  BSection,
  BContainer,
  BRow,
  BCol,
  BButton,
};

// Imports these components into all Vue components
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
