var ChatMessage = require("./ChatMessage.jsx");
var Message = require("../models/Message.jsx");

var ChatArea = React.createClass({
  render: function(){
    var testMessage = new Message(App.User, "test");

    return (
      <ChatMessage message={testMessage} />
    );
  }
});

module.exports = ChatArea;
