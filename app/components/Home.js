var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('../containers/MainContainer');

function Home () {
  return (
    <MainContainer headline="Github Battle">
      <p className='lead'>What even is a jQuery?</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </MainContainer>
  );
}

module.exports = Home;
