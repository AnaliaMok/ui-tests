import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';

storiesOf('Button', module).add('default', () => {
  return {
    components: { Button },
    template: `<Button text="Hello World" />`
  };
});
