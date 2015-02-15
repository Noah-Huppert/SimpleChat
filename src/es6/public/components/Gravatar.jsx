var md5 = require("MD5");

var Gravatar = React.createClass({
  render: function(){
    return (
      <img className={this.props.className} alt={`${this.props.email} Gravatar`} src={this._getGravatarImage()} />
    );
  },
  _getGravatarImage: function(){
    var emailHash = md5(this.props.email);

    return `https://www.gravatar.com/avatar/${emailHash}`;
  }
});

module.exports = Gravatar;
