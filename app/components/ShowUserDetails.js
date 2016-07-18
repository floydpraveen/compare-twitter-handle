var React = require('react');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Container = require('./Container');

function ShowUserDetails (props){
		return props.isLoading === true
		? <p> Loading...</p>
		: <Container>
    <h1>Twitter Handle Details</h1>
    		<div className="col-sm-8 col-sm-offset-2">
    			<UserDetailsWrapper header={props.usersInfo[0].name}>
    				<UserDetails info={props.usersInfo[0]} />
    			</UserDetailsWrapper>
    			<UserDetailsWrapper header={props.usersInfo[1].name}>
    				<UserDetails info={props.usersInfo[1]} />
    			</UserDetailsWrapper>
    		</div>
    		<div className="col-sm-8 col-sm-offset-2">
    			<div className="col-sm-12" style={styles.space}>
    				 <button className="btn btn-lg btn-success" onClick={props.onInitiateBattle}> Compare </button>
    			</div>
    			<div className='col-sm-12' style={styles.space}>
           	  <Link to='/twitterHandleOne'>
              		<button type='button' className='btn btn-lg btn-danger'>Exit</button>
           		</Link>
          </div>
    		</div>
    	 </Container>
}

ShowUserDetails.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle : PropTypes.func.isRequired,
  usersInfo: PropTypes.array.isRequired
}


module.exports = ShowUserDetails;
