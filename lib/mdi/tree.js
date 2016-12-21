'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiTree = function (_React$Component) {
    _inherits(MdiTree, _React$Component);

    function MdiTree() {
        _classCallCheck(this, MdiTree);

        return _possibleConstructorReturn(this, (MdiTree.__proto__ || Object.getPrototypeOf(MdiTree)).apply(this, arguments));
    }

    _createClass(MdiTree, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 11,21L 11,16.7439C 10.5308,16.9098 10.026,17 9.5,17C 7.01472,17 5,14.9853 5,12.5C 5,11.2346 5.52228,10.0912 6.36302,9.27364C 6.12938,8.7294 6,8.12981 6,7.5C 6,5.01472 8.01472,3 10.5,3C 12.0627,3 13.4393,3.79654 14.2461,5.00576C 14.3302,5.00193 14.4149,5 14.5,5C 17.5376,5 20,7.46243 20,10.5C 20,13.5376 17.5376,16 14.5,16C 13.98,16 13.4768,15.9278 13,15.793L 13,21L 11,21 Z ' })
                )
            );
        }
    }]);

    return MdiTree;
}(React.Component);

exports.default = MdiTree;
module.exports = exports['default'];