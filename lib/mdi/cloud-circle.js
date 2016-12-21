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

var MdiCloudCircle = function (_React$Component) {
    _inherits(MdiCloudCircle, _React$Component);

    function MdiCloudCircle() {
        _classCallCheck(this, MdiCloudCircle);

        return _possibleConstructorReturn(this, (MdiCloudCircle.__proto__ || Object.getPrototypeOf(MdiCloudCircle)).apply(this, arguments));
    }

    _createClass(MdiCloudCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.4994,15.9981L 7.9994,15.9981C 6.3424,15.9981 4.9994,14.6551 4.9994,12.9981C 4.9994,11.3411 6.3424,9.99807 7.9994,9.99807C 8.0464,9.99807 8.0904,10.0101 8.1364,10.0121C 8.5774,8.28206 10.1324,6.99807 11.9994,6.99807C 14.2084,6.99807 15.9994,8.78905 15.9994,10.9981L 16.4994,10.9981C 17.8804,10.9981 18.9994,12.1171 18.9994,13.4981C 18.9994,14.8791 17.8804,15.9981 16.4994,15.9981 Z M 11.9994,1.99807C 6.4764,1.99807 1.9994,6.47506 1.9994,11.9981C 1.9994,17.5211 6.4764,21.9981 11.9994,21.9981C 17.5224,21.9981 21.9994,17.5211 21.9994,11.9981C 21.9994,6.47506 17.5224,1.99807 11.9994,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiCloudCircle;
}(React.Component);

exports.default = MdiCloudCircle;
module.exports = exports['default'];