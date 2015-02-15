class ChangeCallback{
  constructor(callback, extras = {}){
    this.callback = callback;
    this.extras = extras;
  }
}

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

    _.each(this.onChangeCallbacks, (changeCallback) =>{
      changeCallback.callback(this, key, newVal, changeCallback.extras);
    })
  }

  onChange(callback, extras = {}){
    this._checkOnChangeCallbacks();

    var changeCallback = new ChangeCallback(callback, extras);

    this.onChangeCallbacks.push(changeCallback);
  }
}

module.exports = BaseModel;
