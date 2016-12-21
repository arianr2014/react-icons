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

var MdiCameraTimer = function (_React$Component) {
    _inherits(MdiCameraTimer, _React$Component);

    function MdiCameraTimer() {
        _classCallCheck(this, MdiCameraTimer);

        return _possibleConstructorReturn(this, (MdiCameraTimer.__proto__ || Object.getPrototypeOf(MdiCameraTimer)).apply(this, arguments));
    }

    _createClass(MdiCameraTimer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4.9363,6.3462C 4.54577,5.95568 4.54577,5.32251 4.9363,4.93199C 5.32682,4.54146 5.95999,4.54146 6.35051,4.93199L 13.0736,10.3104L 13.4216,10.5888C 14.2026,11.3699 14.2026,12.6362 13.4216,13.4173C 12.6405,14.1983 11.3742,14.1983 10.5931,13.4173L 10.3148,13.0693L 4.9363,6.3462 Z M 11.9994,19.9981C 16.4174,19.9981 19.9994,16.4171 19.9994,11.9981C 19.9994,9.78941 19.1046,7.78983 17.6578,6.34221L 19.0718,4.92822C 20.8807,6.73775 21.9994,9.23722 21.9994,11.9981C 21.9994,17.5211 17.5224,21.9981 11.9994,21.9981C 6.47702,21.9981 2.00043,17.5221 1.99939,12L 3.99939,12C 4.00043,16.4181 7.58202,19.9981 11.9994,19.9981 Z M 12,1.00001C 13.1046,1.00001 14,1.89544 14,3C 14,4.10457 13.1046,5 12,5C 10.8954,5 10,4.10457 10,3C 10,1.89544 10.8954,1.00001 12,1.00001 Z ' })
                )
            );
        }
    }]);

    return MdiCameraTimer;
}(React.Component);

exports.default = MdiCameraTimer;
module.exports = exports['default'];