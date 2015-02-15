import User from "User";
import Message from "Message";
import EventBus from "EventBus";

class SimpleChat{
  constructor(){
    this.User = new User("", "", "");
    this.EventBus = new EventBus();
    this.Messages = [];
    this.Users = [];
  }

  createModelClass(options){
    var _options = _.clone(options);

    options.componentWillMount = function(){
      if(options.models === undefined || typeof options.models !== "object"){
        throw "options.models must be defined and an object";
      }

      _.each(options.models, (model, key) => {
        model.onChange((model, key, value, extras) => {
          options._onModelChange(this, model, key, value, extras);
        }, {stateKey: key});
      });

      if(_options.componentWillMount !== undefined){
        _options.componentWillMount();
      }
    };

    options.getInitialState = function(){
      var state = {};

      _.each(options.models, function(value, key){
        state[key] = value;
      });

      if(_options.getInitialState !== undefined){
        state = _.extend(state, options.getInitialState());
      }

      return state;
    };

    options._onModelChange = function(self, model, key, value, extras) {
      var state = {};

      state[extras.stateKey] = model;

      self.setState(state);
    };

    return React.createClass(options);
  }
}

export default SimpleChat;
