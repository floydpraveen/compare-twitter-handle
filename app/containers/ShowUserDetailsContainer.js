var React = require('react');
var ShowUserDetails = require('../components/ShowUserDetails');
var twitterHelpers = require('../utils/twitterHelpers');

var ShowUserDetailsContainer = React.createClass({

            contextTypes: {
                router: React.PropTypes.object.isRequired
            },

            getInitialState: function() {
                return {
                    isLoading: true,
                    usersInfo: []
                }
            },

            componentDidMount() {
                var query = this.props.location.query;
                twitterHelpers.getTwitteratiesInfo([query.twitterHandleOne, query.twitterHandleTwo]).then(function(twitteraties) {
                    this.setState({
                        isLoading: false,
                        usersInfo: [JSON.parse(twitteraties[0].result.userData), JSON.parse(twitteraties[1].result.userData)]
                    })
                }.bind(this))
            },

            handleInitiateBattle: function() {
                this.context.router.push({
                    pathname: '/results',
                    state: {
                        usersInfo: this.state.usersInfo
                    }
                })
            },

            render: function() {
                return ( <ShowUserDetails isLoading = { this.state.isLoading }
                    usersInfo = { this.state.usersInfo }
                    onInitiateBattle = { this.handleInitiateBattle }
                    /> );
                }

            });

module.exports = ShowUserDetailsContainer;
