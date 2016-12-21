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

var MdiAccountCircle = function (_React$Component) {
    _inherits(MdiAccountCircle, _React$Component);

    function MdiAccountCircle() {
        _classCallCheck(this, MdiAccountCircle);

        return _possibleConstructorReturn(this, (MdiAccountCircle.__proto__ || Object.getPrototypeOf(MdiAccountCircle)).apply(this, arguments));
    }

    _createClass(MdiAccountCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9992,19.1982C 9.4952,19.1982 7.2922,17.9193 6.0012,15.9783C 6.0272,13.9913 10.0052,12.8983 11.9992,12.8983C 13.9932,12.8983 17.9712,13.9913 17.9972,15.9783C 16.7062,17.9193 14.5032,19.1982 11.9992,19.1982 Z M 11.9992,4.99823C 13.6552,4.99823 14.9992,6.34222 14.9992,7.99823C 14.9992,9.65625 13.6552,10.9982 11.9992,10.9982C 10.3432,10.9982 8.9992,9.65625 8.9992,7.99823C 8.9992,6.34222 10.3432,4.99823 11.9992,4.99823 Z M 11.9992,1.99823C 6.4762,1.99823 1.9992,6.47424 1.9992,11.9982C 1.9992,17.5212 6.4762,21.9982 11.9992,21.9982C 17.5222,21.9982 21.9992,17.5212 21.9992,11.9982C 21.9992,6.47424 17.5222,1.99823 11.9992,1.99823 Z ' })
                )
            );
        }
    }]);

    return MdiAccountCircle;
}(React.Component);

exports.default = MdiAccountCircle;
module.exports = exports['default'];