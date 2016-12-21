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

var MdiHeartBox = function (_React$Component) {
    _inherits(MdiHeartBox, _React$Component);

    function MdiHeartBox() {
        _classCallCheck(this, MdiHeartBox);

        return _possibleConstructorReturn(this, (MdiHeartBox.__proto__ || Object.getPrototypeOf(MdiHeartBox)).apply(this, arguments));
    }

    _createClass(MdiHeartBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,3.00002L 19,3.00002C 20.1046,3.00002 21,3.89544 21,5.00001L 21,19C 21,20.1046 20.1046,21 19,21L 5,21C 3.89543,21 3,20.1046 3,19L 3,5.00001C 3,3.89544 3.89543,3.00002 5,3.00002 Z M 12,17L 12.7245,16.3415C 15.299,14.0055 17,12.462 17,10.574C 17,9.03201 15.792,7.82398 14.25,7.82398C 13.3795,7.82398 12.5455,8.228 12,8.86698C 11.4545,8.228 10.6205,7.82398 9.75,7.82398C 8.20799,7.82398 7,9.03201 7,10.574C 7,12.462 8.70099,14.0055 11.2755,16.3415L 12,17 Z ' })
                )
            );
        }
    }]);

    return MdiHeartBox;
}(React.Component);

exports.default = MdiHeartBox;
module.exports = exports['default'];