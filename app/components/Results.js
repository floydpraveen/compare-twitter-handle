var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;
var Container = require('./Container');


function Results (props) {
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <Container>
    	<h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
  	   <UserDetailsWrapper header="Winner">
    	   <UserDetails info={props.usersInfo[winningIndex]} score={props.scores[winningIndex]} />
       </UserDetailsWrapper>
       <UserDetailsWrapper header="Loser">
         <UserDetails info={props.usersInfo[losingIndex]} score={props.scores[losingIndex]}/>
      </UserDetailsWrapper>
	<div className='col-sm-12' style={styles.space}>
        <Link to='/twitterHandleOne'>
            <button type='button' className='btn btn-lg btn-danger'>Restart</button>
        </Link>
    </div>
  	</div>
  </Container>)
}


Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  usersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}
module.exports = Results;
