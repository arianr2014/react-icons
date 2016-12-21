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

var MdiTrello = function (_React$Component) {
    _inherits(MdiTrello, _React$Component);

    function MdiTrello() {
        _classCallCheck(this, MdiTrello);

        return _possibleConstructorReturn(this, (MdiTrello.__proto__ || Object.getPrototypeOf(MdiTrello)).apply(this, arguments));
    }

    _createClass(MdiTrello, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,3L 20,3C 20.5523,3 21,3.44772 21,4L 21,20C 21,20.5523 20.5523,21 20,21L 4,21C 3.44771,21 3,20.5523 3,20L 3,4C 3,3.44772 3.44771,3 4,3 Z M 5.5,5C 5.22386,5 5,5.22386 5,5.5L 5,17.5C 5,17.7761 5.22386,18 5.5,18L 10.5,18C 10.7761,18 11,17.7761 11,17.5L 11,5.5C 11,5.22386 10.7761,5 10.5,5L 5.5,5 Z M 13.5,5C 13.2239,5 13,5.22386 13,5.5L 13,11.5C 13,11.7762 13.2238,12 13.5,12L 18.5,12C 18.7761,12 19,11.7762 19,11.5L 19,5.5C 19,5.22386 18.7761,5 18.5,5L 13.5,5 Z ' })
                )
            );
        }
    }]);

    return MdiTrello;
}(React.Component);

exports.default = MdiTrello;
module.exports = exports['default'];