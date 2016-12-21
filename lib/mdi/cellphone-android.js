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

var MdiCellphoneAndroid = function (_React$Component) {
    _inherits(MdiCellphoneAndroid, _React$Component);

    function MdiCellphoneAndroid() {
        _classCallCheck(this, MdiCellphoneAndroid);

        return _possibleConstructorReturn(this, (MdiCellphoneAndroid.__proto__ || Object.getPrototypeOf(MdiCellphoneAndroid)).apply(this, arguments));
    }

    _createClass(MdiCellphoneAndroid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.2494,17.9981L 6.7494,17.9981L 6.7494,3.99807L 17.2494,3.99807M 13.9994,20.9981L 9.9994,20.9981L 9.9994,19.9981L 13.9994,19.9981M 15.9994,0.998068L 7.9994,0.998068C 6.3424,0.998068 4.9994,2.34105 4.9994,3.99807L 4.9994,19.9981C 4.9994,21.6551 6.3424,22.9981 7.9994,22.9981L 15.9994,22.9981C 17.6564,22.9981 18.9994,21.6551 18.9994,19.9981L 18.9994,3.99807C 18.9994,2.34105 17.6564,0.998068 15.9994,0.998068 Z ' })
                )
            );
        }
    }]);

    return MdiCellphoneAndroid;
}(React.Component);

exports.default = MdiCellphoneAndroid;
module.exports = exports['default'];