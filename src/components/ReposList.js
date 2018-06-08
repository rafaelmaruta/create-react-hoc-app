import React from 'react';
import { withLoading } from '../hocs/Loading';

const ReposList = () => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <li>Minha lista de repos:</li>
    <li><a href="https://jsonbin.io/" target="_blank">JSONbin</a></li>
    <li><a href="https://codepen.io/" target="_blank">Codepen</a></li>
  </ul>
);

export default withLoading(ReposList);
