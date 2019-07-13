import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { StorybookDecorator } from '../src/components/StorybookDecorator';

const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(StorybookDecorator);
addDecorator(StoryRouter());

configure(loadStories, module);
