var gridSize = 32;
var halfGrid = gridSize / 2;

var map_1_data = {
    "intersections": {
        "intersection1": {
            "id": "intersection1",
            "rect": {
                "x": 1,
                "y": 0,
                "_width": 14,
                "_height": 14
            }
        },
        "intersection2": {
            "id": "intersection2",
            "rect": {
                "x": -2,
                "y": 0,
                "_width": 14,
                "_height": 14
            }
        },
        "intersection3": {
            "id": "intersection3",
            "rect": {
                "x": -2,
                "y": -2,
                "_width": 14,
                "_height": 14
            }
        },
        "intersection4": {
            "id": "intersection4",
            "rect": {
                "x": -2,
                "y": 1,
                "_width": 14,
                "_height": 14
            }
        },
        "intersection5": {
            "id": "intersection5",
            "rect": {
                "x": 1,
                "y": 1,
                "_width": 14,
                "_height": 14
            }
        },
        "intersection6": {
            "id": "intersection6",
            "rect": {
                "x": 1,
                "y": -2,
                "_width": 14,
                "_height": 14
            }
        },
        "intersection7": {
            "id": "intersection7",
            "rect": {
                "x": 2,
                "y": -2,
                "_width": 14,
                "_height": 14
            }
        },
        "intersection8": {
            "id": "intersection8",
            "rect": {
                "x": 2,
                "y": 0,
                "_width": 14,
                "_height": 14
            }
        },
        "intersection9": {
            "id": "intersection9",
            "rect": {
                "x": 2,
                "y": 1,
                "_width": 14,
                "_height": 14
            }
        },
        "intersection10": {
            "id": "intersection10",
            "rect": {
                "x": 3,
                "y": 0,
                "_width": 14,
                "_height": 14
            }
        },
        "intersection11": {
            "id": "intersection11",
            "rect": {
                "x": -2,
                "y": 2,
                "_width": 14,
                "_height": 14
            }
        }
    },
    "roads": {
        "road1": {
            "id": "road1",
            "name": "???????????? ????????????",
            "source": "intersection1",
            "target": "intersection8",
            "maxSpeed": 30
        },
        "road2": {
            "id": "road2",
            "name": "?????????? ??????????",
            "source": "intersection1",
            "target": "intersection6",
            "maxSpeed": 30
        },
        "road3": {
            "id": "road3",
            "name": "??????????",
            "source": "intersection1",
            "target": "intersection2",
            "maxSpeed": 30
        },
        "road4": {
            "id": "road4",
            "name": "?????????? ??????????",
            "source": "intersection1",
            "target": "intersection5",
            "maxSpeed": 30
        },

        "road5": {
            "id": "road5",
            "name": "??????????",
            "source": "intersection2",
            "target": "intersection1",
            "maxSpeed": 10
        },
        "road6": {
            "id": "road6",
            "name": "???????? ??????????",
            "source": "intersection2",
            "target": "intersection3",
            "maxSpeed": 10
        },
        "road7": {
            "id": "road7",
            "name": "??????????",
            "source": "intersection2",
            "target": "intersection4",
            "maxSpeed": 10
        },

        "road8": {
            "id": "road8",
            "name": "???????? ??????????",
            "source": "intersection3",
            "target": "intersection2",
            "maxSpeed": 30
        },

        "road9": {
            "id": "road9",
            "name": "??????????",
            "source": "intersection4",
            "target": "intersection5",
            "maxSpeed": 10
        },
        "road10": {
            "id": "road10",
            "name": "???????????? ????????????",
            "source": "intersection4",
            "target": "intersection2",
            "maxSpeed": 10
        },
        "road11": {
            "id": "road11",
            "name": "?????????? ??????????",
            "source": "intersection4",
            "target": "intersection11",
            "maxSpeed": 10
        },

        "road12": {
            "id": "road12",
            "name": "???????????? ????????????",
            "source": "intersection5",
            "target": "intersection9",
            "maxSpeed": 30
        },
        "road13": {
            "id": "road13",
            "name": "?????????? ??????????",
            "source": "intersection5",
            "target": "intersection1",
            "maxSpeed": 20
        },
        "road14": {
            "id": "road14",
            "name": "????????????",
            "source": "intersection5",
            "target": "intersection4",
            "maxSpeed": 20
        },

        "road15": {
            "id": "road15",
            "name": "?????????? ??????????",
            "source": "intersection6",
            "target": "intersection1",
            "maxSpeed": 10
        },
        "road16": {
            "id": "road16",
            "name": "???????????? ????????????",
            "source": "intersection6",
            "target": "intersection7",
            "maxSpeed": 10
        },

        "road17": {
            "id": "road17",
            "name": "???????????? ????????????",
            "source": "intersection7",
            "target": "intersection6",
            "maxSpeed": 10
        },
        "road18": {
            "id": "road18",
            "name": "???????????? ??????",
            "source": "intersection7",
            "target": "intersection8",
            "maxSpeed": 20
        },

        "road19": {
            "id": "road19",
            "name": "???????????? ????????????",
            "source": "intersection8",
            "target": "intersection10",
            "maxSpeed": 20
        },
        "road20": {
            "id": "road20",
            "name": "???????????? ??????",
            "source": "intersection8",
            "target": "intersection7",
            "maxSpeed": 10
        },
        "road21": {
            "id": "road21",
            "name": "???????????? ??????????????",
            "source": "intersection8",
            "target": "intersection1",
            "maxSpeed": 10,
            "possibleIntersections": ["intersection6", "intersection2"]
        },  // have possible intersections
        "road22": {
            "id": "road22",
            "name": "????????????",
            "source": "intersection8",
            "target": "intersection9",
            "maxSpeed": 10
        },

        "road23": {
            "id": "road23",
            "name": "???????????? ??????????????",
            "source": "intersection9",
            "target": "intersection8",
            "maxSpeed": 20
        },
        "road24": {
            "id": "road24",
            "name": "????????????",
            "source": "intersection9",
            "target": "intersection5",
            "maxSpeed": 20
        },

        "road25": {
            "id": "road25",
            "name": "????????????",
            "source": "intersection10",
            "target": "intersection8",
            "maxSpeed": 10
        },

        "road26": {
            "id": "road26",
            "name": "?????????? ??????????",
            "source": "intersection11",
            "target": "intersection4",
            "maxSpeed": 10
        }
    },
    "carsNumber": 40,
    "time": 10,
    "startRoadsId": [
        'road8',
        'road25',
        'road26',
    ],
    "startSpecialRoadsId": [
        'road8',
        'road8',
        'road8',
        'road25',
        'road25',
        'road26',
        'road26',
    ],
    challenges: [
        {
            type: 'stop',
            x: [14 * halfGrid, 15 * halfGrid],
            y: [8 * halfGrid - 10, 8 * halfGrid + 10]
        }, {
            type: 'stop',
            x: [-10, +10],
            y: [halfGrid, 2 * halfGrid]
        }, {
            type: 'stop',
            x: [-10, +10],
            y: [14 * halfGrid, 15 * halfGrid]
        }, {
            type: 'heavy',
            roadId: 'road9',
            carsCount: 5
        }, {
            type: 'heavy',
            roadId: 'road14',
            carsCount: 5
        }, {
            type: 'heavy',
            roadId: 'road13',
            carsCount: 15
        }
    ],
    boxes: {
        box1: {
            x: [0, gridSize],
            y: [-halfGrid, halfGrid],
            deliverSide: 'down'
        },
        box2: {
            x: [halfGrid * 15, halfGrid * 17],
            y: [halfGrid * 8, halfGrid * 10],
            deliverSide: 'left'
        },
        box3: {
            x: [0, gridSize],
            y: [15 * halfGrid, 17 * halfGrid],
            deliverSide: 'up'
        },
        box4: {
            x: [-29 * halfGrid, -27 * halfGrid],
            y: [halfGrid * 8, halfGrid * 10],
            deliverSide: 'right'
        },
    }
};
map_1_data.specialCarsNumber = map_1_data.startSpecialRoadsId.length;

