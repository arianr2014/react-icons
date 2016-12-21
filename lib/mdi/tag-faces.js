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

var MdiTagFaces = function (_React$Component) {
    _inherits(MdiTagFaces, _React$Component);

    function MdiTagFaces() {
        _classCallCheck(this, MdiTagFaces);

        return _possibleConstructorReturn(this, (MdiTagFaces.__proto__ || Object.getPrototypeOf(MdiTagFaces)).apply(this, arguments));
    }

    _createClass(MdiTagFaces, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.9997,17.9981C 11.6837,17.9981 8.99968,15.3121 8.99968,11.9981C 8.99968,8.68407 11.6837,5.99807 14.9997,5.99807C 18.3137,5.99807 20.9997,8.68407 20.9997,11.9981C 20.9997,15.3121 18.3137,17.9981 14.9997,17.9981 Z M 3.99968,12.9981C 3.44792,12.9981 2.99968,12.5501 2.99968,11.9981C 2.99968,11.4461 3.44792,10.9981 3.99968,10.9981C 4.55144,10.9981 4.99968,11.4461 4.99968,11.9981C 4.99968,12.5501 4.55144,12.9981 3.99968,12.9981 Z M 21.9997,3.00806L 7.62868,2.99807C 6.96768,2.99807 6.38068,3.31907 6.01628,3.81406L -0.000320435,12.0031L 6.01628,20.1821C 6.38068,20.6771 6.96768,20.9981 7.62868,20.9981L 21.9997,20.9981C 23.1032,20.9981 23.9997,20.1031 23.9997,18.9981L 23.9997,4.99807C 23.9997,3.89307 23.1032,3.00806 21.9997,3.00806 Z M 12.9997,10.9981C 13.5517,10.9981 13.9997,10.5501 13.9997,9.99807C 13.9997,9.44606 13.5517,8.99807 12.9997,8.99807C 12.4477,8.99807 11.9997,9.44606 11.9997,9.99807C 11.9997,10.5501 12.4477,10.9981 12.9997,10.9981 Z M 14.9997,15.9981C 16.8617,15.9981 18.3532,14.7197 18.7997,12.9981L 11.1997,12.9981C 11.6462,14.7197 13.1367,15.9981 14.9997,15.9981 Z M 16.9997,10.9981C 17.5517,10.9981 17.9997,10.5501 17.9997,9.99807C 17.9997,9.44606 17.5517,8.99807 16.9997,8.99807C 16.4477,8.99807 15.9997,9.44606 15.9997,9.99807C 15.9997,10.5501 16.4477,10.9981 16.9997,10.9981 Z ' })
                )
            );
        }
    }]);

    return MdiTagFaces;
}(React.Component);

exports.default = MdiTagFaces;
module.exports = exports['default'];