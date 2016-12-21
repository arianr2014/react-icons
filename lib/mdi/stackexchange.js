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

var MdiStackexchange = function (_React$Component) {
    _inherits(MdiStackexchange, _React$Component);

    function MdiStackexchange() {
        _classCallCheck(this, MdiStackexchange);

        return _possibleConstructorReturn(this, (MdiStackexchange.__proto__ || Object.getPrototypeOf(MdiStackexchange)).apply(this, arguments));
    }

    _createClass(MdiStackexchange, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 3.99997,14.0365L 3.99999,11L 20,11L 20,14.0365L 3.99997,14.0365 Z M 4,10L 3.99999,7.00001L 20,7.00001L 20,10L 4,10 Z M 17.461,2.00001C 18.8632,2.00001 20,3.17774 20,4.62905L 20,6L 3.99999,6L 4,4.62905C 4,3.17774 5.13529,2.00001 6.53644,2.00001L 17.461,2.00001 Z M 4,15L 20,15L 20,16.3546C 20,17.8058 18.8632,18.9837 17.461,18.9837L 16.5,19L 13,22L 13,19L 6.53645,18.9837C 5.13529,18.9837 4,17.8058 4,16.3546L 4,15 Z ' })
                )
            );
        }
    }]);

    return MdiStackexchange;
}(React.Component);

exports.default = MdiStackexchange;
module.exports = exports['default'];