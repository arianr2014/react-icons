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

var MdiTabletIpad = function (_React$Component) {
    _inherits(MdiTabletIpad, _React$Component);

    function MdiTabletIpad() {
        _classCallCheck(this, MdiTabletIpad);

        return _possibleConstructorReturn(this, (MdiTabletIpad.__proto__ || Object.getPrototypeOf(MdiTabletIpad)).apply(this, arguments));
    }

    _createClass(MdiTabletIpad, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,18.999L 3.99939,18.999L 3.99939,2.99904L 18.9994,2.99904M 11.4994,22.999C 10.6714,22.999 9.99939,22.327 9.99939,21.499C 9.99939,20.671 10.6714,19.999 11.4994,19.999C 12.3274,19.999 12.9994,20.671 12.9994,21.499C 12.9994,22.327 12.3274,22.999 11.4994,22.999 Z M 18.4994,-0.000955582L 4.49939,-0.000955582C 3.11838,-0.000955582 1.99939,1.11803 1.99939,2.49904L 1.99939,21.499C 1.99939,22.8801 3.11838,23.999 4.49939,23.999L 18.4994,23.999C 19.8804,23.999 20.9994,22.8801 20.9994,21.499L 20.9994,2.49904C 20.9994,1.11803 19.8804,-0.000955582 18.4994,-0.000955582 Z ' })
                )
            );
        }
    }]);

    return MdiTabletIpad;
}(React.Component);

exports.default = MdiTabletIpad;
module.exports = exports['default'];