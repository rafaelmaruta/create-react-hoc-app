import React from 'react';
import { withLoading } from '../hocs/withLoading';

const ReposList = () => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <li>Minha lista de repos:</li>
    <li><a href="https://jsonbin.io/" target="_blank" rel="noopener noreferrer">JSONbin</a></li>
    <li><a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">Codepen</a></li>
  </ul>
);

export default withLoading(ReposList);
