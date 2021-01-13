TRAFFIC.STATE = [{RED: 0, GREEN: 1}];

TRAFFIC.ControlSignals = function (intersection) {
  this.intersection = intersection;
  this.onTick = TRAFFIC.binding(this.onTick, this);
  this.time = 0;
  this.flipMultiplier = 1 + (TRAFFIC.random() * 0.4 - 0.2);
  this.stateNum = 0;
  this.static_states = [];

  Object.defineProperty(this, 'flipInterval', {
    get: function () {
      return this.flipMultiplier * TRAFFIC.settings.lightsFlipInterval;
    }
  });

  Object.defineProperty(this, 'state', {
    get: function() {
      if (this.static_states.length > 0) {
        return (this.static_states);
      } else {
        let stringState = this.states[this.stateNum % this.states.length];
        if (this.intersection.roads.length <= 2) {
          stringState = ['LFR', 'LFR', 'LFR', 'LFR'];
        }
        return (Array.from(stringState).map((x) => this._decode(x)));
      }
    },
    set: function(states) {
      if (this.intersection.roads.length > 2) {
        return this.static_states = states;
      }
    }
  });
}

TRAFFIC.ControlSignals.prototype = {
  constructor: TRAFFIC.ControlSignals,
  _decode: function (str) {
    var state;
    state = [0, 0, 0];
    if (TRAFFIC.indexOf.call(str, 'L') >= 0) state[0] = 1;
    if (TRAFFIC.indexOf.call(str, 'F') >= 0) state[1] = 1;
    if (TRAFFIC.indexOf.call(str, 'R') >= 0) state[2] = 1;
    return state;
  },
  flip: function () {
    return this.stateNum += 1;
  },
  onTick: function (delta) {
    this.time += delta;
    if (this.time > this.flipInterval) {
      this.flip();
      return this.time -= this.flipInterval;
    }
  },
  _encode: function (state_array) {
    let state_string = '';
    if (state_array[0]) {
      state_string += 'L';
    }
    if (state_array[1]) {
      state_string += 'F';
    }
    if (state_array[2]) {
      state_string += 'R';
    }
    return state_string;
  },
  calculateStaticState: function (state_string) {
    const state = this._decode(state_string);
    return state;
  },
  setStringStates: function (strings_array) {
    const that = this;
    const state_array = [];
    strings_array.forEach(
      string_array => state_array.push(that._decode(string_array)));
    return this.state = state_array;
  }
}

TRAFFIC.ControlSignals.prototype.states = [['L', '', 'L', ''], ['FR', '', 'FR', ''], ['', 'L', '', 'L'], ['', 'FR', '', 'FR']];
