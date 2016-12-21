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

var MdiNfcVariant = function (_React$Component) {
    _inherits(MdiNfcVariant, _React$Component);

    function MdiNfcVariant() {
        _classCallCheck(this, MdiNfcVariant);

        return _possibleConstructorReturn(this, (MdiNfcVariant.__proto__ || Object.getPrototypeOf(MdiNfcVariant)).apply(this, arguments));
    }

    _createClass(MdiNfcVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.0044,5.99805L 13.0044,5.99805C 11.8994,5.99805 11.0044,6.89404 11.0044,7.99805L 11.0044,10.2751C 10.4094,10.622 10.0044,11.26 10.0044,11.998C 10.0044,13.1021 10.8994,13.998 12.0044,13.998C 13.1084,13.998 14.0044,13.1021 14.0044,11.998C 14.0044,11.26 13.5994,10.622 13.0044,10.2751L 13.0044,7.99805L 16.0044,7.99805L 16.0044,15.998L 8.00441,15.998L 8.00441,7.99805L 10.0044,7.99805L 10.0044,5.99805L 8.00441,5.99805L 6.00442,5.99805L 6.00442,17.998L 18.0044,17.998M 20.0044,19.998L 4.00442,19.998L 4.00442,3.99805L 20.0044,3.99805M 20.0044,1.99805L 4.00442,1.99805C 2.8994,1.99805 2.00441,2.89404 2.00441,3.99805L 2.00441,19.998C 2.00441,21.1021 2.8994,21.998 4.00442,21.998L 20.0044,21.998C 21.1084,21.998 22.0044,21.1021 22.0044,19.998L 22.0044,3.99805C 22.0044,2.89404 21.1084,1.99805 20.0044,1.99805 Z ' })
                )
            );
        }
    }]);

    return MdiNfcVariant;
}(React.Component);

exports.default = MdiNfcVariant;
module.exports = exports['default'];