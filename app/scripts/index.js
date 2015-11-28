'use strict';

import React from 'react';
import {render} from 'react-dom'
import cards from './cards';

let Body = React.createClass({
  render() {
    return (
      <div>Enjoy your new app!</div>
    )
  }
})

render(<Body/>, document.getElementById('container'))
