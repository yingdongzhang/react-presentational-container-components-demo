import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import 'semantic-ui-css/semantic.min.css';
import Comments from '../src/components/Comments';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('Comments Component (with comments)', () => (
      <Comments />
  ))
  .add('Comments Component (no comments)', () => (
    <Comments />
  ));
