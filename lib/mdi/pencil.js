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

var MdiPencil = function (_React$Component) {
    _inherits(MdiPencil, _React$Component);

    function MdiPencil() {
        _classCallCheck(this, MdiPencil);

        return _possibleConstructorReturn(this, (MdiPencil.__proto__ || Object.getPrototypeOf(MdiPencil)).apply(this, arguments));
    }

    _createClass(MdiPencil, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.7062,7.04108C 21.0972,6.65002 21.0972,6.01703 20.7062,5.62708L 18.3702,3.29108C 17.9802,2.90002 17.3472,2.90002 16.9562,3.29108L 15.1242,5.12305L 18.8742,8.87305M 2.99916,17.248L 2.99916,20.998L 6.74916,20.998L 17.8142,9.93304L 14.0642,6.18304L 2.99916,17.248 Z ' })
                )
            );
        }
    }]);

    return MdiPencil;
}(React.Component);

exports.default = MdiPencil;
module.exports = exports['default'];