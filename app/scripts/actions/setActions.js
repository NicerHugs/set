'use strict';

import alt from './../alt';

class SetActions {
  addToSet(card) {
    this.dispatch(card);
  }
};

export default alt.createActions(SetActions);
