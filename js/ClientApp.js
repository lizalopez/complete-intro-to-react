/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1
var h4 = React.DOM.h4

//create the titulo stamp here
var titulo = React.createClass({
	render: function() {
		return div(null,
			h4({style: {color: this.props.color, fontWeight: 'bold'}}, this.props.titulo)
			//change from h4(null, this.propt.titulo) --> bc now we are giving it attributes, so you make a style object
		)
	}
})

//makes a factory method for other components, so here it makes a factory method (that will run the helper functions?)
var miFactoriaDeTitulo = React.createFactory(titulo);

//in this other class, you created multiple instances of the titulo component
//so you build small compoments, then you build bigger components that encapsulate small components --> that's what react is
var primerComponent = React.createClass({
	render: function() {
		return (
				//can give multiple seperate parameters, or an array
			div(null, 
				// [
				//change the attributes
				miFactoriaDeTitulo({titulo: 'I ', color: 'papayawhip'}),
				//pass the object here (titulo) from parent (primerComponente) to child (titulo). 
				//child can read the attributes from it's parent (in this case, color and titulo), but not modify them. READ ONLY
				//we are creating method, so in this case it's .titulo, but it could be anything
				miFactoriaDeTitulo({titulo: 'don\'t want no scrub', color: 'burlywood'}),
				miFactoriaDeTitulo({titulo: 'want no scrub', color: 'navahowhite'}),
				miFactoriaDeTitulo({titulo: 'no scrub', color: 'olivedrab'})
				//don't have to only pass down string, can pass fx's, properties -- anything that can be passed by reference in JS

				// ]
			)
		)
	}
})

ReactDOM.render(React.createElement(primerComponent), document.
getElementById('app'))