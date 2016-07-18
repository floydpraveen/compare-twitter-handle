var React = require('react');
var PropTypes = React.PropTypes
var Rating = require('./Rating');

function UserDetails (user) {
  return (
    <div>
      {user.score && <li className="list-group-item"> Rating: <Rating rating={user.score} /></li>}
      <li className="list-group-item"> <img src={user.info.profile_image_url} className="img-rounded img-responsive center-block"/></li>
      <li className="list-group-item">Name: {user.info.name}</li>
      <li className="list-group-item">Screen Name: {user.info.screen_name}</li>
      <li className="list-group-item">Location: {user.info.location}</li>
      <li className="list-group-item">Followers: {user.info.followers_count}</li>
      <li className="list-group-item">Following: {user.info.friends_count}</li>
      <li className="list-group-item">Verified: {user.info.verified === true ? "Yes" : "No"}</li>
    </div>
  )
}

UserDetails.propTypes = {
    profile_image_url: PropTypes.string,
    name: PropTypes.string,
    screen_name: PropTypes.string,
    followers_count: PropTypes.number,
    friends_count: PropTypes.number,
    location: PropTypes.string,
    verified: PropTypes.bool
}

module.exports = UserDetails;
