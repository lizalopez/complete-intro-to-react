var div = React.DOM.div
var h1 = React.DOM.h1

//create the titulo stamp here
var titulo = React.createClass({
	render: function() {
		return div(null,
			h1(null, 'Mira este component')
		)
	}
})

var miFactoriaDeTitulo = React.createFactory(titulo);
//in this other class, you created multiple instances of the titulo component
//so you build small compoments, then you build bigger components that encapsulate small components --> that's what react is
var primerComponent = React.createClass({
	render: function() {
		return (
				//can give multiple seperate parameters, or an array
			div(null, 
				// [
				miFactoriaDeTitulo(null),
				miFactoriaDeTitulo(null),
				miFactoriaDeTitulo(null),
				miFactoriaDeTitulo(null)
				// ]
			)
		)
	}
})

ReactDOM.render(React.createElement(primerComponent), document.
getElementById('app'))