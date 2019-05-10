//my own pre-work:
var Counter = React.createClass({
    // With createReactClass(), provide a separate getInitialState method that returns the initial state:
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
        console.log('component mounts on the DOM');
    },
    componentDidMount: function () {
        console.log('this render method can be called we can access the DOM');
    },
    shouldComponentUpdate: function() {
        console.log('should this component be updated or not?');
    },
    componentWillUpdate: function () {
        console.log('before the re-rendering of the component takes place.');
    },
    componentDidUpdate: function () {
        console.log('receives arguments like prevState --> prevState was changed to current State.');
    },
    componentWillUnmount: function () {
        console.log('the end of the component’s lifecycle.');
    },
    // Add one
    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    // Minus one
    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    // Create div and buttons    
    render() {
        return React.createElement('div', {id: 'counter'}, this.state.counter,
            React.createElement('button', {onClick: this.increment}, 'Add 1'),
            React.createElement('button', {onClick: this.decrement}, 'Minus 1')
        )
    }
});
// Render elements
var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
