import BaseModel from "BaseModel";

class User extends BaseModel {
  constructor(id, name, email){
    super();

    this.id = id;
    this.name = name;
    this.email = email;
  }
}

export default User;
