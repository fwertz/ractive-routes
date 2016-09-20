'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ractive = require('ractive');

var _ractive2 = _interopRequireDefault(_ractive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Route = _ractive2.default.extend({
    template: '{{>content}}',
    oninit: function oninit() {
        this.set('_component', this.findAllComponents()[0]);
    },
    onrender: function onrender() {
        this.get('_component').detach();
    },
    oncomplete: function oncomplete() {
        var self = this;
        console.log('' + this.fullPath());
        this.get('page')(this.fullPath(), function (ctx) {
            self.get('_component').insert(self.el);
        });

        this.get('page').exit(this.fullPath(), function (ctx, next) {
            self.get('_component').detach();
            next();
        });
    },
    fullPath: function fullPath() {
        var r = arguments.length <= 0 || arguments[0] === undefined ? this : arguments[0];

        if (r.parent && r.parent.component.name === r.component.name) {
            return this.fullPath.call(r.parent, r.parent) + this.get('path');
        } else {
            return this.get('path');
        }
    }
});

exports.default = Route;