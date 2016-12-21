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

var MdiAccountMultiple = function (_React$Component) {
    _inherits(MdiAccountMultiple, _React$Component);

    function MdiAccountMultiple() {
        _classCallCheck(this, MdiAccountMultiple);

        return _possibleConstructorReturn(this, (MdiAccountMultiple.__proto__ || Object.getPrototypeOf(MdiAccountMultiple)).apply(this, arguments));
    }

    _createClass(MdiAccountMultiple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15.9994,12.9981C 15.7094,12.9981 15.3824,13.0161 15.0344,13.0521C 16.1934,13.8891 16.9994,15.0151 16.9994,16.4981L 16.9994,18.9981L 22.9994,18.9981L 22.9994,16.4981C 22.9994,14.1661 18.3324,12.9981 15.9994,12.9981 Z M 7.99939,12.9981C 5.66537,12.9981 0.99939,14.1661 0.99939,16.4981L 0.99939,18.9981L 14.9994,18.9981L 14.9994,16.4981C 14.9994,14.1661 10.3324,12.9981 7.99939,12.9981 Z M 7.99939,10.9981C 9.6564,10.9981 10.9894,9.65407 10.9894,7.99807C 10.9894,6.34207 9.6564,4.99807 7.99939,4.99807C 6.34238,4.99807 4.99939,6.34207 4.99939,7.99807C 4.99939,9.65407 6.34238,10.9981 7.99939,10.9981 Z M 15.9994,10.9981C 17.6564,10.9981 18.9894,9.65407 18.9894,7.99807C 18.9894,6.34207 17.6564,4.99807 15.9994,4.99807C 14.3424,4.99807 12.9994,6.34207 12.9994,7.99807C 12.9994,9.65407 14.3424,10.9981 15.9994,10.9981 Z ' })
                )
            );
        }
    }]);

    return MdiAccountMultiple;
}(React.Component);

exports.default = MdiAccountMultiple;
module.exports = exports['default'];