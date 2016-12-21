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

var MdiVectorSquare = function (_React$Component) {
    _inherits(MdiVectorSquare, _React$Component);

    function MdiVectorSquare() {
        _classCallCheck(this, MdiVectorSquare);

        return _possibleConstructorReturn(this, (MdiVectorSquare.__proto__ || Object.getPrototypeOf(MdiVectorSquare)).apply(this, arguments));
    }

    _createClass(MdiVectorSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,2L 8,2L 8,4L 16,4L 16,2.00001L 22,2.00001L 22,8L 20,8L 20,16L 22,16L 22,22L 16,22L 16,20L 8,20L 8,22L 2,22L 2,16L 4,16L 4,8L 2,8L 2,2 Z M 16,8L 16,6L 8,6L 8,8L 6,8L 6,16L 8,16L 8,18L 16,18L 16,16L 18,16L 18,8L 16,8 Z M 4,4.00001L 4,6.00001L 5.99999,6.00001L 5.99999,4.00001L 4,4.00001 Z M 18,4.00001L 18,6.00001L 20,6.00001L 20,4.00001L 18,4.00001 Z M 4,18L 4,20L 6,20L 6,18L 4,18 Z M 18,18L 18,20L 20,20L 20,18L 18,18 Z ' })
                )
            );
        }
    }]);

    return MdiVectorSquare;
}(React.Component);

exports.default = MdiVectorSquare;
module.exports = exports['default'];