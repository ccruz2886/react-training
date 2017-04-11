var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var Loading = require('./Loading');
var MainContainer = require('../containers/MainContainer');

// style helpers
var styles = require('../styles');

// components
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');

function StartOver(props) {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to="/playerOne">
        <button type="button" className="btn btn-large btn-danger">Start Over</button>
      </Link>
    </div>
  );
}

function Results(props) {
  if (props.isLoading) {
    return (
      <Loading show={props.isLoading} />
    );
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer headline="It's a tie!!">
        <StartOver />
      </MainContainer>
    );
  }

  var winningIndex = 0;
  var loosingIndex = 1;

  if (props.scores[0] < props.scores[1]) {
    winningIndex = 1;
    loosingIndex = 0;
  }

  return (
    <MainContainer headline="Results">
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Looser">
          <UserDetails score={props.scores[loosingIndex]} info={props.playersInfo[loosingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

module.exports = Results;
