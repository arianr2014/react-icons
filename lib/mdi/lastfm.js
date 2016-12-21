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

var MdiLastfm = function (_React$Component) {
    _inherits(MdiLastfm, _React$Component);

    function MdiLastfm() {
        _classCallCheck(this, MdiLastfm);

        return _possibleConstructorReturn(this, (MdiLastfm.__proto__ || Object.getPrototypeOf(MdiLastfm)).apply(this, arguments));
    }

    _createClass(MdiLastfm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.0067,17.9313C 15.9245,17.9229 14.8133,16.8971 14.0422,15.0898L 13.8222,14.5967L 11.92,10.2311C 11.2911,8.68579 9.72445,7.64178 7.9578,7.64178C 5.56891,7.64178 3.63111,9.59357 3.63111,12.0007C 3.63111,14.408 5.56891,16.3598 7.9578,16.3598C 9.62446,16.3598 11.0756,15.4109 11.7978,14.0196L 12.5689,15.8058C 11.4756,17.1465 9.81557,18 7.9578,18C 4.6689,18 2.00001,15.3158 2.00001,12.0007C 2.00001,8.68757 4.6689,6.00001 7.9578,6.00001C 10.4422,6.00001 12.4489,7.33535 13.4667,9.7018C 13.5444,9.88535 14.5444,12.2402 15.4178,14.2442C 15.9578,15.4847 16.4178,16.3071 17.9111,16.3582C 19.38,16.4089 20.3867,15.5093 20.3867,14.372C 20.3867,13.2609 19.62,12.994 18.3222,12.5596C 15.9911,11.7862 14.7867,11.0093 14.7867,9.14802C 14.7867,7.33224 16.0134,6.12135 18.0067,6.12135C 19.3067,6.12135 20.2444,6.70314 20.8933,7.86312L 19.62,8.51846C 19.1378,7.8418 18.6089,7.57467 17.9356,7.57467C 17,7.57467 16.3333,8.23024 16.3333,9.10179C 16.3333,10.3391 17.4311,10.526 18.9689,11.034C 21.0378,11.7125 22,12.4873 22,14.4227C 22,16.4549 20.2689,17.9347 18.0067,17.9313 Z ' })
                )
            );
        }
    }]);

    return MdiLastfm;
}(React.Component);

exports.default = MdiLastfm;
module.exports = exports['default'];