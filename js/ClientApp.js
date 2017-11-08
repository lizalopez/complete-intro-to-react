import React from 'react'

//es6 version of hte commonjs line below, es6 makes it ready to be used for webpack
// var React = require('react');
// var ReactDOM = require('react-dom');

import ReactDOM from 'react-dom'
import titulo from './miTitulo'
// var titulo = require('./miTitulo')
var div = React.DOM.div;

// makes a factory method for other components, so here it makes a factory method (that will run the helper functions?)
var miFactoriaDeTitulo = React.createFactory(titulo)

// in this other class, you created multiple instances of the titulo component
// so you build small compoments, then you build bigger components that encapsulate small components --> that's what react is
var primerComponent = React.createClass({
  render: function () {
    return (
          // can give multiple seperate parameters, or an array
      div(null,
        // [
        // change the attributes
        miFactoriaDeTitulo({titulo: 'I ', color: 'papayawhip'}),
        // pass the object here (titulo) from parent (primerComponente) to child (titulo).
        // child can read the attributes from it's parent (in this case, color and titulo), but not modify them. READ ONLY
        // we are creating method, so in this case it's .titulo, but it could be anything
        miFactoriaDeTitulo({titulo: 'don\'t want no scrub', color: 'burlywood'}),
        miFactoriaDeTitulo({titulo: 'want no scrub', color: 'navahowhite'}),
        miFactoriaDeTitulo({titulo: 'no scrub', color: 'olivedrab'})
        // don't have to only pass down string, can pass fx's, properties -- anything that can be passed by reference in JS

        // ]
      )
    )
  }
})

ReactDOM.render(React.createElement(primerComponent), document
.getElementById('app'))
