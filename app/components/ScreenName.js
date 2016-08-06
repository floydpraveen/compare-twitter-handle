var React = require('react');
var PropTypes = React.PropTypes;
var Container = require('./Container');
var ErrorBlock = require('./ErrorBlock')

function ScreenName (props) {
  let error = '';
  if(props.error){
    error = <ErrorBlock error={props.error} ></ErrorBlock>
  }
  return (
    <Container>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className='form-control'
              onChange={props.onUpdateUser}
              placeholder='Twitter handle'
              type='text'
              value={props.username} />
          </div>
          {error}
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>
        </form>
      </div>
    </Container>
  )
}

ScreenName.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

module.exports = ScreenName
