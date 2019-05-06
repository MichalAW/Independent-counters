var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function () {
        return React.createElement('div', {
                onClick: this.increment
            },
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

render: function() {
    return (
        // This method returns only one element!
        React.createElement('div', {
                className: 'contactItem'
            },
            React.createElement('img', {
                className: 'contactImage',
                src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
            }),
            React.createElement('p', {
                className: 'contactLabel'
            }, 'Imię: ' + this.props.item.firstName),
            React.createElement('p', {
                className: 'contactLabel'
            }, 'Nazwisko: ' + this.props.item.lastName),
            React.createElement('a', {
                    className: 'contactEmail',
                    href: 'mailto:' + this.props.item.email
                },
                this.props.item.email
            )
        )
    )
}
//my own pre-work:
var Increment = React.createClass({
    // With createReactClass(), provide a separate getInitialState method that returns the initial state:
    getInitialState: function () {
        return {
            counter: 0
        };
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
        return React.createElement('div', {id:'counter', this.state.counter},
            React.createElement('button', {this.increcement}, 'Add 1'),
            React.createElement('button', {this.decrement}, 'Minus 1')
        )
    }
});
// Render elements
var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
React.render( < Increment / > , document.getElementById('container'));
