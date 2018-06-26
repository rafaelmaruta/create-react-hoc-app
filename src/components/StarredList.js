import React from 'react';
import { withLoading } from '../hocs/withLoading';

const Starredist = () => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <li>Minha lista de favoritos:</li>
    <li><a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
    <li><a href="https://about.gitlab.com" target="_blank" rel="noopener noreferrer">GitLab</a></li>
  </ul>
);

export default withLoading(Starredist);
