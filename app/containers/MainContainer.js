var React = require('react');
var styles = require('../styles');

var MainContainer = function (props) {

  var className = props.className ? ' ' + props.className : '';

  return (
    <div className={'jumbotron col-sm-12 text-center' + className} style={styles.transparentBg}>
      {props.headline && <h1>{props.headline}</h1>}
      {props.children}
    </div>
  )
};

MainContainer.propTypes = {
  headline: React.PropTypes.string
};

module.exports = MainContainer;
