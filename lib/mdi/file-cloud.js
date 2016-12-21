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

var MdiFileCloud = function (_React$Component) {
    _inherits(MdiFileCloud, _React$Component);

    function MdiFileCloud() {
        _classCallCheck(this, MdiFileCloud);

        return _possibleConstructorReturn(this, (MdiFileCloud.__proto__ || Object.getPrototypeOf(MdiFileCloud)).apply(this, arguments));
    }

    _createClass(MdiFileCloud, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.9994,8.99807L 18.4994,8.99807L 12.9994,3.49807L 12.9994,8.99807 Z M 5.99939,1.99807L 13.9994,1.99807L 19.9994,7.99807L 19.9994,19.9981C 19.9994,21.1021 19.1034,21.9981 17.9994,21.9981L 5.98938,21.9981C 4.88538,21.9981 3.99939,21.1021 3.99939,19.9981L 4.0094,3.99807C 4.0094,2.89407 4.89437,1.99807 5.99939,1.99807 Z M 15.6775,15.018C 15.3369,13.2975 13.8205,12 12,12C 10.554,12 9.3015,12.8195 8.67529,14.0185C 7.1715,14.18 6,15.453 6,17C 6,18.657 7.343,20 9,20L 15.5,20C 16.8805,20 18,18.881 18,17.5C 18,16.18 16.9735,15.1105 15.6775,15.018 Z ' })
                )
            );
        }
    }]);

    return MdiFileCloud;
}(React.Component);

exports.default = MdiFileCloud;
module.exports = exports['default'];