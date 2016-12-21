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

var MdiPen = function (_React$Component) {
    _inherits(MdiPen, _React$Component);

    function MdiPen() {
        _classCallCheck(this, MdiPen);

        return _possibleConstructorReturn(this, (MdiPen.__proto__ || Object.getPrototypeOf(MdiPen)).apply(this, arguments));
    }

    _createClass(MdiPen, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.7062,7.0411C 20.3719,7.37542 20.0376,7.70974 20.0307,8.03718C 20.0239,8.36461 20.3444,8.68515 20.6649,9.0057C 21.1363,9.4771 21.6077,9.9485 21.5893,10.4384C 21.5708,10.9283 21.0625,11.4366 20.5541,11.9449L 16.4223,16.0768L 15.0081,14.6625L 19.2507,10.4199L 18.2892,9.45836L 16.8737,10.874L 13.1237,7.12402L 16.9562,3.2911C 17.3472,2.90002 17.9802,2.90002 18.3702,3.2911L 20.7062,5.62708C 21.0972,6.01701 21.0972,6.65002 20.7062,7.0411 Z M 2.99917,17.248L 12.5635,7.68425L 16.3135,11.4342L 6.74917,20.998L 2.99917,20.998L 2.99917,17.248 Z ' })
                )
            );
        }
    }]);

    return MdiPen;
}(React.Component);

exports.default = MdiPen;
module.exports = exports['default'];