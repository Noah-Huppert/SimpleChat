var SimpleChat = require("./models/SimpleChat.jsx");

window.App = new SimpleChat();

$(document).ready(function(){
  var Main = require("./components/Main.jsx");

  React.render(<Main />, document.body);
});
