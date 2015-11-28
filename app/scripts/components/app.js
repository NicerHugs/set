'use strict';

import React from 'react';
import cards from './../stores/cards';

export default React.createClass({
  render() {
    return (
      <main>
        <h1>Set</h1>
        {this.props.children}
      </main>
    )
  }
});
