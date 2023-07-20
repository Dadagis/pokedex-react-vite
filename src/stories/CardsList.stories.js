import cardsList from '../components/cardsList';

export default {
  tags: ['autodocs'],
  component: cardsList,
};

export const Default = {
  args: {
    page: '1',
  },
};

export const LargeDisplay = {
  args: {
    page: '1',
    largeDisplay: true,
  },
};
