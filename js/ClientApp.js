var div = React.DOM.div
var h1 = React.DOM.h1

var primerComponent = React.createClass({
	render: function() {
		return (
			div(null,
				h1(null,'el Primer component!')
			)
		)
	}
})

console.log(ReactDOM);
ReactDOM.render(React.createElement(primerComponent), document.
getElementById('app'))