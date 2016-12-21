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

var MdiClapperboard = function (_React$Component) {
    _inherits(MdiClapperboard, _React$Component);

    function MdiClapperboard() {
        _classCallCheck(this, MdiClapperboard);

        return _possibleConstructorReturn(this, (MdiClapperboard.__proto__ || Object.getPrototypeOf(MdiClapperboard)).apply(this, arguments));
    }

    _createClass(MdiClapperboard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21.9999,4.00001L 21.9997,18.0001C 21.9997,19.1046 21.1043,20.0001 19.9997,20.0001L 3.99969,20.0001C 2.89511,20.0001 1.99969,19.1046 1.99969,18.0001L 1.99969,6.00013C 1.99969,4.89556 2.89511,4.00013 3.99969,4.00013L 4.73207,4.00013L 7.61871,8.99993L 10.6187,8.99993L 7.73206,4.00013L 9.73209,4.00013L 12.6187,8.99991L 15.6187,8.99991L 12.7321,4.00013L 14.7321,4.00013L 17.6187,8.99993L 20.6187,8.99993L 17.7321,4.00013L 21.9999,4.00001 Z ' })
                )
            );
        }
    }]);

    return MdiClapperboard;
}(React.Component);

exports.default = MdiClapperboard;
module.exports = exports['default'];