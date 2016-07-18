var React = require('react');
var PropTypes = React.PropTypes

function Rating(props) {
    var stars = [];
    for (var i = 0; i < props.rating; ++i) {
        stars.push( <span className = "glyphicon glyphicon-star" key={i}/> );
    }
    return <div> {stars} </div>
}

    Rating.propTypes = {
        rating: PropTypes.number
    }

    module.exports = Rating;
