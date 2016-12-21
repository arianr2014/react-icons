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

var MdiVectorIntersection = function (_React$Component) {
    _inherits(MdiVectorIntersection, _React$Component);

    function MdiVectorIntersection() {
        _classCallCheck(this, MdiVectorIntersection);

        return _possibleConstructorReturn(this, (MdiVectorIntersection.__proto__ || Object.getPrototypeOf(MdiVectorIntersection)).apply(this, arguments));
    }

    _createClass(MdiVectorIntersection, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 3.14258,1C 1.95542,1 1,1.9554 1,3.1426L 1,5L 3,5L 3,3L 5,3L 5,1L 3.14258,1 Z M 7,1L 7,3L 10,3L 10,1L 7,1 Z M 12,1L 12,3L 14,3L 14,5L 16,5L 16,3.1426C 16,1.9553 15.0446,1 13.8574,1L 12,1 Z M 1,7L 1,10L 3,10L 3,7L 1,7 Z M 9,7C 7.89199,7 7,7.892 7,9C 7,11.3333 7,16 7,16C 7,16 11.5716,16 13.8574,16C 15.0446,16 16,15.0446 16,13.8574C 16,11.5717 16,7 16,7C 16,7 11.3333,7 9,7 Z M 18,7L 18,9L 20,9L 20,11L 22,11L 22,9C 22,7.892 21.108,7 20,7L 18,7 Z M 9,9L 14,9L 14,14L 9,14L 9,9 Z M 1,12L 1,13.8574C 1,15.0447 1.95542,16 3.14258,16L 5,16L 5,14L 3,14L 3,12L 1,12 Z M 20,13L 20,16L 22,16L 22,13L 20,13 Z M 7,18L 7,20C 7,21.108 7.89199,22 9,22L 11,22L 11,20L 9,20L 9,18L 7,18 Z M 20,18L 20,20L 18,20L 18,22L 20,22C 21.108,22 22,21.108 22,20L 22,18L 20,18 Z M 13,20L 13,22L 16,22L 16,20L 13,20 Z ' })
                )
            );
        }
    }]);

    return MdiVectorIntersection;
}(React.Component);

exports.default = MdiVectorIntersection;
module.exports = exports['default'];