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

var MdiVectorDifferenceBa = function (_React$Component) {
    _inherits(MdiVectorDifferenceBa, _React$Component);

    function MdiVectorDifferenceBa() {
        _classCallCheck(this, MdiVectorDifferenceBa);

        return _possibleConstructorReturn(this, (MdiVectorDifferenceBa.__proto__ || Object.getPrototypeOf(MdiVectorDifferenceBa)).apply(this, arguments));
    }

    _createClass(MdiVectorDifferenceBa, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 20,22C 21.108,22 22,21.108 22,20L 22,18L 20,18L 20,20L 18,20L 18,22L 20,22 Z M 16,22L 16,20L 13,20L 13,22L 16,22 Z M 11,22L 11,20L 9,20L 9,18L 7,18L 7,20C 7,21.108 7.89199,22 9,22L 11,22 Z M 22,16L 22,13L 20,13L 20,16L 22,16 Z M 9,16C 9,16 9,11.3333 9,9C 11.3333,9 16,9 16,9C 16,9 16,5 16,3C 16,1.892 15.108,1 14,1L 3,1C 1.89199,1 1,1.892 1,3L 1,14C 1,15.108 1.89199,16 3,16C 5,16 9,16 9,16 Z M 7,14L 3,14L 3,3L 14,3L 14,7L 9,7C 7.89199,7 7,7.892 7,9L 7,14 Z M 22,11L 22,9C 22,7.892 21.108,7 20,7L 18,7L 18,9L 20,9L 20,11L 22,11 Z ' })
                )
            );
        }
    }]);

    return MdiVectorDifferenceBa;
}(React.Component);

exports.default = MdiVectorDifferenceBa;
module.exports = exports['default'];