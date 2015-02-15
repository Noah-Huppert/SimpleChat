var Paper = mui.Paper;

var Gravatar = require("./Gravatar.jsx");

var ChatMessage = App.createModelClass({
  models: {
    user: App.User
  },
  render: function(){
    return (
      <Paper zDepth={2} className="chatMessage">
        <Gravatar className="chatMessage-gravatar" email={this.state.user.email} />
        <span className="chatMessage-name">{this.state.user.name}</span>
      </Paper>
    );
  }
});

module.exports = ChatMessage;
