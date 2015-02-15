var BaseModel = require("./BaseModel.jsx");

class User extends BaseModel {
  constructor(name, email){
    super();
    
    this.name = name;
    this.email = email;
  }
}

module.exports = User;
