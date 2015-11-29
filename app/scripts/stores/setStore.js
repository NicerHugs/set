'use strict';

import alt from './../alt.js';
import SetActions from './../actions/setActions';

class SetStore {
  constructor() {
    this.sets = [];
  }
}

export default alt.createStore(SetStore, 'SetStore');
