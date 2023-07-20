import card from '../components/card';

export default {
  tags: ['autodocs'],
  component: card,
};

export const Default = {};

export const Large = {
  args: {
    large: true,
  },
};

export const Loading = {
  args: {
    id: '',
  },
};
