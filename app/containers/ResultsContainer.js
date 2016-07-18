var React = require('react');
var twitterHelpers = require('../utils/twitterHelpers');
var Results = require('../components/Results');


var ResultsContainer = React.createClass({

    getInitialState: function() {
        return {
            isLoading: true,
            scores: []
        }
    },

    componentDidMount: function() {
        var stars = twitterHelpers.compare(this.props.location.state.usersInfo);
        this.setState({
            isLoading: false,
            scores: stars
        })
    },

    render: function() {
        return ( <Results usersInfo = { this.props.location.state.usersInfo }
            isLoading = { this.state.isLoading }
            scores = { this.state.scores }
            />
        )
    }

});

module.exports = ResultsContainer;
