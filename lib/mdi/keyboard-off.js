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

var MdiKeyboardOff = function (_React$Component) {
    _inherits(MdiKeyboardOff, _React$Component);

    function MdiKeyboardOff() {
        _classCallCheck(this, MdiKeyboardOff);

        return _possibleConstructorReturn(this, (MdiKeyboardOff.__proto__ || Object.getPrototypeOf(MdiKeyboardOff)).apply(this, arguments));
    }

    _createClass(MdiKeyboardOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 0.999999,4.26849L 2.27711,3.00001L 20,20.7229L 18.7315,22L 15.7296,18.9981L 3.99941,18.9981C 2.89441,18.9981 1.99941,18.1021 1.99941,16.9981L 2.0094,6.99807C 2.0094,6.51616 2.17803,6.07388 2.45999,5.72846L 0.999999,4.26849 Z M 18.9994,9.99807L 18.9994,7.99807L 16.9994,7.99807L 16.9994,9.99807L 18.9994,9.99807 Z M 18.9994,12.9981L 18.9994,10.9981L 16.9994,10.9981L 16.9994,12.9981L 18.9994,12.9981 Z M 15.9994,9.99807L 15.9994,7.99807L 13.9994,7.99807L 13.9994,9.99807L 15.9994,9.99807 Z M 15.9994,12.9981L 15.9994,10.9981L 13.9994,10.9981L 13.9994,12.1767L 11.8208,9.99807L 12.9994,9.99807L 12.9994,7.99807L 10.9994,7.99807L 10.9994,9.17672L 9.82076,7.99807L 6.82076,4.99807L 19.9994,4.99807C 21.1034,4.99807 21.9994,5.89407 21.9994,6.99807L 21.9994,16.9981C 21.9994,17.8571 21.4569,18.5903 20.696,18.8733L 14.8208,12.9981L 15.9994,12.9981 Z M 7.99941,14.9981L 7.99941,16.9981L 13.7296,16.9981L 11.7296,14.9981L 7.99941,14.9981 Z M 4.99941,9.99807L 6.72959,9.99807L 4.99941,8.26789L 4.99941,9.99807 Z M 6.99941,12.9981L 6.99941,10.9981L 4.99941,10.9981L 4.99941,12.9981L 6.99941,12.9981 Z M 7.99941,12.9981L 9.72959,12.9981L 7.99941,11.2679L 7.99941,12.9981 Z ' })
                )
            );
        }
    }]);

    return MdiKeyboardOff;
}(React.Component);

exports.default = MdiKeyboardOff;
module.exports = exports['default'];