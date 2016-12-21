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

var MdiShoppingMusic = function (_React$Component) {
    _inherits(MdiShoppingMusic, _React$Component);

    function MdiShoppingMusic() {
        _classCallCheck(this, MdiShoppingMusic);

        return _possibleConstructorReturn(this, (MdiShoppingMusic.__proto__ || Object.getPrototypeOf(MdiShoppingMusic)).apply(this, arguments));
    }

    _createClass(MdiShoppingMusic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,2.99807C 10.3424,2.99807 8.99939,4.34106 8.99939,5.99807L 14.9994,5.99807C 14.9994,4.34106 13.6564,2.99807 11.9994,2.99807 Z M 18.9993,5.99809C 20.1033,5.99809 20.9993,6.89309 20.9993,7.99809L 20.9993,19.9981C 20.9993,21.1031 20.1033,21.9981 18.9993,21.9981L 4.99935,21.9981C 3.89433,21.9981 2.99935,21.1031 2.99935,19.9981L 3.00936,7.99809C 3.00936,6.89309 3.89433,5.99809 4.99935,5.99809L 6.99935,5.99809C 6.99935,3.23708 9.23836,0.998093 11.9993,0.998093C 14.7603,0.998093 16.9993,3.23708 16.9993,5.99809L 18.9993,5.99809 Z M 9,19L 16.5,14L 9,10L 9,19 Z ' })
                )
            );
        }
    }]);

    return MdiShoppingMusic;
}(React.Component);

exports.default = MdiShoppingMusic;
module.exports = exports['default'];