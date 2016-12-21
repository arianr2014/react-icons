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

var MdiServerMinus = function (_React$Component) {
    _inherits(MdiServerMinus, _React$Component);

    function MdiServerMinus() {
        _classCallCheck(this, MdiServerMinus);

        return _possibleConstructorReturn(this, (MdiServerMinus.__proto__ || Object.getPrototypeOf(MdiServerMinus)).apply(this, arguments));
    }

    _createClass(MdiServerMinus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,4L 20,4C 20.5523,4 21,4.44772 21,5L 21,9C 21,9.55229 20.5523,10 20,10L 4,10C 3.44772,10 3,9.55229 3,9L 3,5C 3,4.44772 3.44772,4 4,4 Z M 8.99999,8.00002L 9.99999,8.00002L 9.99999,6.00002L 8.99999,6.00002L 8.99999,8.00002 Z M 5,6.00001L 5,8.00001L 6.99999,8.00001L 6.99999,6.00001L 5,6.00001 Z M 8,16L 16,16L 16,18L 8,18L 8,16 Z ' })
                )
            );
        }
    }]);

    return MdiServerMinus;
}(React.Component);

exports.default = MdiServerMinus;
module.exports = exports['default'];