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

var MdiTimetable = function (_React$Component) {
    _inherits(MdiTimetable, _React$Component);

    function MdiTimetable() {
        _classCallCheck(this, MdiTimetable);

        return _possibleConstructorReturn(this, (MdiTimetable.__proto__ || Object.getPrototypeOf(MdiTimetable)).apply(this, arguments));
    }

    _createClass(MdiTimetable, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14,12L 15.5,12L 15.5,14.823L 17.9382,16.2307L 17.1882,17.5297L 14,15.689L 14,12 Z M 4,2.00001L 18,2.00002C 19.1046,2.00002 20,2.89545 20,4.00002L 20,10.101C 21.2372,11.3636 22,13.0927 22,15C 22,18.866 18.866,22 15,22C 13.0927,22 11.3636,21.2372 10.101,20L 4,20C 2.89543,20 2,19.1046 2,18L 2,4.00001C 2,2.89544 2.89543,2.00001 4,2.00001 Z M 4,15L 4,18L 8.67363,18C 8.24169,17.0907 8,16.0736 8,15L 4,15 Z M 4,8.00001L 10,8L 10,5L 4,5.00001L 4,8.00001 Z M 18,8.00001L 18,5.00001L 12,5L 12,8L 18,8.00001 Z M 4,13L 8.28987,13C 8.63282,11.8477 9.2645,10.8197 10.101,10L 4,10L 4,13 Z M 15,10.1539C 12.3235,10.1539 10.1538,12.3236 10.1538,15C 10.1538,17.6765 12.3235,19.8462 15,19.8462C 17.6764,19.8462 19.8461,17.6765 19.8461,15C 19.8461,12.3236 17.6764,10.1539 15,10.1539 Z ' })
                )
            );
        }
    }]);

    return MdiTimetable;
}(React.Component);

exports.default = MdiTimetable;
module.exports = exports['default'];