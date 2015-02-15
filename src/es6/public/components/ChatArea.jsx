import ChatMessage from "ChatMessage";
import Message from "../models/Message";

var ChatArea = React.createClass({
  render: function(){
    var testMessage = new Message(App.User, "test");

    return (
      <ChatMessage message={testMessage} />
    );
  }
});

export default ChatArea;
