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

var MdiGreasePencil = function (_React$Component) {
    _inherits(MdiGreasePencil, _React$Component);

    function MdiGreasePencil() {
        _classCallCheck(this, MdiGreasePencil);

        return _possibleConstructorReturn(this, (MdiGreasePencil.__proto__ || Object.getPrototypeOf(MdiGreasePencil)).apply(this, arguments));
    }

    _createClass(MdiGreasePencil, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.6225,1.49875C 18.115,1.49875 17.6025,1.69375 17.2125,2.0896L 10.7525,8.545L 14.9513,12.7438L 21.4112,6.28875C 22.1975,5.5075 22.1975,4.24375 21.4112,3.45801L 20.0391,2.0896C 19.6488,1.69375 19.1362,1.49875 18.6225,1.49875 Z M 9.795,9.5025L 3.2275,16.0687L 3.92625,16.7675C 3.39875,17.2413 2.89125,17.7838 2.3775,18.2912C 1.59625,19.0775 1.59625,20.3375 2.3775,21.1225C 3.16375,21.9037 4.42375,21.9037 5.205,21.1225C 5.7175,20.625 6.245,20.0775 6.72875,19.575L 7.43125,20.2737L 13.9937,13.7012' })
                )
            );
        }
    }]);

    return MdiGreasePencil;
}(React.Component);

exports.default = MdiGreasePencil;
module.exports = exports['default'];