// var ctor = function(){};
var breaker = {};

// Save bytes in the minified (but not gzipped) version:
var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

// Create quick reference variables for speed access to core prototypes.
var
    push               = ArrayProto.push,
    slice              = ArrayProto.slice,
    concat             = ArrayProto.concat,
    toString           = ObjProto.toString,
    hasOwnProperty     = ObjProto.hasOwnProperty,
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;
/*if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun, thisArg) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method's new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (fun.call(thisArg, val, i, t)) {
          res.push(val);
        }
      }
    }

    return res;
  };
}  */


var TRAFFIC = {};

TRAFFIC.TYPE_OF_CARS = [
   { w:1.8, l:4.8, h:1.4, m:'car001', name:'fordM' },
   { w:1.8, l:4.5, h:1.8, m:'car002', name:'vaz' },
   { w:2.2, l:5.0, h:1.5, m:'car003', name:'coupe' },
   { w:2.2, l:5.2, h:1.9, m:'car004', name:'c4' },
   { w:2.2, l:5.2, h:1.8, m:'car005', name:'ben' },
   { w:2.1, l:5.4, h:1.7, m:'car006', name:'taxi' },
   { w:2.2, l:5.4, h:1.9, m:'car007', name:'207' },
   { w:2.3, l:5.9, h:1.7, m:'car008', name:'police' },
   { w:2.7, l:6.2, h:2.6, m:'car009', name:'van1' },
   { w:2.2, l:6.6, h:2.8, m:'car010', name:'van2' },
   { w:2.8, l:7.0, h:3.2, m:'car011', name:'van3' },
   { w:2.8, l:8.9, h:3.9, m:'car012', name:'truck1' },
   { w:3.0, l:10.6, h:3.4, m:'car013', name:'truck1' },
   { w:3.0, l:12.7, h:3.4, m:'car014', name:'bus' },
];

TRAFFIC.settings = {
    lightsFlipInterval: 20,
    gridSize: gridSize,
    defaultTimeFactor: 5,
    maxSpeed: 30,
    competitionType: "logistic", // valid values: traffic, logistic
    deliveryStopTime: 3 * 1000,
    flipLights: 5,
};

if (TRAFFIC.settings.competitionType == 'logistic' && map_1_data.specialCarsNumber > 1){
    alert('competition type and special cars number are not compatible!');
    throw new Error();
}

TRAFFIC.abs = Math.abs;
TRAFFIC.sqrt = Math.sqrt;
TRAFFIC.atan2 = Math.atan2;
TRAFFIC.random = Math.random;
TRAFFIC.max = Math.max;
TRAFFIC.min = Math.min;
TRAFFIC.PI = Math.PI;
/*var nativeReduce = null;
var nativeForEach = null;
var nativeMap = null;
var nativeBind = null;*/

TRAFFIC.binding = function(fn, me) {
	return function(){ return fn.apply(me, arguments); };
}
TRAFFIC.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    //if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      // ctor.prototype = func.prototype;
      // var self = new ctor;
      // ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
}

TRAFFIC.indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };


//TRAFFIC.lerp = function (a, b, percent) { return a + (b - a) * percent; }
//V.rand = function (a, b, n) { return V.lerp(a, b, Math.random()).toFixed(n || 3)*1;}
//TRAFFIC.rand = function (a, b) { return TRAFFIC.lerp(a, b, Math.random()).toFixed(0)*1;}

TRAFFIC.rand = function(min,max){
    if (max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
}

TRAFFIC.sample = function(obj, n, guard){
    if (n == null || guard) {
        if (obj.length !== +obj.length) obj = TRAFFIC.values(obj);
        return obj[TRAFFIC.rand(obj.length - 1)];
    }
    return TRAFFIC.shuffle(obj).slice(0, Math.max(0, n));
}

TRAFFIC.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    TRAFFIC.each(obj, function(value) {
        rand = TRAFFIC.rand(index++);
        shuffled[index - 1] = shuffled[rand];
        shuffled[rand] = value;
    });
    return shuffled;
};

TRAFFIC.idCounter = {};
TRAFFIC.uniqueId = function(prefix) {
    TRAFFIC.idCounter[prefix] = TRAFFIC.idCounter[prefix] + 1 || 1;
    var id = TRAFFIC.idCounter[prefix] + '';
    return prefix ? prefix + id : id;
}

TRAFFIC.extend = function(obj){
    TRAFFIC.each(slice.call(arguments, 1), function(source) {
        if (source) {
            for (var prop in source) {
                obj[prop] = source[prop];
            }
        }
    });
    return obj;
}

TRAFFIC.reduce = function(obj, iterator, memo, context){
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = TRAFFIC.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    TRAFFIC.each(obj, function(value, index, list) {
        if (!initial) {
            memo = value;
            initial = true;
        } else {
            memo = iterator.call(context, memo, value, index, list);
        }
    });
    //if (!initial) throw new TypeError(reduceError);
    return memo;
}

TRAFFIC.each = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
        for (var i = 0, length = obj.length; i < length; i++) {
           if (iterator.call(context, obj[i], i, obj) === breaker) return;
        }
    } else {
        var keys = TRAFFIC.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
        }
    }
    return obj;
}

TRAFFIC.keys = function(obj) {
    if (!TRAFFIC.isObject(obj)) return [];
    //if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (TRAFFIC.has(obj, key)) keys.push(key);
    return keys;
}

TRAFFIC.isObject = function(obj) {
    return obj === Object(obj);
}

TRAFFIC.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
}

TRAFFIC.values = function(obj) {
    var keys = TRAFFIC.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
        values[i] = obj[keys[i]];
    }
    return values;
}

/*
TRAFFIC.filter = function(fun, Arg) {
   //'use strict';

   // if (this === void 0 || this === null) { throw new TypeError(); }

    var t = Arg//Object(this);
    var len = t.length;// >>> 0;
    //if (typeof fun !== 'function') { throw new TypeError(); }

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method's new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (fun.call(thisArg, val, i, t)) {
          res.push(val);
        }
      }
    }

    return res;
  }*/
TRAFFIC.map = function(obj, iterator, context){
	var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    TRAFFIC.each(obj, function(value, index, list) {
        results.push(iterator.call(context, value, index, list));
    });
    return results;
}

