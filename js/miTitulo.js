import React from 'react'
// var React = require('react');
//signaling to packager to grab react module (from node module dir) as React variable, now react var doens't come from global scope, it's locally injected

var div = React.DOM.div
var h1 = React.DOM.h1
var h4 = React.DOM.h4

// create the titulo stamp here
var titulo = React.createClass({
  render: function () {
    return div(null,
      h4({style: {color: this.props.color, fontWeight: 'bold'}}, this.props.titulo)
      // change from h4(null, this.propt.titulo) --> bc now we are giving it attributes, so you make a style object
    )
  }
})

export default titulo
// es6 module. most common way is commonjs -- this is syntax of future
// signals that anytime anyone requests this module titulo, it will hand over this code bc this is what we're exporting
//default means you will export multiple dffeent things


