// YourComponent.stories.js|jsx

import card from '../components/card';

//👇 This default export determines where your story goes in the story list
export default {
  component: card,
};

export const Main = {
  args: {
    label: 'Card',
    //👇 The args you need here will depend on your component
  },
};

export const Large = {
  args: {
    label: 'Card',
    size: 'large',
  },
};
