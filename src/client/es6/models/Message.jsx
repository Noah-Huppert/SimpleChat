import BaseModel from "BaseModel";

class Message extends BaseModel{
  constructor(user, content){
    super();

    this.user = user;
    this.content = content;
  }
}

export default Message;
