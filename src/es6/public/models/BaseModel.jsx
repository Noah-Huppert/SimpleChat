class BaseModel {
  constructor(){
    this.onChangeCallbacks = [];
  }

  set(key, value){
    var oldValue = _.clone(this[key]);

    if(this[key] !== undefined){
      this[key] = value;
      this._fireChange(this, key, oldValue, this[key]);
    } else {
      console.warn(`Attempting to set non-existant property "${key}"`);
    }
  }

  _checkOnChangeCallbacks(){
    if(this.onChangeCallbacks === undefined){
      this.onChangeCallbacks = [];
    }
  }

  _fireChange(model, key, oldVal, newVal){
    this._checkOnChangeCallbacks();

    _.each(this.onChangeCallbacks, (callback) =>{
      callback(this, key, oldVal, newVal);
    })
  }

  onChange(callback){
    this._checkOnChangeCallbacks();

    this.onChangeCallbacks.push(callback);
  }
}

module.exports = BaseModel;
