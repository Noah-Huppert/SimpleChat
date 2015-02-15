var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;
var Dialog = mui.Dialog;
var FlatButton = mui.FlatButton;
var TextField = mui.TextField;
var FontIcon = mui.FontIcon;

var ChatArea = require("./ChatArea.jsx");

var Main = React.createClass({
  render: function(){
    var dialogActions = [
      <FlatButton key={0} label="Cancel" secondary={true} onTouchTap={this._onChangeUserInfoDialogCancel} />,
      <FlatButton key={1} label="Submit" primary={true} onTouchTap={this._onChangeUserInfoDialogSubmit} />
    ];

    return (
      <AppCanvas predefinedLayout={1} show={false}>
        <AppBar title="Simple Chat" onMenuIconButtonTouchTap={this._onMenuButtonTap} />

        <div className="content">
          <ChatArea />
        </div>

        <Dialog ref="changeUserInfoDialog" className="header-changeUserInfoDialog" title="Change User Information" actions={dialogActions}>
          <TextField ref="changeUserInfoDialog_name" defaultValue={App.User.name} hintText="Display Name" floatingLabelText="Display Name" type="text" />
          <TextField ref="changeUserInfoDialog_email" defaultValue={App.User.email} hintText="Gravatar Email" floatingLabelText="Gravatar Email" type="email" />
        </Dialog>
      </AppCanvas>
    );
  },
  _onMenuButtonTap: function(){
    this.refs.changeUserInfoDialog.show();
  },
  _onChangeUserInfoDialogCancel: function(){
    this.refs.changeUserInfoDialog.dismiss();
  },
  _onChangeUserInfoDialogSubmit: function(){
    App.User.set("name", this.refs.changeUserInfoDialog_name.getValue());
    App.User.set("email", this.refs.changeUserInfoDialog_email.getValue());

    this.refs.changeUserInfoDialog.dismiss();
  }
});

module.exports = Main;
