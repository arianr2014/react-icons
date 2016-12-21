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

var MdiContrast = function (_React$Component) {
    _inherits(MdiContrast, _React$Component);

    function MdiContrast() {
        _classCallCheck(this, MdiContrast);

        return _possibleConstructorReturn(this, (MdiContrast.__proto__ || Object.getPrototypeOf(MdiContrast)).apply(this, arguments));
    }

    _createClass(MdiContrast, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4.38088,20.9023C 3.77952,20.7067 3.30323,20.234 3.10284,19.6348L 19.6348,3.10284C 20.234,3.30323 20.7067,3.77953 20.9023,4.38088L 4.38088,20.9023 Z M 19.9999,16.0001L 19.9999,18.0001L 13,18L 13,16L 19.9999,16.0001 Z M 2.99992,6.00008L 5.99998,6.00002L 5.99992,3.00006L 7.99992,3.00006L 7.99998,6.00002L 10.9999,6.00008L 10.9999,8.00006L 8,8L 7.99992,11.0001L 5.9999,11.0001L 5.99998,8.00002L 2.99992,8.00008L 2.99992,6.00008 Z ' })
                )
            );
        }
    }]);

    return MdiContrast;
}(React.Component);

exports.default = MdiContrast;
module.exports = exports['default'];