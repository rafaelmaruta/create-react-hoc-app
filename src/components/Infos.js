import React from 'react';
import { withLoading } from '../hocs/withLoading';

const Infos = () => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <li>
      <img
        alt="me"
        src='https://avatars3.githubusercontent.com/u/7636517?s=460&v=4'
        style={{ margin: '0 auto' }}
      />
    </li>
    <li>My name: Rafael Maruta</li>
    <li>My username: rafaelmaruta</li>
    <li>My login: rafaelmaruta</li>
  </ul>
);

export default withLoading(Infos);
