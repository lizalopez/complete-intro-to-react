import React from 'react'

//es6 version of hte commonjs line below, es6 makes it ready to be used for webpack
// var React = require('react');
// var ReactDOM = require('react-dom');

import ReactDOM from 'react-dom'
import MiTitulo from './miTitulo'

// in this other class, you created multiple instances of the titulo component
// so you build small compoments, then you build bigger components that encapsulate small components --> that's what react is
var primerComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MiTitulo titulo="Heyyyy there props" color='teal' />
        <MiTitulo titulo="props are looking good" color='blanchedalmond' />
        <MiTitulo titulo="real good" color='navajowhite' />
      </div>
    )
    // can insert miTiulo component like it's a real HTML element, give it properties like you woudl a normal html element, made self closing tag since there are no children. 
    // components must be uppercased, to signify it's your component you created, otherwise it uputs literally unto dom (web component)
    // there's no black magic. like if you want to siblings (div) at top level components, it'd be like return x, y, 
    // so can only return one topmost component. so yu can wrap anything in div
  }
})

ReactDOM.render(React.createElement(primerComponent), document
.getElementById('app'))
