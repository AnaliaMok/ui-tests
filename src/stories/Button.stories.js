import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';

const padding = () => {
  return {
    template: '<div class="p-8"><story/></div>'
  };
};

storiesOf('Button', module)
  .addDecorator(padding)
  .add('default', () => {
    return {
      components: { Button },
      template: `<Button text="Dark Button" />`
    };
  });
