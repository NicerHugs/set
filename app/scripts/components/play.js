'use strict';

import React from 'react';

import CardStore from './../stores/cardStore';
import CardActions from './../actions/cardActions';
import Card from './card';

export default React.createClass({
  getInitialState() {
    return CardStore.getState();
  },

  componentDidMount() {
    CardStore.listen(this.onChange);
    CardActions.deal(9);
  },

  componentWillUnmount() {
    CardStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  handleDeal3() {
    CardActions.deal(3);
  },

  render() {
    let cards = this.state.cards
      .filter(card => {
        return card.displayed;
      }).map(card => {
        return (
          <Card key={card.key}
                id={card.key}
                shape={card.shape}
                num={card.num}
                color={card.color}
                shade={card.shade}/>
        );
      });
    return (
      <div>
        {cards}
        <input type="button"
               value="deal 3 More"
               onClick={this.handleDeal3}
               disabled={this.state.cards.filter(card => {return !card.dealt}).length < 3}/>
      </div>
    )
  }
});
