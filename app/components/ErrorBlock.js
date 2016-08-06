var React = require('react');

function  ErrorBlock(props) {
  return (
        <div className="alert alert-warning fade in"> {props.error} </div>
    )
}

module.exports = ErrorBlock
