var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    render: function () {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));

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

render: function () {
    return (
        // zauważ, że metoda zwraca jeden element!
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