import React from 'react'
// var React = require('react');
//signaling to packager to grab react module (from node module dir) as React variable, now react var doens't come from global scope, it's locally injected

var div = React.DOM.div
var h1 = React.DOM.h1
var h4 = React.DOM.h4

// create the titulo stamp here
var titulo = React.createClass({
  render: function () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style= { style }>
          {this.props.titulo} 
        </h1>
      </div>
    )
  }
})
      // insdie h1 -- signify that you want it to output whatever the value is. if we put out this.props.title without
      // any object marks outside of it, it would just ouptut a string. Also, you could put this.props.title.toUpperCase(),
      // brackes indicate that we are inserting a JS expression
// this mashes together all markup and behavior, which makes a very powerful debugging tool 

export default titulo
// es6 module. most common way is commonjs -- this is syntax of future
// signals that anytime anyone requests this module titulo, it will hand over this code bc this is what we're exporting
//default means you will export multiple dffeent things


