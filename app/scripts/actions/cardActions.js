'use strict';

import alt from './../alt';

class GameActions {
  dealNewGame() {
    this.dispatch()
  }
  deal(n) {
    this.dispatch(n)
  }
};

export default alt.createActions(GameActions);
