'use strict';

import alt from './../alt';
import _ from 'lodash';

import CardActions from './../actions/cardActions';

function newCard(values) {
  let proto = {};
  let defaults = {dealt: false, displayed: false};
  return Object.assign(Object.create(proto), values, defaults);
}

function createCards() {
  let cards = [];
  let i = 0;
  for (let p = 0; p < 3; p++) {
    for (let n = 0; n < 3; n++) {
      for (let c = 0; c < 3; c++) {
        for (let d = 0; d < 3; d++) {
          cards.push(newCard({key: i, shape: p, num: n, color: c, shade: d}));
          i++;
        }
      }
    }
  }
  return cards;
}

class CardStore {
  constructor() {
    let cards = _.shuffle(createCards());
    this.cards = cards;
    this.bindListeners({
      handleDeal: CardActions.DEAL
    });
    this.exportPublicMethods({
      getCard: this.getCard
    });
  }

  deal(card) {
    card.dealt = true;
    card.displayed = true;
  }

  getCard(id) {
    let {cards} = this.getState();
    for (let i = 0; i < cards.length; i ++) {
      if (cards[i].key === id) {
        return cards[i];
      }
    }
    return null
  }

  handleDeal(n) {
    for (let i = 0; i < n; i ++) {
      let undealt = this.cards.filter(card => {return !card.dealt});
      this.deal(undealt[0]);
    }
  }
}

export default alt.createStore(CardStore, 'CardStore');
