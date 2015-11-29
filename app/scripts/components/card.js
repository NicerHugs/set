'use strict';

import React from 'react';

import CardStore from './../stores/cardStore';

export default React.createClass({
  handleClick() {
    console.log(CardStore.getCard(this.props.id));
  },
  render() {
    return (
      <div onClick={this.handleClick}>card: {JSON.stringify(this.props)}}</div>
    )
  }
});
