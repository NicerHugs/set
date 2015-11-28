'use strict';

import React from 'react';
import {render} from 'react-dom'

let Body = React.createClass({
  render() {
    return (
      <div>Enjoy your new app!</div>
    )
  }
})

render(<Body/>, document.getElementById('container'))


console.log('hi');
