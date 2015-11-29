'use strict';

import React from 'react';

import CardStore from './../stores/cardStore';
import SetStore from './../stores/setStore';
import SetActions from './../actions/setActions';

export default React.createClass({
  handleClick() {
    let card = CardStore.getCard(this.props.id);
    SetActions.addToSet(card);
  },
  fillMap(shade) {
    let shades = [
      this.colorMap(this.props.color),
      'white',
       'url(#diagonal-stripes)'
    ]
    return shades[shade];
  },
  colorMap(color) {
    let colors = [
      '#58aa34',
      '#fe4b73',
      '#372578'
    ]
    return colors[color];
  },
  shapeMap(shape) {
    let shapes = [
      'M 50 10 L 100 155 L 50 300 L 0 155 L 50 10',
      'M 50 290 A 45 140 0 1 1 50.1 290.1',
      'M 30 15 L 15 30 Q -30 90 15 155 C 50 200 50 240 30 280 Q 20 315 60 295 Q 130 220 80 165'
    ]
    return shapes[shape];
  },
  render() {
    let shapes = [];
    let pathData = this.shapeMap(this.props.shape);
    let fillColor = this.fillMap(this.props.shade);
    for (let i = 0; i <= this.props.num; i++) {
      shapes.push((
        <svg xmlns="http://www.w3.org/svg/2000"
          key={i}
          viewBox={[0, 0, 100, 300].join(' ')}
          width="30%"
          height="90%">
          <defs>
            <pattern id="diagonal-stripes" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M -2 2 L 2 -2 M 0 10 L 10 0 M 8 12 L 12 8" stroke={this.colorMap(this.props.color)} strokeWidth="2"/>
            </pattern>
          </defs>
          <path d={pathData} stroke={this.colorMap(this.props.color)} fill={fillColor} strokeWidth="2"/>
        </svg>
    ))
    }
    return (
      <div className="card" onClick={this.handleClick}>

        {shapes}
      </div>
    )
  }
});
