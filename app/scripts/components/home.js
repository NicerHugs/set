'use strict';

import React from 'react';
import {History} from 'react-router';

import GameActions from './../actions/gameActions';
import GameStore from './../stores/gameStore';

export default React.createClass({
  mixins: [ History ],
  handleClick() {
    this.history.pushState(null, 'play');
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
