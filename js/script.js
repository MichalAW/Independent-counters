//my own pre-work:
var Counter = React.createClass({
    // With createReactClass(), provide a separate getInitialState method that returns the initial state:
    getInitialState: function () {
        return {
            counter: 0
        };
    },
    componentDidMount: function () {
        console.log('Component Did Mount');
    },
    componentDidUpdate: function () {
        console.debug('Component Did Update');
    },
    componentWillUnmount: function () {
        console.debug('Component Will Umount');
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
