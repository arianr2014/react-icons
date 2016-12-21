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

var MdiServerRemove = function (_React$Component) {
    _inherits(MdiServerRemove, _React$Component);

    function MdiServerRemove() {
        _classCallCheck(this, MdiServerRemove);

        return _possibleConstructorReturn(this, (MdiServerRemove.__proto__ || Object.getPrototypeOf(MdiServerRemove)).apply(this, arguments));
    }

    _createClass(MdiServerRemove, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,4L 20,4C 20.5523,4 21,4.44772 21,5L 21,9C 21,9.55229 20.5523,10 20,10L 4,10C 3.44772,10 3,9.55229 3,9L 3,5C 3,4.44772 3.44772,4 4,4 Z M 8.99998,8.00003L 9.99998,8.00003L 9.99998,6.00003L 8.99998,6.00003L 8.99998,8.00003 Z M 4.99999,6.00002L 4.99999,8.00002L 6.99999,8.00002L 6.99999,6.00002L 4.99999,6.00002 Z M 10.5858,17L 8,14.4142L 9.41419,13L 12,15.5858L 14.5858,13L 16,14.4142L 13.4142,17L 16,19.5858L 14.5858,21L 12,18.4142L 9.41421,21L 8,19.5858L 10.5858,17 Z ' })
                )
            );
        }
    }]);

    return MdiServerRemove;
}(React.Component);

exports.default = MdiServerRemove;
module.exports = exports['default'];