import React from 'react';
import { hot } from 'react-hot-loader';

import PlayButton from '../lib/PlayButton';

class App extends React.Component {
  play(state) {
    console.log('button state is ', state);
  }

  render() {
    return [
      <div className="button-container">
        <PlayButton
          class="testButton"
          playButtonClick={this.play}
          isPlaying={false}
        />
      </div>,
    ];
  }
}

export default hot(module)(App);
