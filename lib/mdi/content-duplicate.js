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

var MdiContentDuplicate = function (_React$Component) {
    _inherits(MdiContentDuplicate, _React$Component);

    function MdiContentDuplicate() {
        _classCallCheck(this, MdiContentDuplicate);

        return _possibleConstructorReturn(this, (MdiContentDuplicate.__proto__ || Object.getPrototypeOf(MdiContentDuplicate)).apply(this, arguments));
    }

    _createClass(MdiContentDuplicate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11,17L 4,17C 2.9,17 2,16.1 2,15L 2,3C 2,1.9 2.9,1.00001 4,1.00001L 16,1.00001L 16,3L 4,3L 4,15L 11,15L 11,13L 15,16L 11,19L 11,17 Z M 19,21L 19,7L 8,7L 8,13L 6,13L 6,7C 6,5.9 6.9,5 8,5L 19,5C 20.1,5 21,5.9 21,7L 21,21C 21,22.1 20.1,23 19,23L 8,23C 6.9,23 6,22.1 6,21L 6,19L 8,19L 8,21L 19,21 Z ' })
                )
            );
        }
    }]);

    return MdiContentDuplicate;
}(React.Component);

exports.default = MdiContentDuplicate;
module.exports = exports['default'];