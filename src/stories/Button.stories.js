import button from '../components/button';

export default {
  tags: ['autodocs'],
  component: button,
  argTypes: {
    type: {
      options: ['default', 'squared'],
      control: { type: 'radio' },
    },
  },
};

export const Default = {};

export const Pagination = {
  args: {
    label: '+',
    type: 'squared',
  },
};