Number.prototype.between = function(min, max) {
    return this > min && this < max;
};
Number.prototype.betweenArr = function(limits) {
    return this > limits[0] && this < limits[1];
}

Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0)
}


var challenges = TRAFFIC.shuffle(map_1_data.challenges);
var manualChallenge = challenges.shift();
var startTimes = [10, 20];
var challengeDuration = 5 * TRAFFIC.settings.flipLights;
var challengeCount = startTimes.length;

if (challengeCount != startTimes.length) {
    alert('challenges and startTimes are not compatible!');
    throw new Error();
}

for (var i = 0; i < challengeCount; i++) {
    challenges[i].startTime = startTimes[i];
    challenges[i].endTime = startTimes[i] + challengeDuration;
}

var stopChallenges = challenges.filter(ch => ch.type == 'stop') || {};
var heavyChallenges = challenges.filter(ch => ch.type == 'heavy') || {};
var heavyChallenge = heavyChallenges.shift();

var paths = ["road26", "road9", "road13", "road3", "road7"];


TRAFFIC.Point = function (_at_x, _at_y) {
    this.x = _at_x != null ? _at_x : 0;
    this.y = _at_y != null ? _at_y : 0;

    Object.defineProperty(this, 'length', {
        get: function() {
            return TRAFFIC.sqrt(this.x * this.x + this.y * this.y);
        }
    });

    Object.defineProperty(this, 'direction', {
        get: function() {
             return TRAFFIC.atan2(this.y, this.x);
        }
    });

    Object.defineProperty(this, 'normalized', {
        get: function() {
            return new TRAFFIC.Point(this.x / this.length, this.y / this.length);
        }
    });
}
TRAFFIC.Point.prototype = {
    constructor: TRAFFIC.Point,
    add : function(o) {
        return new TRAFFIC.Point(this.x + o.x, this.y + o.y);
    },
    subtract : function(o) {
        return new TRAFFIC.Point(this.x - o.x, this.y - o.y);
    },
    mult : function(k) {
        return new TRAFFIC.Point(this.x * k, this.y * k);
    },
    divide : function(k) {
        return new TRAFFIC.Point(this.x / k, this.y / k);
    }
}

TRAFFIC.Rect = function (x, y, _width, _height) {
    this.x = x || 0;
    this.y = y || 0;
    this._width = _width != null ? _width : 0;
    this._height = _height != null ? _height : 0;
}
TRAFFIC.Rect.prototype = {
    constructor: TRAFFIC.Rect,
    copy : function(rect) {
        return new TRAFFIC.Rect(rect.x, rect.y, rect._width, rect._height);
    },
    toJSON : function() {
        return TRAFFIC.extend({}, this);
    },
    area : function() {
        return this.width() * this.height();
    },
    left : function(left) {
        if (left != null) this.x = left;
        return this.x;
    },
    right : function(right) {
        if (right != null) this.x = right - this.width();
        return this.x + this.width();
    },
    width : function(width) {
        if (width != null) this._width = width;
        return this._width;
    },
    top : function(top) {
        if (top != null) this.y = top;
        return this.y;
    },
    bottom : function(bottom) {
        if (bottom != null) this.y = bottom - this.height();
        return this.y + this.height();
    },
    height : function(height) {
        if (height != null)  this._height = height;
        return this._height;
    },
    center : function(center) {
        if (center != null) {
            this.x = center.x - this.width() / 2;
            this.y = center.y - this.height() / 2;
        }
        return new TRAFFIC.Point(this.x + this.width() / 2, this.y + this.height() / 2);
    },
    containsPoint : function(point) {
        var _ref, _ref1;
        return (this.left() <= (_ref = point.x) && _ref <= this.right()) && (this.top() <= (_ref1 = point.y) && _ref1 <= this.bottom());
    },
    containsRect : function(rect) {
        return this.left() <= rect.left() && rect.right() <= this.right() && this.top() <= rect.top() && rect.bottom() <= this.bottom();
    },
    getVertices : function() {
        return [new TRAFFIC.Point(this.left(), this.top()), new TRAFFIC.Point(this.right(), this.top()), new TRAFFIC.Point(this.right(), this.bottom()), new TRAFFIC.Point(this.left(), this.bottom())];
    },
    getSide : function(i) {
        var vertices;
        vertices = this.getVertices();
        return new TRAFFIC.Segment(vertices[i], vertices[(i + 1) % 4]);
    },
    getSectorId : function(point) {
        var offset;
        offset = point.subtract(this.center());
        if (offset.y <= 0 && TRAFFIC.abs(offset.x) <= TRAFFIC.abs(offset.y)) return 0;
        if (offset.x >= 0 && TRAFFIC.abs(offset.x) >= TRAFFIC.abs(offset.y)) return 1;
        if (offset.y >= 0 && TRAFFIC.abs(offset.x) <= TRAFFIC.abs(offset.y)) return 2;
        if (offset.x <= 0 && TRAFFIC.abs(offset.x) >= TRAFFIC.abs(offset.y)) return 3;
        throw Error('algorithm error');
    },
    getSector : function(point) {
        return this.getSide(this.getSectorId(point));
    }
}

TRAFFIC.Curve = function (_at_A, _at_B, _at_O, _at_Q) {
    this.A = _at_A;
    this.B = _at_B;
    this.O = _at_O;
    this.Q = _at_Q;
    this.AB = new TRAFFIC.Segment(this.A, this.B);
    this.AO = new TRAFFIC.Segment(this.A, this.O);
    this.OQ = new TRAFFIC.Segment(this.O, this.Q);
    this.QB = new TRAFFIC.Segment(this.Q, this.B);
    this._length = null;

    Object.defineProperty(this, 'length', {
        get: function() {
            var i, point, pointsNumber, prevoiusPoint, _i;
            if (this._length == null) {
                pointsNumber = 10;
                prevoiusPoint = null;
                this._length = 0;
                for (i = _i = 0; 0 <= pointsNumber ? _i <= pointsNumber : _i >= pointsNumber; i = 0 <= pointsNumber ? ++_i : --_i) {
                    point = this.getPoint(i / pointsNumber);
                    if (prevoiusPoint) { this._length += point.subtract(prevoiusPoint).length; }
                    prevoiusPoint = point;
                }
            }
            return this._length;
        }
    });
}
TRAFFIC.Curve.prototype = {
    constructor: TRAFFIC.Curve,
    getPoint : function(a) {
        var p0, p1, p2, r0, r1;
        p0 = this.AO.getPoint(a);
        p1 = this.OQ.getPoint(a);
        p2 = this.QB.getPoint(a);
        r0 = (new TRAFFIC.Segment(p0, p1)).getPoint(a);
        r1 = (new TRAFFIC.Segment(p1, p2)).getPoint(a);
        return (new TRAFFIC.Segment(r0, r1)).getPoint(a);
    },
    getDirection : function(a) {
        var p0, p1, p2, r0, r1;
        p0 = this.AO.getPoint(a);
        p1 = this.OQ.getPoint(a);
        p2 = this.QB.getPoint(a);
        r0 = (new TRAFFIC.Segment(p0, p1)).getPoint(a);
        r1 = (new TRAFFIC.Segment(p1, p2)).getPoint(a);
        return (new TRAFFIC.Segment(r0, r1)).direction;
    }
}

