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

var MdiPiano = function (_React$Component) {
    _inherits(MdiPiano, _React$Component);

    function MdiPiano() {
        _classCallCheck(this, MdiPiano);

        return _possibleConstructorReturn(this, (MdiPiano.__proto__ || Object.getPrototypeOf(MdiPiano)).apply(this, arguments));
    }

    _createClass(MdiPiano, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 4,3.00002L 20,3.00002C 21.1046,3.00002 22,3.89544 22,5.00002L 22,19C 22,20.1046 21.1046,21 20,21L 4,21C 2.89543,21 2,20.1046 2,19L 2,5.00002C 2,3.89544 2.89543,3.00002 4,3.00002 Z M 4,5.00002L 4,19L 7.99999,19L 7.99999,13L 6.75,13L 6.75,5.00002L 4,5.00002 Z M 8.99999,19L 15,19L 15,13L 13.75,13L 13.75,5.00004L 10.25,5.00003L 10.25,13L 8.99999,13L 8.99999,19 Z M 16,19L 20,19L 20,5.00002L 17.25,5.00004L 17.25,13L 16,13L 16,19 Z ' })
                )
            );
        }
    }]);

    return MdiPiano;
}(React.Component);

exports.default = MdiPiano;
module.exports = exports['default'];