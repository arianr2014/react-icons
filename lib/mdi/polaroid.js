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

var MdiPolaroid = function (_React$Component) {
    _inherits(MdiPolaroid, _React$Component);

    function MdiPolaroid() {
        _classCallCheck(this, MdiPolaroid);

        return _possibleConstructorReturn(this, (MdiPolaroid.__proto__ || Object.getPrototypeOf(MdiPolaroid)).apply(this, arguments));
    }

    _createClass(MdiPolaroid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,3.00001L 18,3.00001C 19.1046,3.00001 20,3.89544 20,5.00001L 20,19C 20,20.1046 19.1046,21 18,21L 6,21C 4.89543,21 4,20.1046 4,19L 4,5.00001C 4,3.89544 4.89543,3.00001 6,3.00001 Z M 6,5.00001L 6,17L 18,17L 18,5.00001L 6,5.00001 Z ' })
                )
            );
        }
    }]);

    return MdiPolaroid;
}(React.Component);

exports.default = MdiPolaroid;
module.exports = exports['default'];