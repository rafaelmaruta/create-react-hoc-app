import React, { Component } from 'react';
import './App.css';

import Infos from './components/Infos';
import ReposList from './components/ReposList';
import StarredList from './components/StarredList';

class App extends Component {
  state = {
    infoData: false,
    infoReposListData: false,
    infoStarredListData: false
  }

  async componentDidMount () {
    setTimeout(() => this.setState({ infoData: true }), 1000);
    setTimeout(() => this.setState({ infoReposListData: true }), 1500);
    setTimeout(() => this.setState({ infoStarredListData: true }), 2000);
  }

  render() {
    const {
      infoData,
      infoReposListData,
      infoStarredListData
    } = this.state;

    return (
      <div className="App">
        <Infos data={infoData} />
        <ReposList data={infoReposListData} />
        <StarredList data={infoStarredListData} />
      </div>
    );
  }
}

export default App;
