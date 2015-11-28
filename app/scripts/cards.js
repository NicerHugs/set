'use strict';

import alt from './alt';

function newCard(values) {
  let proto = {};
  let defaults = values;
  return Object.assign(Object.create(proto), values);
}

function createCards() {
  let cards = [];
  for (let p = 0; p < 3; p++) {
    for (let n = 0; n < 3; n++) {
      for (let c = 0; c < 3; c++) {
        for (let d = 0; d < 3; d++) {
          cards.push(newCard({shape: p, num: n, color: c, shade: d}))
        }
      }
    }
  }
  return cards;
}

class CardStore {
  constructor() {
    this.cards = createCards();
    this.shuffle();
  }

  shuffle() {
    console.log(this.cards)
  }
}

createCards();

export default alt.createStore(CardStore, 'CardStore');
