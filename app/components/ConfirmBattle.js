var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Loading = require('./Loading');
var MainContainer = require('../containers/MainContainer');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');

function ConfirmBattle(props) {
  var isLoading = props.isLoading === true;
  return isLoading
    ? <Loading />
    : (<MainContainer headline="Confirm Players">
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Player One'>
          <UserDetails info={props.playersInfo[0]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Player Two'>
          <UserDetails info={props.playersInfo[1]}/>
        </UserDetailsWrapper>
      </div>
      <div className='col-sm-8 col-sm-offset-2'>
        <div className='col-sm-12' style={styles.space}>
          <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!
          </button>
        </div>
        <div className='col-sm-12' style={styles.space}>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
          </Link>
        </div>
      </div>
    </MainContainer>);
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
};

module.exports = ConfirmBattle;