TRAFFIC.Segment = function (source, target) {
    this.source = source;
    this.target = target;

    Object.defineProperty(this, 'vector', {
        get: function() {
            return this.target.subtract(this.source);
        }
    });

    Object.defineProperty(this, 'length', {
        get: function() {
             return this.vector.length;
        }
    });

    Object.defineProperty(this, 'direction', {
        get: function() {
            return this.vector.direction;
        }
    });

    Object.defineProperty(this, 'center', {
        get: function() {
            return this.getPoint(0.5);
        }
    });
}
TRAFFIC.Segment.prototype = {
    constructor: TRAFFIC.Segment,
    split : function(n, reverse) {
        var k, order, _i, _j, _k, _len, _ref, _ref1, _results, _results1, _results2;
        order = reverse ? (function() {
            _results = [];
            for (var _i = _ref = n - 1; _ref <= 0 ? _i <= 0 : _i >= 0; _ref <= 0 ? _i++ : _i--){ _results.push(_i); }
                return _results;
        }).apply(this) : (function() {
          _results1 = [];
          for (var _j = 0, _ref1 = n - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; 0 <= _ref1 ? _j++ : _j--){ _results1.push(_j); }
          return _results1;
        }).apply(this);
        _results2 = [];
        for (_k = 0, _len = order.length; _k < _len; _k++) {
            k = order[_k];
            _results2.push(this.subsegment(k / n, (k + 1) / n));
        }
        return _results2;
    },
    getPoint : function(a) {
        return this.source.add(this.vector.mult(a));
    },
    subsegment : function(a, b) {
        var end, offset, start;
        offset = this.vector;
        start = this.source.add(offset.mult(a));
        end = this.source.add(offset.mult(b));
        return new TRAFFIC.Segment(start, end);
    }
}

TRAFFIC.World = function () {
    this.toRemove = [];
    this.onTick = TRAFFIC.bind(this.onTick, this);
    this.set({});

    Object.defineProperty(this, 'instantSpeed', {
        get: function() {
            var speeds;
            speeds = TRAFFIC.map(this.cars.all(), function(car) { return car.speed; });
            if (speeds.length === 0) return 0;
            return (TRAFFIC.reduce(speeds, function(a, b) { return a + b; })) / speeds.length;
        }
    });
}
TRAFFIC.World.prototype = {
    constructor: TRAFFIC.World,
    set : function(obj) {
        if (obj == null) obj = {};
        this.intersections = new TRAFFIC.Pool(TRAFFIC.Intersection, obj.intersections);
        this.roads = new TRAFFIC.Pool(TRAFFIC.Road, obj.roads);
        this.cars = new TRAFFIC.Pool(TRAFFIC.Car, obj.cars);
        return this.carsNumber = 0;
    },
    save : function() {
        var data;
        data = TRAFFIC.extend({}, this);
        delete data.cars;
        return window.localStorage.world = JSON.stringify(data);
    },
    load : function() {
        var data, id, intersection, road, _ref, _ref1, _results;
        data = window.localStorage.world;
        data = data && JSON.parse(data);
        if (data == null) return;
        this.clear();
        this.carsNumber = data.carsNumber || 0;
        _ref = data.intersections;
        for (id in _ref) {
            intersection = _ref[id];
            this.addIntersection(TRAFFIC.Intersection.copy(intersection));
        }
        _ref1 = data.roads;
        _results = [];
        for (id in _ref1) {
            road = _ref1[id];
            road = new TRAFFIC.Road().copy(road);
            road.source = this.getIntersection(road.source);
            road.target = this.getIntersection(road.target);
            _results.push(this.addRoad(road));
        }
        return _results;
    },
    generateMap : function(X, Y, linemax, mult) {
        linemax = linemax || 5;
        var gridSize, intersection, map, rect, step, x, y;
        this.clear();
        var inters = map_1_data.intersections;
        map = {};
        gridSize = TRAFFIC.settings.gridSize;
        step = linemax * gridSize;
        this.carsNumber = map_1_data.carsNumber;
        for (var inter in inters) {
            inter = inters[inter];
            x = inter.rect.x;
            y = inter.rect.y;
            if (map[[x, y]] == null) {
                rect = new TRAFFIC.Rect(step * x, step * y, gridSize, gridSize);
                intersection = new TRAFFIC.Intersection(rect);
                this.addIntersection(map[[x, y]] = intersection);
            }
        }

        var roads = map_1_data.roads;
        for (var road in roads) {
            road = roads[road];
            var source = inters[road.source].rect;
            var target = inters[road.target].rect;
            this.addRoad(new TRAFFIC.Road(map[[source.x, source.y]], map[[target.x, target.y]], road.maxSpeed));
            // this.addRoad(new TRAFFIC.Road(map[[target.x, target.y]], map[[source.x, source.y]]));
        }
        this.totalTime = 0;
    },
    clear : function() {
        return this.set({});
    },
    onTick : function(delta, ) {
        if (this.totalTime > heavyChallenge?.startTime) {
            this.carsNumber += heavyChallenge.carsCount;
            this.heavyEnterRoadId = heavyChallenge.roadId;
            this.heavyEnter = true;
            heavyChallenge = heavyChallenges.shift();
        }
        var car, id, intersection, _ref, _ref1, _results;
        if (delta > 1) throw Error('delta > 1');
        this.refreshCars();
        if (TRAFFIC.settings.competitionType == "logistic") {
            _ref = this.intersections.all();
            for (id in _ref) {
                intersection = _ref[id];
                intersection.controlSignals.onTick(delta);
            }
        }
        _ref1 = this.cars.all();
        _results = [];
        var removeStopChallenge = null;
        for (id in _ref1) {
            car = _ref1[id];
            car.move(delta);
            for(var stopChallenge of stopChallenges) {
                if (this.totalTime.between(stopChallenge?.startTime, stopChallenge?.endTime)) {
                    if (car.coords.x.betweenArr(stopChallenge.x) && car.coords.y.betweenArr(stopChallenge.y)) {
                        car.maxSpeed = EPSILON;
                    }
                } else if (this.totalTime.between(stopChallenge?.endTime, stopChallenge?.endTime + 1)) {
                    removeStopChallenge = stopChallenge;
                    car.maxSpeed = TRAFFIC.settings.maxSpeed;
                }
            }
            if (!car.alive) _results.push(this.removeCar(car));
            else _results.push(void 0);
        }
        if (removeStopChallenge)
            stopChallenges = stopChallenges.filter(ch => ch != removeStopChallenge)
        return _results;
    },
    refreshCars : function() {
        if (this.cars.length < this.carsNumber) {
            var allCars = Object.values(this.cars.objects);
            var defaultCars = allCars.filter(car => {return !car.special});
            var specialCars = allCars.filter(car => {return car.special});
            for (var i = 0 ; i < map_1_data.specialCarsNumber - specialCars.length ; i++ ) {
                var roadId = map_1_data.startSpecialRoadsId[i % map_1_data.specialCarsNumber];
                this.addSpecialCar(roadId);
            }
            for (var i = 0 ; i < this.carsNumber - defaultCars.length - map_1_data.specialCarsNumber ; i++ ) {
                var roadId = null;
                if (this.heavyEnter === true) {
                    roadId = this.heavyEnterRoadId;
                }
                this.addCar(roadId);
            }
            this.heavyEnter = null;
            this.heavyEnterRoadId = null;
        }
        if (this.cars.length > this.carsNumber) { this.removeRandomCar(); }
    },
    addRoad : function(road) {
        this.roads.put(road);
        road.source.roads.push(road);
        road.target.inRoads.push(road);
        return road.update();
    },
    addSpecialCars : function(special_cars_object) {
        Object.keys(special_cars_object).forEach(car_id => {
            var car_data = special_cars_object[car_id];
            this.addSpecialCar(car_data);
        });
    },
    addSpecialCar : function(roadId=null) {
        this.addCar(roadId, true)
    },
    getRoad : function(id) {
        return this.roads.get(id);
    },
    getCar : function(id) {
       return this.cars.get(id);
    },
    removeCar : function(car) {
        this.toRemove.push(car.id);
        return this.cars.pop(car);
    },
    clearTmpRemove:function(){
        this.toRemove = [];
    },
    addIntersection : function(intersection) {
        return this.intersections.put(intersection);
    },
    getIntersection : function(id) {
        return this.intersections.get(id);
    },
    addCar : function(roadId=null, special=false) {
        if (roadId == null)
            roadId = TRAFFIC.sample(map_1_data.startRoadsId);

        var road = this.roads.all()[roadId];
        if (road == null)
            return;

        var lane = TRAFFIC.sample(road.lanes);
        if (lane == null)
            return;

        var car = new TRAFFIC.Car(lane);
        if (special)
            car.makeSpecial();
        return this.cars.put(car);
    },
    removeRandomCar : function() {
        var allCars = Object.values(this.cars.objects);
        var defaultCars = allCars.filter(car => {return !car.special});
        var car = TRAFFIC.sample(defaultCars);
        if (car != null) return this.removeCar(car);
    }
}

