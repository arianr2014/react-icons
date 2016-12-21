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

var MdiLink = function (_React$Component) {
    _inherits(MdiLink, _React$Component);

    function MdiLink() {
        _classCallCheck(this, MdiLink);

        return _possibleConstructorReturn(this, (MdiLink.__proto__ || Object.getPrototypeOf(MdiLink)).apply(this, arguments));
    }

    _createClass(MdiLink, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15.9995,5.99817L 12.9995,5.99817L 12.9995,7.89813L 15.9995,7.89813C 18.2635,7.89813 20.0995,9.73413 20.0995,11.9982C 20.0995,14.2621 18.2635,16.0981 15.9995,16.0981L 12.9995,16.0981L 12.9995,17.9982L 15.9995,17.9982C 19.3145,17.9982 21.9995,15.3121 21.9995,11.9982C 21.9995,8.68414 19.3145,5.99817 15.9995,5.99817 Z M 3.89948,11.9982C 3.89948,9.73413 5.7355,7.89813 7.99948,7.89813L 10.9995,7.89813L 10.9995,5.99817L 7.99948,5.99817C 4.68649,5.99817 1.99948,8.68414 1.99948,11.9982C 1.99948,15.3121 4.68649,17.9982 7.99948,17.9982L 10.9995,17.9982L 10.9995,16.0981L 7.99948,16.0981C 5.7355,16.0981 3.89948,14.2621 3.89948,11.9982 Z M 7.99948,12.9982L 15.9995,12.9982L 15.9995,10.9982L 7.99948,10.9982L 7.99948,12.9982 Z ' })
                )
            );
        }
    }]);

    return MdiLink;
}(React.Component);

exports.default = MdiLink;
module.exports = exports['default'];