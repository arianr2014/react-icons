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

var MdiMarkerCheck = function (_React$Component) {
    _inherits(MdiMarkerCheck, _React$Component);

    function MdiMarkerCheck() {
        _classCallCheck(this, MdiMarkerCheck);

        return _possibleConstructorReturn(this, (MdiMarkerCheck.__proto__ || Object.getPrototypeOf(MdiMarkerCheck)).apply(this, arguments));
    }

    _createClass(MdiMarkerCheck, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9.9994,15.9981L 4.9994,10.9981L 6.4134,9.58407L 9.9994,13.1701L 17.5854,5.58407L 18.9994,6.99807M 18.9994,0.998068L 4.9994,0.998068C 3.89439,0.998068 3.0094,1.89307 3.0094,2.99807L 2.9994,15.9331C 2.9994,16.6231 3.3494,17.2321 3.8814,17.5911L 11.9944,22.9981L 20.1078,17.5911C 20.6394,17.2321 20.9896,16.6231 20.9896,15.9331L 20.9994,2.99807C 20.9994,1.89307 20.1029,0.998068 18.9994,0.998068 Z ' })
                )
            );
        }
    }]);

    return MdiMarkerCheck;
}(React.Component);

exports.default = MdiMarkerCheck;
module.exports = exports['default'];