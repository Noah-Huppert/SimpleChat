import SimpleChat from "models/SimpleChat";
import Main from "components/Main";

window.App = new SimpleChat();

$(document).ready(function(){
  React.render(<Main />, document.body);
});
