var Paper = mui.Paper;

import Gravatar from "Gravatar";

var ChatMessage = App.createModelClass({
  models: {
    user: App.User
  },
  render: function(){
    return (
      <Paper zDepth={2} className="chatMessage">
        <Gravatar className="chatMessage-gravatar" email={this.state.user.email} />
        <span className="chatMessage-name">{this.state.user.name}</span>
        <span className="chatMessage-content">{this.state.message}</span>
      </Paper>
    );
  }
});

export default ChatMessage;
