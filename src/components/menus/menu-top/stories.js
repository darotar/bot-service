import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import MenuTop from './index';

const history = createBrowserHistory();

storiesOf('MenuTop', module)
  .add('default', () => (
    <Router history={history}>
      <MenuTop
        items={[
          {title: "Пункт 1", to: '/', active: false},
          {title: "Пункт 2", to: '/page2', active: true},
          {title: "Пункт 3", to: '/page3', active: false}
        ]}
      />
    </Router>
  ));