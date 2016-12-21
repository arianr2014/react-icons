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

var MdiUmbrellaOutline = function (_React$Component) {
    _inherits(MdiUmbrellaOutline, _React$Component);

    function MdiUmbrellaOutline() {
        _classCallCheck(this, MdiUmbrellaOutline);

        return _possibleConstructorReturn(this, (MdiUmbrellaOutline.__proto__ || Object.getPrototypeOf(MdiUmbrellaOutline)).apply(this, arguments));
    }

    _createClass(MdiUmbrellaOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,4C 15.093,4.003 17.817,6.036 18.701,9L 5.295,9C 6.179,6.034 8.905,4.001 12,4 Z M 12,2C 7.029,2 3,6.029 3,11L 11,11L 11,19C 11,19.552 10.552,20 10,20C 9.448,20 9,19.552 9,19L 7,19C 7,20.657 8.343,22 10,22C 11.657,22 13,20.657 13,19L 13,11L 21,11C 21,6.029 16.971,2 12,2 Z ' })
                )
            );
        }
    }]);

    return MdiUmbrellaOutline;
}(React.Component);

exports.default = MdiUmbrellaOutline;
module.exports = exports['default'];