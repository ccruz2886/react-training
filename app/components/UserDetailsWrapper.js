var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper (props) {
  return (
    <div className='col-sm-6'>
      <h3 className='lead'>{props.header}</h3>
      {props.children}
    </div>
  );
}

UserDetailsWrapper.propTypes = {
  header: PropTypes.string.isRequired
};

module.exports = UserDetailsWrapper;
