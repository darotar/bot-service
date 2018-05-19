import React from 'react';
import {storiesOf} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import MenuLeft from './index';

storiesOf('MenuLeft', module)
  .add('default', withInfo()(() => (
    <MenuLeft />
  )));