TRAFFIC.Car = function (lane, position) {
    // this.type = TRAFFIC.rand(0, TRAFFIC.TYPE_OF_CARS.length -1);
    this.type = 0;
    this.id = TRAFFIC.uniqueId('car');
    this.color = (300 + 240 * TRAFFIC.random() | 0) % 360;
    this._speed = 0;
    this.width = TRAFFIC.TYPE_OF_CARS[this.type].w * 2;//1.7;
    this.length = TRAFFIC.TYPE_OF_CARS[this.type].l * 2;//3 + 2 * TRAFFIC.random();
    this.maxSpeed = TRAFFIC.settings.maxSpeed;
    this.s0 = 1;
    this.timeHeadway = 1.5;
    this.maxAcceleration = 1;
    this.maxDeceleration = 3;
    this.trajectory = new TRAFFIC.Trajectory(this, lane, position);
    this.alive = true;
    this.preferedLane = null;
    this.traveledDistance = 0;
    this.stoppedTime = 0;
    this.special = false;
    this.roadNumber = 0;

    Object.defineProperty(this, 'coords', {
        get: function () {
            return this.trajectory.coords;
        }
    });

    Object.defineProperty(this, 'speed', {
        get: function () {
            return this._speed;
        },
        set: function (speed) {
            if (speed < 0) speed = 0;
            if (speed > this.maxSpeed) speed = this.maxSpeed;
            return this._speed = speed;
        }
    });

    Object.defineProperty(this, 'direction', {
        get: function () {
            return this.trajectory.direction;
        }
    });
}
TRAFFIC.Car.prototype = {
    constructor: TRAFFIC.Car,
    release : function() {
      return this.trajectory.release();
    },
    getAcceleration : function() {
      var a, b, breakGap, busyRoadCoeff, coeff, deltaSpeed, distanceGap, distanceToNextCar, freeRoadCoeff, intersectionCoeff, nextCarDistance, safeDistance, safeIntersectionDistance, timeGap, _ref;
      nextCarDistance = this.trajectory.nextCarDistance;
      distanceToNextCar = TRAFFIC.max(nextCarDistance.distance, 0);
      a = this.maxAcceleration;
      b = this.maxDeceleration;
      deltaSpeed = (this.speed - ((_ref = nextCarDistance.car) != null ? _ref.speed : void 0)) || 0;
      freeRoadCoeff = Math.pow(this.speed / this.maxSpeed, 4);
      distanceGap = this.s0;
      timeGap = this.speed * this.timeHeadway;
      breakGap = this.speed * deltaSpeed / (2 * TRAFFIC.sqrt(a * b));
      safeDistance = distanceGap + timeGap + breakGap;
      busyRoadCoeff = Math.pow(safeDistance / distanceToNextCar, 2);
      safeIntersectionDistance = 1 + timeGap + Math.pow(this.speed, 2) / (2 * b);
      intersectionCoeff = Math.pow(safeIntersectionDistance / this.trajectory.distanceToStopLine, 2);
      coeff = 1 - freeRoadCoeff - busyRoadCoeff - intersectionCoeff;
      return this.maxAcceleration * coeff;
    },
    move : function(delta) {
	    var acceleration, currentLane, preferedLane, step, turnNumber, considered_speed, speed_limitation;

	    speed_limitation = this.trajectory.current.lane.road.maxSpeed || TRAFFIC.settings.maxSpeed;
      if (speed_limitation > this.maxSpeed)
          speed_limitation = this.maxSpeed;

      acceleration = this.getAcceleration();
      considered_speed = this.speed + acceleration * delta;

      if (considered_speed <= speed_limitation) {
          this.speed = considered_speed;
      } else {
          this.speed = speed_limitation;
      }

	    if (!this.trajectory.isChangingLanes && this.nextLane) {
	        currentLane = this.trajectory.current.lane;
	        turnNumber = currentLane.getTurnDirection(this.nextLane);
	        preferedLane = (function() {
              switch (turnNumber) {
                  case 0: return currentLane.leftmostAdjacent;
                  case 2: return currentLane.rightmostAdjacent;
                  default: return currentLane;
              }
	        })();
	        if (preferedLane !== currentLane) {
	            this.trajectory.changeLane(preferedLane);
	        }
	    }
	    step = this.speed * delta + 0.5 * acceleration * Math.pow(delta, 2);
	    if (this.trajectory.nextCarDistance.distance < step) console.log('bad IDM');
	    if (this.trajectory.timeToMakeTurn(step)) {
	        if (this.nextLane == null) return this.alive = false;
	    }
	    if (this.special) {
          this.traveledDistance += this.speed * delta;
          if (step <= 0.03) {
              this.stoppedTime += 1;
          }
      }
	    return this.trajectory.moveForward(step);
    },
    pickNextRoad : function() {
	    var currentLane, intersection, nextRoad, possibleRoads;
	    intersection = this.trajectory.nextIntersection;
	    currentLane = this.trajectory.current.lane;
	    var possibleIntersections = map_1_data.roads[currentLane.road.id]?.possibleIntersections;
	    if (possibleIntersections) {
          possibleRoads = intersection.roads.filter(function(x) {
              return possibleIntersections.indexOf(x.target.id) >= 0;
          });
      } else {
          possibleRoads = intersection.roads.filter(function(x) {
              return x.target !== currentLane.road.source;
          });
      }
	    if (possibleRoads.length === 0) return null;
	    if (this.special && TRAFFIC.settings.competitionType == "logistic" && paths.length > this.roadNumber) {
          if (this.trajectory.current.lane.road.id == paths[this.roadNumber])
              this.roadNumber += 1;
          nextRoad = possibleRoads.find(r => {
              return r.id == paths[this.roadNumber];
          });
      } else {
          nextRoad = TRAFFIC.sample(possibleRoads);
      }
	    return nextRoad;
    },
    pickNextLane : function() {
	    var laneNumber, nextRoad, turnNumber;
	    if (this.nextLane) throw Error('next lane is already chosen');
	    this.nextLane = null;
	    nextRoad = this.pickNextRoad();
	    if (!nextRoad) return null;
	    turnNumber = this.trajectory.current.lane.road.getTurnDirection(nextRoad);
	    laneNumber = (function() {
	      switch (turnNumber) {
	        case 0: return nextRoad.lanesNumber - 1; break;
	        case 1: return TRAFFIC.rand(0, nextRoad.lanesNumber - 1); break;
	        case 2: return 0; break;
	      }
	    })();
	    this.nextLane = nextRoad.lanes[laneNumber];
	    if (!this.nextLane) throw Error('can not pick next lane');
	    return this.nextLane;
    },
    popNextLane : function() {
	    var nextLane;
	    nextLane = this.nextLane;
	    this.nextLane = null;
	    this.preferedLane = null;
	    return nextLane;
    },
    makeSpecial : function() {
        this.special = true;
        this.type = TRAFFIC.rand(TRAFFIC.TYPE_OF_CARS.length - 2) + 1;
    }
}

