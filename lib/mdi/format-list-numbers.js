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

var MdiFormatListNumbers = function (_React$Component) {
    _inherits(MdiFormatListNumbers, _React$Component);

    function MdiFormatListNumbers() {
        _classCallCheck(this, MdiFormatListNumbers);

        return _possibleConstructorReturn(this, (MdiFormatListNumbers.__proto__ || Object.getPrototypeOf(MdiFormatListNumbers)).apply(this, arguments));
    }

    _createClass(MdiFormatListNumbers, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6.99938,12.998L 20.9994,12.998L 20.9994,10.998L 6.99938,10.998M 6.99938,18.998L 20.9994,18.998L 20.9994,16.998L 6.99938,16.998M 6.99938,6.99805L 20.9994,6.99805L 20.9994,4.99805L 6.99938,4.99805M 1.99938,10.998L 3.79939,10.998L 1.99938,13.0981L 1.99938,13.998L 4.99938,13.998L 4.99938,12.998L 3.19938,12.998L 4.99938,10.898L 4.99938,9.99805L 1.99938,9.99805M 2.99938,7.99805L 3.99938,7.99805L 3.99938,3.99805L 1.99938,3.99805L 1.99938,4.99805L 2.99938,4.99805M 1.99938,16.998L 3.99938,16.998L 3.99938,17.498L 2.99938,17.498L 2.99938,18.498L 3.99938,18.498L 3.99938,18.998L 1.99938,18.998L 1.99938,19.998L 4.99938,19.998L 4.99938,15.998L 1.99938,15.998L 1.99938,16.998 Z ' })
                )
            );
        }
    }]);

    return MdiFormatListNumbers;
}(React.Component);

exports.default = MdiFormatListNumbers;
module.exports = exports['default'];