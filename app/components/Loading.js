var React = require('react');
var styles = require('../styles');

var Loading = React.createClass({
  propTypes: {
    speed: React.PropTypes.number,
    show: React.PropTypes.bool,
    text: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      speed: 300,
      text: 'Loading'
    };
  },

  getInitialState: function () {
    this.originalText = this.props.text;

    return {
      text: this.originalText
    };
  },

  componentDidMount: function () {
    var stopper = this.originalText + '...';

    this.interval = setInterval(function() {
      var nextText = this.state.text === stopper
        ? this.originalText
        : this.state.text + '.';


      this.setState({
        text: nextText
      });
    }.bind(this), this.props.speed);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  render: function () {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    );
  }
});

module.exports = Loading;
