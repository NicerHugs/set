'use strict';

import alt from './../alt';

import GameActions from './../actions/gameActions';

class GameStore {
  constructor() {
    this.bindListeners({
      handleDealNewGame: GameActions.DEAL_NEW_GAME
    });
  }

  handleDealNewGame() {
    console.log('dealing new game, overwriting existing game');
  }
};

export default alt.createStore(GameStore, 'GameStore');
