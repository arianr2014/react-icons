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

var MdiTag = function (_React$Component) {
    _inherits(MdiTag, _React$Component);

    function MdiTag() {
        _classCallCheck(this, MdiTag);

        return _possibleConstructorReturn(this, (MdiTag.__proto__ || Object.getPrototypeOf(MdiTag)).apply(this, arguments));
    }

    _createClass(MdiTag, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.49888,6.99854C 4.67088,6.99854 3.99888,6.32654 3.99888,5.49854C 3.99888,4.66956 4.67088,3.99854 5.49888,3.99854C 6.32788,3.99854 6.99888,4.66956 6.99888,5.49854C 6.99888,6.32654 6.32788,6.99854 5.49888,6.99854 Z M 21.4099,11.5796L 12.4139,2.58362C 12.0519,2.22162 11.5519,1.9986 10.9989,1.9986L 3.99887,1.9986C 2.89487,1.9986 1.99887,2.89362 1.99887,3.9986L 1.99887,10.9986C 1.99887,11.5516 2.22387,12.0526 2.58687,12.4146L 11.5849,21.4126C 11.9479,21.7746 12.4479,21.9986 12.9989,21.9986C 13.5519,21.9986 14.0519,21.7736 14.4139,21.4126L 21.4139,14.4126C 21.7759,14.0496 21.9989,13.5506 21.9989,12.9986C 21.9989,12.4436 21.7739,11.9416 21.4099,11.5796 Z ' })
                )
            );
        }
    }]);

    return MdiTag;
}(React.Component);

exports.default = MdiTag;
module.exports = exports['default'];