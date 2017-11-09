import React from 'react'
import { render } from 'react-dom' //specifying we only want render from react-dom, include verthing we need for that but only that
import '../public/normalize.css'
import '../public/style.css'

const Appa = React.createClass({
  render() {
    return (
      <div className='app'> 
        <div className='landing'>
          <h1>Expovideo</h1>
          <input type='text' placeholder='Busca' />
          <a>O Ver Todos</a>
        </div>
      </div>
    )
    // note, it's not class, it's className, bc class is a JS reserved word
  }
})

render(<Appa />, document.getElementById('app'));
// can put Appa in hear instead of React.createElement, since that's what it'd do under the hood anyways