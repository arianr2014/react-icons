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

var MdiDisqus = function (_React$Component) {
    _inherits(MdiDisqus, _React$Component);

    function MdiDisqus() {
        _classCallCheck(this, MdiDisqus);

        return _possibleConstructorReturn(this, (MdiDisqus.__proto__ || Object.getPrototypeOf(MdiDisqus)).apply(this, arguments));
    }

    _createClass(MdiDisqus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0787,22C 9.63148,22 7.39407,21.1059 5.66463,19.6267L 1.40667,20.2081L 3.05167,16.1485C 2.47889,14.8841 2.15759,13.4807 2.15759,12C 2.15759,6.47778 6.59926,2 12.0787,2C 17.5576,2 22,6.47778 22,12C 22,17.5237 17.5583,22 12.0787,22 Z M 17.4961,11.9711L 17.4961,11.9435C 17.4961,9.05796 15.4613,7 11.9522,7L 8.16315,7L 8.16315,17L 11.8965,17C 15.4324,17.0007 17.4961,14.8567 17.4961,11.9711 Z M 11.9941,14.5433L 10.8859,14.5433L 10.8859,9.45796L 11.9941,9.45796C 13.6224,9.45796 14.7031,10.3861 14.7031,11.987L 14.7031,12.0144C 14.7031,13.6291 13.6224,14.5433 11.9941,14.5433 Z ' })
                )
            );
        }
    }]);

    return MdiDisqus;
}(React.Component);

exports.default = MdiDisqus;
module.exports = exports['default'];