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

var MdiBoxDownload = function (_React$Component) {
    _inherits(MdiBoxDownload, _React$Component);

    function MdiBoxDownload() {
        _classCallCheck(this, MdiBoxDownload);

        return _possibleConstructorReturn(this, (MdiBoxDownload.__proto__ || Object.getPrototypeOf(MdiBoxDownload)).apply(this, arguments));
    }

    _createClass(MdiBoxDownload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4.9956,3L 19.0076,3L 20.7359,5.99339L 20.7304,5.99653C 20.9018,6.29149 21,6.63428 21,7L 21,19C 21,20.1046 20.1046,21 19,21L 5,21C 3.89543,21 3,20.1046 3,19L 3,7C 3,6.638 3.09618,6.29846 3.26437,6.00554L 3.26135,6.0038L 4.9956,3 Z M 5.57294,4.00001L 4.99559,5.00001L 5,5.00001L 19.0076,5.00002L 18.4303,4.00001L 5.57294,4.00001 Z M 7,12L 12,17L 17,12L 14,12L 14,10L 10,10L 10,12L 7,12 Z ' })
                )
            );
        }
    }]);

    return MdiBoxDownload;
}(React.Component);

exports.default = MdiBoxDownload;
module.exports = exports['default'];