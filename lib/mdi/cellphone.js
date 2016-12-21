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

var MdiCellphone = function (_React$Component) {
    _inherits(MdiCellphone, _React$Component);

    function MdiCellphone() {
        _classCallCheck(this, MdiCellphone);

        return _possibleConstructorReturn(this, (MdiCellphone.__proto__ || Object.getPrototypeOf(MdiCellphone)).apply(this, arguments));
    }

    _createClass(MdiCellphone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9994,18.9981L 6.99939,18.9981L 6.99939,4.99807L 16.9994,4.99807M 16.9994,1.00808L 6.99939,0.998068C 5.89438,0.998068 4.99939,1.89406 4.99939,2.99807L 4.99939,20.9981C 4.99939,22.1021 5.89438,22.9981 6.99939,22.9981L 16.9994,22.9981C 18.1034,22.9981 18.9994,22.1021 18.9994,20.9981L 18.9994,2.99807C 18.9994,1.89406 18.1034,1.00808 16.9994,1.00808 Z ' })
                )
            );
        }
    }]);

    return MdiCellphone;
}(React.Component);

exports.default = MdiCellphone;
module.exports = exports['default'];