var React = require('react');
var ScreenName = require('../components/ScreenName');

var ScreenNameContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            username: ''
        }
    },
    handleSubmitUser: function(e) {
        e.preventDefault();
        var username = this.state.username;
        this.setState({
            username: ''
        });

        if (this.props.routeParams.twitterHandleOne) {
            this.context.router.push({
                pathname: '/showUserDetails',
                query: {
                    twitterHandleOne: this.props.routeParams.twitterHandleOne,
                    twitterHandleTwo: this.state.username,
                }
            })
        } else {
            this.context.router.push('/twitterHandleTwo/' + this.state.username)
        }
    },
    handleUpdateUser: function(event) {
        this.setState({
            username: event.target.value
        });
    },
    render: function() {
        return ( <ScreenName onSubmitUser = { this.handleSubmitUser }
            onUpdateUser = { this.handleUpdateUser }
            header = { this.props.route.header }
            username = { this.state.username }
            />
        )
    }
});

module.exports = ScreenNameContainer;
