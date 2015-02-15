var User = require("./User.jsx");
var Message = require("./Message.jsx");

class SimpleChat{
  constructor(){
    this.User = new User("", "");
    this.Messages = [];
  }

  createModelClass(options){
    var _options = _.clone(options);

    options._bindMetaId = uuid.v4();

    options.componentWillMount = function(){
      if(options.models === undefined || typeof options.models !== "object"){
        throw "options.models must be defined and an object";
      }

      _.each(options.models, (model, key) => {
        if(model._bindMeta === undefined){
          model._bindMeta = {};
        }

        model._bindMeta[options._bindMetaId] = key;

        model.onChange((model, key, oldVal, newVal) => {
          options._onModelChange(this, model, key, oldVal, newVal);
        });
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

    options._onModelChange = function(self, model, key, oldVal, newVal) {
      var state = {};

      var stateKey = model._bindMeta[options._bindMetaId];

      state[stateKey] = model;

      self.setState(state);
    };

    return React.createClass(options);
  }
}

module.exports = SimpleChat;