TRAFFIC.Lane = function (sourceSegment, targetSegment, road) {
    this.id = TRAFFIC.uniqueId('lane');
    this.sourceSegment = sourceSegment;
    this.targetSegment = targetSegment;
    this.road = road;
    this.leftAdjacent = null;
    this.rightAdjacent = null;
    this.leftmostAdjacent = null;
    this.rightmostAdjacent = null;
    this.carsPositions = {};
    this.update();

    Object.defineProperty(this, 'sourceSideId', {
        get: function() {
            return this.road.sourceSideId;
        }
    });

    Object.defineProperty(this, 'targetSideId', {
        get: function() {
            return this.road.targetSideId;
        }
    });

    Object.defineProperty(this, 'isRightmost', {
        get: function() {
            return this === this.rightmostAdjacent;
        }
    });

    Object.defineProperty(this, 'isLeftmost', {
        get: function() {
            return this === this.leftmostAdjacent;
        }
    });

    Object.defineProperty(this, 'leftBorder', {
        get: function() {
            return new TRAFFIC.Segment(this.sourceSegment.source, this.targetSegment.target);
        }
    });

    Object.defineProperty(this, 'rightBorder', {
        get: function() {
            return new TRAFFIC.Segment(this.sourceSegment.target, this.targetSegment.source);
        }
    });
}
TRAFFIC.Lane.prototype = {
    constructor: TRAFFIC.Lane,
    toJSON:function(lane){
        var obj = TRAFFIC.extend({}, this);
        delete obj.carsPositions;
        return obj;
    },
    update : function() {
        this.middleLine = new TRAFFIC.Segment(this.sourceSegment.center, this.targetSegment.center);
        this.length = this.middleLine.length;
        return this.direction = this.middleLine.direction;
    },
    getTurnDirection : function(other) {
        return this.road.getTurnDirection(other.road);
    },
    getDirection : function() {
       return this.direction;
    },
    getPoint : function(a) {
        return this.middleLine.getPoint(a);
    },
    addCarPosition : function(carPosition) {
        if (carPosition.id in this.carsPositions) throw Error('car is already here');
        return this.carsPositions[carPosition.id] = carPosition;
    },
    removeCar : function(carPosition) {
        if (!(carPosition.id in this.carsPositions)) throw Error('removing unknown car');
        return delete this.carsPositions[carPosition.id];
    },
    getNext : function(carPosition) {
        var bestDistance, distance, id, next, o, _ref;
        if (carPosition.lane !== this) throw Error('car is on other lane');
        next = null;
        bestDistance = Infinity;
        _ref = this.carsPositions;
        for (id in _ref) {
            o = _ref[id];
            distance = o.position - carPosition.position;
            if (!o.free && (0 < distance && distance < bestDistance)) {
                bestDistance = distance;
                next = o;
            }
        }
        return next;
    }
}

TRAFFIC.Intersection = function (rect) {
    this.rect = rect;
    this.id = TRAFFIC.uniqueId('intersection');
    this.roads = [];
    this.inRoads = [];
    this.controlSignals = new TRAFFIC.ControlSignals(this);
}
TRAFFIC.Intersection.prototype = {
    constructor: TRAFFIC.Intersection,
    copy : function(intersection) {
        var result;
        intersection.rect = TRAFFIC.Rect.copy(intersection.rect);//new TRAFFIC.Rect().copy(intersection.rect);
        result = Object.create( TRAFFIC.Intersection.prototype );
        TRAFFIC.extend(result, intersection);
        result.roads = [];
        result.inRoads = [];
        result.controlSignals = new TRAFFIC.ControlSignals(result);
        return result;
    },
    toJSON : function() {
        return { id: this.id, rect: this.rect };
    },
    update : function() {
        var road, _i, _j, _len, _len1, _ref, _ref1, _results;
        _ref = this.roads;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            road = _ref[_i];
            road.update();
        }
        _ref1 = this.inRoads;
        _results = [];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            road = _ref1[_j];
            _results.push(road.update());
        }
        return _results;
    }
}

