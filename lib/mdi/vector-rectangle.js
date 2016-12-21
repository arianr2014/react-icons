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

var MdiVectorRectangle = function (_React$Component) {
    _inherits(MdiVectorRectangle, _React$Component);

    function MdiVectorRectangle() {
        _classCallCheck(this, MdiVectorRectangle);

        return _possibleConstructorReturn(this, (MdiVectorRectangle.__proto__ || Object.getPrototypeOf(MdiVectorRectangle)).apply(this, arguments));
    }

    _createClass(MdiVectorRectangle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,4.00001L 7.99999,4.00001L 7.99999,6.00001L 16,6.00001L 16,4.00002L 22,4.00002L 22,10L 20,10L 20,14L 22,14L 22,20L 16,20L 16,18L 7.99999,18L 7.99999,20L 2,20L 2,14L 4,14L 4,10L 2,10L 2,4.00001 Z M 16,10L 16,8.00001L 7.99999,8.00001L 7.99999,10L 5.99999,10L 5.99999,14L 7.99999,14L 7.99999,16L 16,16L 16,14L 18,14L 18,10L 16,10 Z M 3.99999,6.00002L 3.99999,8.00002L 5.99999,8.00002L 5.99999,6.00002L 3.99999,6.00002 Z M 18,6.00002L 18,8.00002L 20,8.00002L 20,6.00002L 18,6.00002 Z M 4,16L 4,18L 5.99999,18L 5.99999,16L 4,16 Z M 18,16L 18,18L 20,18L 20,16L 18,16 Z ' })
                )
            );
        }
    }]);

    return MdiVectorRectangle;
}(React.Component);

exports.default = MdiVectorRectangle;
module.exports = exports['default'];