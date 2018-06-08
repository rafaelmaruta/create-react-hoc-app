import React from 'react';
import { withLoading } from '../hocs/Loading';

const ReposList = () => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <li>Minha lista de favoritos:</li>
    <li><a href="https://www.github.com" target="_blank">GitHub</a></li>
    <li><a href="https://about.gitlab.com" target="_blank">GitLab</a></li>
  </ul>
);

export default withLoading(ReposList);
