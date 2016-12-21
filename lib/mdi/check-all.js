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

var MdiCheckAll = function (_React$Component) {
    _inherits(MdiCheckAll, _React$Component);

    function MdiCheckAll() {
        _classCallCheck(this, MdiCheckAll);

        return _possibleConstructorReturn(this, (MdiCheckAll.__proto__ || Object.getPrototypeOf(MdiCheckAll)).apply(this, arguments));
    }

    _createClass(MdiCheckAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 0.413493,13.412L 5.99951,18.998L 7.41349,17.584L 1.82749,11.998M 22.2425,5.58405L 11.6565,16.17L 7.48451,11.998L 6.07051,13.412L 11.6565,18.998L 23.6565,6.99805M 17.9995,6.99805L 16.5855,5.58405L 10.2425,11.9271L 11.6565,13.3411L 17.9995,6.99805 Z ' })
                )
            );
        }
    }]);

    return MdiCheckAll;
}(React.Component);

exports.default = MdiCheckAll;
module.exports = exports['default'];