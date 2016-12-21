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

var MdiLabelOutline = function (_React$Component) {
    _inherits(MdiLabelOutline, _React$Component);

    function MdiLabelOutline() {
        _classCallCheck(this, MdiLabelOutline);

        return _possibleConstructorReturn(this, (MdiLabelOutline.__proto__ || Object.getPrototypeOf(MdiLabelOutline)).apply(this, arguments));
    }

    _createClass(MdiLabelOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15.9994,16.998L 4.9994,16.998L 4.9994,6.99805L 15.9994,6.99805L 19.5464,11.998M 17.6324,5.84302C 17.2704,5.33105 16.6734,4.99805 15.9994,4.99805L 4.9994,5.00806C 3.89588,5.00806 2.9994,5.89404 2.9994,6.99805L 2.9994,16.998C 2.9994,18.1021 3.89588,18.988 4.9994,18.988L 15.9994,18.998C 16.6734,18.998 17.2704,18.6641 17.6324,18.1531L 21.9994,11.998L 17.6324,5.84302 Z ' })
                )
            );
        }
    }]);

    return MdiLabelOutline;
}(React.Component);

exports.default = MdiLabelOutline;
module.exports = exports['default'];