var React = require('react');
var PropTypes = React.PropTypes;
var MainContainer = require('../containers/MainContainer');

function Prompt (props) {
  return (
    <MainContainer headline={props.header} className="col-sm-6 col-sm-offset-3">
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className='form-control'
              onChange={props.onUpdateUser}
              placeholder='Github Username'
              type='text'
              value={props.username} />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>
        </form>
      </div>
    </MainContainer>
  );
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

module.exports = Prompt;
