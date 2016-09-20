'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ractive = require('ractive');

var _ractive2 = _interopRequireDefault(_ractive);

var _page = require('page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _ractive2.default.extend({
    template: '{{>content}}',
    data: function data() {
        return {
            base: '/',
            page: _page2.default
        };
    },
    oninit: function oninit() {
        _page2.default.base(this.get('base'));
    },
    oncomplete: function oncomplete() {
        (0, _page2.default)();
    }
});

exports.default = Router;