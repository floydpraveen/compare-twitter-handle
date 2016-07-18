var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Container = require('./Container');

function Home (){
        return (
         <Container>
    		<h1>Popular Twitter Handle</h1>
    		<p className="lead">Let's the game begin..</p>
    		<Link to='/twitterHandleOne'>
    			<button className="btn btn-lg btn-primary">Get Started</button>
    		</Link>
    	</Container>
        );
    }
module.exports = Home;
