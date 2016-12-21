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

var MdiShopping = function (_React$Component) {
    _inherits(MdiShopping, _React$Component);

    function MdiShopping() {
        _classCallCheck(this, MdiShopping);

        return _possibleConstructorReturn(this, (MdiShopping.__proto__ || Object.getPrototypeOf(MdiShopping)).apply(this, arguments));
    }

    _createClass(MdiShopping, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,12.9981C 9.2384,12.9981 6.99939,10.7591 6.99939,7.99807L 8.99939,7.99807C 8.99939,9.65506 10.3424,10.9981 11.9994,10.9981C 13.6564,10.9981 14.9994,9.65506 14.9994,7.99807L 16.9994,7.99807C 16.9994,10.7591 14.7604,12.9981 11.9994,12.9981 Z M 11.9994,2.99807C 13.6564,2.99807 14.9994,4.34107 14.9994,5.99807L 8.99939,5.99807C 8.99939,4.34107 10.3424,2.99807 11.9994,2.99807 Z M 18.9994,5.99807L 16.9994,5.99807C 16.9994,3.23707 14.7604,0.998068 11.9994,0.998068C 9.2384,0.998068 6.99939,3.23707 6.99939,5.99807L 4.99939,5.99807C 3.89438,5.99807 3.0094,6.89307 3.0094,7.99807L 2.99939,19.9981C 2.99939,21.1031 3.89438,21.9981 4.99939,21.9981L 18.9994,21.9981C 20.1034,21.9981 20.9994,21.1031 20.9994,19.9981L 20.9994,7.99807C 20.9994,6.89307 20.1034,5.99807 18.9994,5.99807 Z ' })
                )
            );
        }
    }]);

    return MdiShopping;
}(React.Component);

exports.default = MdiShopping;
module.exports = exports['default'];