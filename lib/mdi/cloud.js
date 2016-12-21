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

var MdiCloud = function (_React$Component) {
    _inherits(MdiCloud, _React$Component);

    function MdiCloud() {
        _classCallCheck(this, MdiCloud);

        return _possibleConstructorReturn(this, (MdiCloud.__proto__ || Object.getPrototypeOf(MdiCloud)).apply(this, arguments));
    }

    _createClass(MdiCloud, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.3547,10.0339C 18.6735,6.59286 15.6407,3.99785 11.9997,3.99785C 9.10768,3.99785 6.60268,5.63686 5.35027,8.03487C 2.34268,8.35787 -0.000320435,10.9039 -0.000320435,13.9979C -0.000320435,17.3119 2.68568,19.9979 5.99968,19.9979L 18.9997,19.9979C 21.7607,19.9979 23.9997,17.7599 23.9997,14.9979C 23.9997,12.3579 21.9467,10.2189 19.3547,10.0339 Z ' })
                )
            );
        }
    }]);

    return MdiCloud;
}(React.Component);

exports.default = MdiCloud;
module.exports = exports['default'];