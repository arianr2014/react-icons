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

var MdiImageArea = function (_React$Component) {
    _inherits(MdiImageArea, _React$Component);

    function MdiImageArea() {
        _classCallCheck(this, MdiImageArea);

        return _possibleConstructorReturn(this, (MdiImageArea.__proto__ || Object.getPrototypeOf(MdiImageArea)).apply(this, arguments));
    }

    _createClass(MdiImageArea, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.9994,4.99807C 21.1034,4.99807 21.9994,5.89406 21.9994,6.99807L 21.9994,16.9981C 21.9994,18.1021 21.1034,18.9981 19.9994,18.9981L 3.99941,18.9981C 2.89441,18.9981 1.99941,18.1021 1.99941,16.9981L 2.0094,6.99807C 2.0094,5.89406 2.89441,4.99807 3.99941,4.99807L 19.9994,4.99807 Z M 5,16L 19,16L 14.5,10L 11,14.506L 8.5,11.5L 5,16 Z ' })
                )
            );
        }
    }]);

    return MdiImageArea;
}(React.Component);

exports.default = MdiImageArea;
module.exports = exports['default'];