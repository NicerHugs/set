'use strict';

import alt from './../alt';

import GameActions from './../actions/gameActions';
import CardStore from './cardStore';

class GameStore {
  constructor() {
    this.players = [];
    this.playHasStarted = false;
    this.bindListeners({
      handleDealNewGame: GameActions.DEAL_NEW_GAME
    });
  }

  handleDealNewGame() {
    this.playHasStarted = true;
  }
};

export default alt.createStore(GameStore, 'GameStore');
