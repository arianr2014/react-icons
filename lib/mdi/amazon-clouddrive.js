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

var MdiAmazonClouddrive = function (_React$Component) {
    _inherits(MdiAmazonClouddrive, _React$Component);

    function MdiAmazonClouddrive() {
        _classCallCheck(this, MdiAmazonClouddrive);

        return _possibleConstructorReturn(this, (MdiAmazonClouddrive.__proto__ || Object.getPrototypeOf(MdiAmazonClouddrive)).apply(this, arguments));
    }

    _createClass(MdiAmazonClouddrive, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4.94118,11.1176C 5.22705,11.1176 5.50339,11.1584 5.76471,11.2345C 5.76514,9.09071 7.50317,7.35294 9.64706,7.35294C 11.2737,7.35294 12.6666,8.35329 13.2443,9.77232C 13.825,9.01656 14.738,8.52941 15.7647,8.52941C 17.519,8.52941 18.9412,9.95157 18.9412,11.7059C 18.9412,11.9548 18.9125,12.1971 18.8584,12.4296C 19.1049,12.3419 19.3704,12.2941 19.6471,12.2941C 20.9466,12.2941 22,13.3476 22,14.6471C 22,15.9465 20.9466,17 19.6471,17C 18.3476,17 6.35882,17 4.94118,17C 3.31681,17 2,15.6832 2,14.0588C 2,12.4345 3.31682,11.1176 4.94118,11.1176 Z ' })
                )
            );
        }
    }]);

    return MdiAmazonClouddrive;
}(React.Component);

exports.default = MdiAmazonClouddrive;
module.exports = exports['default'];