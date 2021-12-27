import React from 'react';
import '../src/css/index.css';

export const decorators = [(StoryComponent) => <StoryComponent />];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  knobs: {
    escapeHTML: false,
  },
};
