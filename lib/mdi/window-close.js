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

var MdiWindowClose = function (_React$Component) {
    _inherits(MdiWindowClose, _React$Component);

    function MdiWindowClose() {
        _classCallCheck(this, MdiWindowClose);

        return _possibleConstructorReturn(this, (MdiWindowClose.__proto__ || Object.getPrototypeOf(MdiWindowClose)).apply(this, arguments));
    }

    _createClass(MdiWindowClose, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.4579,12.0001L 18.9999,17.5433L 19,19L 17.5426,19.0002L 12.0009,13.4573L 6.45785,19.0004L 5,19L 4.99992,17.5442L 10.5439,12.0002L 4.99992,6.45765L 5,4.99996L 6.45671,5.00021L 12.0008,10.5431L 17.5437,5.00021L 19,4.99996L 18.9998,6.4583L 13.4579,12.0001 Z ' })
                )
            );
        }
    }]);

    return MdiWindowClose;
}(React.Component);

exports.default = MdiWindowClose;
module.exports = exports['default'];