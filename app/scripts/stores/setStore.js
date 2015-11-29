'use strict';

import _ from 'lodash';

import alt from './../alt.js';
import SetActions from './../actions/setActions';

class SetStore {
  constructor() {
    this.sets = [];
    this.activeSet = [];
    this.bindListeners({
      handleAddToSet: SetActions.ADD_TO_SET
    });
  }

  checkSet(set) {
    let sim = {shape: 0, num: 0, shade: 0, color: 0};
    set.forEach((card1, index1) => {
      set.forEach((card2, index2) => {
        if (index1 > index2 ) {
          for (let attr in sim) {
            if (card1[attr] === card2[attr]) {
              sim[attr]++
            }
          }
        }
      });
    });
    console.log(sim);
    for (let attr in sim) {
      if (sim[attr] === 1) {
        console.log('this set is invalid');
      }
    }
    console.log('checking set');
  }

  handleAddToSet(card) {
    // only add card to set if it's not already there
    if (!_.include(this.activeSet, card)) {
      this.activeSet.push(card);
    } else {
      throw new Error('you can not add the same card to a set twice')
    }
    // check the set if it has 3 cards in it
    if (this.activeSet.length === 3) {
      this.checkSet(this.activeSet);
    }
  }
}

export default alt.createStore(SetStore, 'SetStore');
