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

var MdiTowerFire = function (_React$Component) {
    _inherits(MdiTowerFire, _React$Component);

    function MdiTowerFire() {
        _classCallCheck(this, MdiTowerFire);

        return _possibleConstructorReturn(this, (MdiTowerFire.__proto__ || Object.getPrototypeOf(MdiTowerFire)).apply(this, arguments));
    }

    _createClass(MdiTowerFire, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 17,4L 17,8L 18,8L 18,10L 17.638,10L 21,23L 18.9342,23L 18.3743,20.8349L 12,17.1547L 5.62574,20.8349L 5.0658,23L 3,23L 6.36203,10L 6,10L 6,8L 7,8L 7,4L 6,4L 6,3L 12,1L 18,3L 18,4L 17,4 Z M 7.28196,14.4307L 6.32782,18.1201L 10,16L 7.28196,14.4307 Z M 15.5722,10L 8.42783,10L 7.80162,12.4214L 12,14.8453L 16.1984,12.4214L 15.5722,10 Z M 17.6722,18.1201L 16.718,14.4307L 14,16L 17.6722,18.1201 Z ' })
                )
            );
        }
    }]);

    return MdiTowerFire;
}(React.Component);

exports.default = MdiTowerFire;
module.exports = exports['default'];