TRAFFIC.STATE = [ { RED: 0, GREEN: 1 } ];
TRAFFIC.ControlSignals = function (intersection) {
    this.intersection = intersection;
    this.rect = intersection.rect;
    this.onTick = TRAFFIC.binding(this.onTick, this);
    this.time = 0;
    this.flipMultiplier = 1 + ( TRAFFIC.random() * 0.4 - 0.2);
    this.stateNum = 0;
    this.static_states = [];

    Object.defineProperty(this, 'flipInterval', {
        get: function() {
            return this.flipMultiplier * TRAFFIC.settings.lightsFlipInterval;
        }
    });

    Object.defineProperty(this, 'state', {
        get: function() {
            if (this.static_states.length > 0) {
                return this.static_states;
            } else {
                let stringState = this.states[this.stateNum % this.states.length];
                if (this.intersection.roads.length <= 2) {
                    stringState = ['LFR', 'LFR', 'LFR', 'LFR'];
                }
                return Array.from(stringState).map((x) => this._decode(x));
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
    _decode : function(str) {
        var state;
        state = [0, 0, 0];
        if (TRAFFIC.indexOf.call(str, 'L') >= 0) state[0] = 1;
        if (TRAFFIC.indexOf.call(str, 'F') >= 0) state[1] = 1;
        if (TRAFFIC.indexOf.call(str, 'R') >= 0) state[2] = 1;
        return state;
    },
    _encode : function(state_array) {
        var state_string = '';
        if (state_array[0]) { state_string += 'L'; }
        if (state_array[1]) { state_string += 'F'; }
        if (state_array[2]) { state_string += 'R'; }
        return state_string;
    },
    calculateStaticState : function(state_string) {
        return this._decode(state_string);
    },
    setStringStates : function(strings_array) {
        var that = this;
        var state_array = [];
        strings_array.forEach(
          string_array => state_array.push(that._decode(string_array)));
        return this.state = state_array;
    },
    flip : function() {
        return this.stateNum += 1;
    },
    onTick : function(delta) {
        this.time += delta;
        if (this.time > this.flipInterval) {
            this.flip();
            return this.time -= this.flipInterval;
        }
    }
}
TRAFFIC.ControlSignals.prototype.states = [['FRL', '', '', ''],['', 'FRL', '', ''],['', '','FRL', ''],['', '', '', 'FRL']];

TRAFFIC.LanePosition = function (car, lane, position) {
    this.car = car;
    this.position = position;
    this.id = TRAFFIC.uniqueId('laneposition');
    this.free = true;
    //this.lane = lane;
    this._lane = lane;

    Object.defineProperty(this, 'lane', {
        get: function() {
            return this._lane;
        },
        set: function(lane) {
            this.release();
            return this._lane = lane;
        }
    });

    Object.defineProperty(this, 'relativePosition', {
        get: function() {
            return this.position / this.lane.length;
        }
    });

    Object.defineProperty(this, 'nextCarDistance', {
        get: function() {
            var frontPosition, next, rearPosition, result;
            next = this.getNext();
            if (next) {
                rearPosition = next.position - next.car.length / 2;
                frontPosition = this.position + this.car.length / 2;
                return result = { car: next.car, distance: (rearPosition - frontPosition) };
            }
            return result = { car: null, distance: Infinity };
        }
    });
}
TRAFFIC.LanePosition.prototype = {
    constructor: TRAFFIC.LanePosition,
    acquire : function() {
        var _ref;
        if (((_ref = this.lane) != null ? _ref.addCarPosition : void 0) != null) {
            this.free = false;
            return this.lane.addCarPosition(this);
        }
    },
    release : function() {
        var _ref;
        if (!this.free && ((_ref = this.lane) != null ? _ref.removeCar : void 0)) {
            this.free = true;
            return this.lane.removeCar(this);
        }
    },
    getNext : function() {
        if (this.lane && !this.free) return this.lane.getNext(this);
    }
}

TRAFFIC.Pool = function (factory, pool) {
    var k, v, _ref;
    this.factory = factory;
    this.objects = {};
    if ((pool != null) && (pool.objects != null)) {
        _ref = pool.objects;
        for (k in _ref) {
            v = _ref[k];
            this.objects[k] = this.factory.copy(v);
        }
    }

    Object.defineProperty(this, 'length', {
        get: function() {
            return Object.keys(this.objects).length;
        }
    });
}
TRAFFIC.Pool.prototype = {
    constructor: TRAFFIC.Pool,
    toJSON : function() {
        return this.objects;
    },
    get : function(id) {
        return this.objects[id];
    },
    put : function(obj) {
    return this.objects[obj.id] = obj;
    },
    pop : function(obj) {
        var id, result, _ref;
        id = (_ref = obj.id) != null ? _ref : obj;
        result = this.objects[id];
        if (typeof result.release === "function") {
            result.release();
        }
        delete this.objects[id];
        return result;
    },
    all : function() {
        return this.objects;
    },
    clear : function() {
        return this.objects = {};
    }
}

TRAFFIC.Road = function (source, target, maxSpeed) {
    this.source = source;
    this.target = target;
    this.id = TRAFFIC.uniqueId('road');
    this.lanes = [];
    this.lanesNumber = null;
    this.maxSpeed = maxSpeed;
    this.update();

    Object.defineProperty(this, 'length', {
        get: function() {
            return this.targetSide.target.subtract(this.sourceSide.source).length;
        }
    });

    Object.defineProperty(this, 'leftmostLane', {
        get: function() {
            return this.lanes[this.lanesNumber - 1];
        }
    });

    Object.defineProperty(this, 'rightmostLane', {
        get: function() {
            return this.lanes[0];
        }
    });
}
TRAFFIC.Road.prototype = {
    constructor: TRAFFIC.Road,
    copy : function(road) {
        var result;
        result = Object.create(TRAFFIC.Road.prototype);
        TRAFFIC.extend.extend(result, road);
        if (result.lanes == null) result.lanes = [];
        return result;
    },
    toJSON : function() {
        var obj;
        return obj = { id: this.id, source: this.source.id, target: this.target.id };
    },
    getTurnDirection : function(other) {
        var side1, side2, turnNumber;
        if (this.target !== other.source) throw Error('invalid roads');
        side1 = this.targetSideId;
        side2 = other.sourceSideId;
        // return turnNumber = (side2 - side1 - 1 + 8) % 4;

        // to fix car path in current lane
        return turnNumber = 1;
    },
    update : function() {
        var i, sourceSplits, targetSplits, _base, _i, _j, _ref, _ref1, _results;
        if (!(this.source && this.target)) throw Error('incomplete road');
        this.sourceSideId = this.source.rect.getSectorId(this.target.rect.center());
        this.sourceSide = this.source.rect.getSide(this.sourceSideId).subsegment(0.5, 1.0);
        this.targetSideId = this.target.rect.getSectorId(this.source.rect.center());
        this.targetSide = this.target.rect.getSide(this.targetSideId).subsegment(0, 0.5);
        this.lanesNumber = TRAFFIC.min(this.sourceSide.length, this.targetSide.length) | 0;
        this.lanesNumber = TRAFFIC.max(2, this.lanesNumber / TRAFFIC.settings.gridSize | 0);
        sourceSplits = this.sourceSide.split(this.lanesNumber, true);
        targetSplits = this.targetSide.split(this.lanesNumber);
        if ((this.lanes == null) || this.lanes.length < this.lanesNumber) {
            if (this.lanes == null) this.lanes = [];
            for (i = _i = 0, _ref = this.lanesNumber - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
                if ((_base = this.lanes)[i] == null) _base[i] = new TRAFFIC.Lane(sourceSplits[i], targetSplits[i], this);
            }
        }
        _results = [];
        for (i = _j = 0, _ref1 = this.lanesNumber - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
            this.lanes[i].sourceSegment = sourceSplits[i];
            this.lanes[i].targetSegment = targetSplits[i];
            this.lanes[i].leftAdjacent = this.lanes[i + 1];
            this.lanes[i].rightAdjacent = this.lanes[i - 1];
            this.lanes[i].leftmostAdjacent = this.lanes[this.lanesNumber - 1];
            this.lanes[i].rightmostAdjacent = this.lanes[0];
            _results.push(this.lanes[i].update());
        }
        return _results;
    }
}

TRAFFIC.Trajectory = function (car, lane, position) {
    this.car = car;
    if (position == null) position = 0;
    this.current = new TRAFFIC.LanePosition(this.car, lane, position);
    this.current.acquire();
    this.next = new TRAFFIC.LanePosition(this.car);
    this.temp = new TRAFFIC.LanePosition(this.car);
    this.isChangingLanes = false;

    Object.defineProperty(this, 'lane', {
        get: function() {
            return this.temp.lane || this.current.lane;
        }
    });

    Object.defineProperty(this, 'absolutePosition', {
        get: function() {
            if (this.temp.lane != null) return this.temp.position;
            else  return this.current.position;
        }
    });

    Object.defineProperty(this, 'relativePosition', {
        get: function() {
            return this.absolutePosition / this.lane.length;
        }
    });

    Object.defineProperty(this, 'direction', {
        get: function() {
            return this.lane.getDirection(this.relativePosition);
        }
    });

    Object.defineProperty(this, 'coords', {
        get: function() {
            return this.lane.getPoint(this.relativePosition);
        }
    });

    Object.defineProperty(this, 'nextCarDistance', {
        get: function() {
            var a, b;
            a = this.current.nextCarDistance;
            b = this.next.nextCarDistance;
            if (a.distance < b.distance) return a;
            else return b;
        }
    });

    Object.defineProperty(this, 'distanceToStopLine', {
        get: function() {
            if (!this.canEnterIntersection()) { return this.getDistanceToIntersection(); }
            return Infinity;
        }
    });

    Object.defineProperty(this, 'nextIntersection', {
        get: function() {
            return this.current.lane.road.target;
        }
    });

    Object.defineProperty(this, 'previousIntersection', {
        get: function() {
            return this.current.lane.road.source;
        }
    });
}
TRAFFIC.Trajectory.prototype = {
    constructor: TRAFFIC.Trajectory,
    isValidTurn : function() {
        var nextLane, sourceLane, turnNumber;
        nextLane = this.car.nextLane;
        sourceLane = this.current.lane;
        if (!nextLane) throw Error('no road to enter');
        turnNumber = sourceLane.getTurnDirection(nextLane);
        if (turnNumber === 3) throw Error('no U-turns are allowed');
        if (turnNumber === 0 && !sourceLane.isLeftmost) throw Error('no left turns from this lane');
        if (turnNumber === 2 && !sourceLane.isRightmost) throw Error('no right turns from this lane');
        return true;
    },
    canEnterIntersection : function() {
        var intersection, nextLane, sideId, sourceLane, turnNumber;
        nextLane = this.car.nextLane;
        sourceLane = this.current.lane;
        if (!nextLane) return true;
        intersection = this.nextIntersection;
        turnNumber = sourceLane.getTurnDirection(nextLane);
        sideId = sourceLane.road.targetSideId;
        return intersection.controlSignals.state[sideId][turnNumber];
    },
    getDistanceToIntersection : function() {
        var distance;
        distance = this.current.lane.length - this.car.length / 2 - this.current.position;
        if (!this.isChangingLanes) return TRAFFIC.max(distance, 0);
        else return Infinity;
    },
    timeToMakeTurn : function(plannedStep) {
        if (plannedStep == null) plannedStep = 0;
        return this.getDistanceToIntersection() <= plannedStep;
    },
    moveForward : function(distance) {
        var gap, tempRelativePosition, _ref, _ref1;
        distance = TRAFFIC.max(distance, 0);
        this.current.position += distance;
        this.next.position += distance;
        this.temp.position += distance;
        if (this.timeToMakeTurn() && this.canEnterIntersection() && this.isValidTurn()) this._startChangingLanes(this.car.popNextLane(), 0);

        tempRelativePosition = this.temp.position / ((_ref = this.temp.lane) != null ? _ref.length : void 0);
        gap = 2 * this.car.length;
        if (this.isChangingLanes && this.temp.position > gap && !this.current.free) this.current.release();

        if (this.isChangingLanes && this.next.free && this.temp.position + gap > ((_ref1 = this.temp.lane) != null ? _ref1.length : void 0)) this.next.acquire();
        if (this.isChangingLanes && tempRelativePosition >= 1) this._finishChangingLanes();
        if (this.current.lane && !this.isChangingLanes && !this.car.nextLane) return this.car.pickNextLane();
    },
    changeLane : function(nextLane) {
        var nextPosition;
        if (this.isChangingLanes) throw Error('already changing lane');
        if (nextLane == null) throw Error('no next lane');
        if (nextLane === this.lane) throw Error('next lane == current lane');
        if (this.lane.road !== nextLane.road) throw Error('not neighbouring lanes');
        nextPosition = this.current.position + 3 * this.car.length;
        if (!(nextPosition < this.lane.length)) throw Error('too late to change lane');
        return this._startChangingLanes(nextLane, nextPosition);
    },
    _getIntersectionLaneChangeCurve : function() {

    },
    _getAdjacentLaneChangeCurve : function() {
        var control1, control2, curve, direction1, direction2, distance, p1, p2;
        p1 = this.current.lane.getPoint(this.current.relativePosition);
        p2 = this.next.lane.getPoint(this.next.relativePosition);
        distance = p2.subtract(p1).length;
        direction1 = this.current.lane.middleLine.vector.normalized.mult(distance * 0.3);
        control1 = p1.add(direction1);
        direction2 = this.next.lane.middleLine.vector.normalized.mult(distance * 0.3);
        control2 = p2.subtract(direction2);
        return curve = new TRAFFIC.Curve(p1, p2, control1, control2);
    },
    _getCurve : function() {
        return this._getAdjacentLaneChangeCurve();
    },
    _startChangingLanes : function(nextLane, nextPosition) {
        var curve;
        if (this.isChangingLanes) throw Error('already changing lane');
        if (nextLane == null) throw Error('no next lane');
        this.isChangingLanes = true;
        //this.next.setlane(nextLane);
        this.next.lane = nextLane;
        this.next.position = nextPosition;
        curve = this._getCurve();
        this.temp.lane = curve;
        this.temp.position = 0;
        return this.next.position -= this.temp.lane.length;
    },
    _finishChangingLanes : function() {
        if (!this.isChangingLanes) throw Error('no lane changing is going on');
        this.isChangingLanes = false;
        this.current.lane = this.next.lane;
        this.current.position = this.next.position || 0;
        this.current.acquire();
        this.next.lane = null;
        this.next.position = NaN;
        this.temp.lane = null;
        this.temp.position = NaN;
        return this.current.lane;
    },
    release : function() {
        var _ref, _ref1, _ref2;
        if ((_ref = this.current) != null) _ref.release();
        if ((_ref1 = this.next) != null) _ref1.release();
        return (_ref2 = this.temp) != null ? _ref2.release() : void 0;
    }
}
