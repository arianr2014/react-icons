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

var MdiBookMinus = function (_React$Component) {
    _inherits(MdiBookMinus, _React$Component);

    function MdiBookMinus() {
        _classCallCheck(this, MdiBookMinus);

        return _possibleConstructorReturn(this, (MdiBookMinus.__proto__ || Object.getPrototypeOf(MdiBookMinus)).apply(this, arguments));
    }

    _createClass(MdiBookMinus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.9994,21.998L 5.99938,21.998C 4.89586,21.998 3.99938,21.1021 3.99938,19.998L 3.99938,3.99805C 3.99938,2.89404 4.89586,1.99805 5.99938,1.99805L 6.99938,1.99805L 6.99938,8.99805L 9.49938,7.49805L 11.9994,8.99805L 11.9994,1.99805L 17.9994,1.99805C 19.1044,1.99805 19.9994,2.89404 19.9994,3.99805L 19.9994,19.998C 19.9994,21.1021 19.1044,21.998 17.9994,21.998 Z M 18,18L 18,16L 12,16L 12,18L 18,18 Z ' })
                )
            );
        }
    }]);

    return MdiBookMinus;
}(React.Component);

exports.default = MdiBookMinus;
module.exports = exports['default'];