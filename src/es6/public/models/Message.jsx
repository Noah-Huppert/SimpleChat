var BaseModel = require("./BaseModel.jsx");

class Message extends BaseModel{
  constructor(user, content){
    super();

    this.user = user;
    this.content = content;
  }
}

module.exports = Message;
