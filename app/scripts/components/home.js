'use strict';

import React from 'react';
import GameActions from './../actions/gameActions';
import GameStore from './../stores/gameStore';

export default React.createClass({
  handleClick() {
    GameActions.dealNewGame();
  },
  render() {
    return (
      <div>
        <input type="button" onClick={this.handleClick} value="Deal a new game"/>
      </div>
    )
  }
});
