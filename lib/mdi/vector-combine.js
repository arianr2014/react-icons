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

var MdiVectorCombine = function (_React$Component) {
    _inherits(MdiVectorCombine, _React$Component);

    function MdiVectorCombine() {
        _classCallCheck(this, MdiVectorCombine);

        return _possibleConstructorReturn(this, (MdiVectorCombine.__proto__ || Object.getPrototypeOf(MdiVectorCombine)).apply(this, arguments));
    }

    _createClass(MdiVectorCombine, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 3,1C 1.89199,1 1,1.892 1,3L 1,14C 1,15.108 1.89199,16 3,16C 4.33333,16 7,16 7,16C 7,16 7,18.6667 7,20C 7,21.108 7.89199,22 9,22L 20,22C 21.108,22 22,21.108 22,20L 22,9C 22,7.892 21.108,7 20,7C 18.6667,7 16,7 16,7C 16,7 16,4.3333 16,3C 16,1.892 15.108,1 14,1L 3,1 Z M 3,3L 14,3C 14,4.3333 14,7 14,7L 9,7C 7.89199,7 7,7.892 7,9L 7,14C 7,14 4.33333,14 3,14L 3,3 Z M 9,9L 14,9L 14,14L 9,14L 9,9 Z M 16,9C 16,9 18.6667,9 20,9L 20,20L 9,20C 9,18.6667 9,16 9,16L 14,16C 15.108,16 16,15.108 16,14L 16,9 Z ' })
                )
            );
        }
    }]);

    return MdiVectorCombine;
}(React.Component);

exports.default = MdiVectorCombine;
module.exports = exports['default'];