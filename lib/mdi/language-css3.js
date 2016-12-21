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

var MdiLanguageCss3 = function (_React$Component) {
    _inherits(MdiLanguageCss3, _React$Component);

    function MdiLanguageCss3() {
        _classCallCheck(this, MdiLanguageCss3);

        return _possibleConstructorReturn(this, (MdiLanguageCss3.__proto__ || Object.getPrototypeOf(MdiLanguageCss3)).apply(this, arguments));
    }

    _createClass(MdiLanguageCss3, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 5.01653,2.99994L 4.34886,6.33829L 17.9368,6.33829L 17.5128,8.49468L 3.91578,8.49468L 3.25713,11.833L 16.8451,11.833L 16.0872,15.6405L 10.6105,17.4541L 5.86465,15.6405L 6.18946,13.9894L 2.85111,13.9894L 2.05713,17.9954L 9.90675,20.9999L 18.9564,17.9954L 20.1564,11.9684L 20.4,10.7593L 21.9428,2.99994L 5.01653,2.99994 Z ' })
                )
            );
        }
    }]);

    return MdiLanguageCss3;
}(React.Component);

exports.default = MdiLanguageCss3;
module.exports = exports['default'];