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

var MdiTshirtV = function (_React$Component) {
    _inherits(MdiTshirtV, _React$Component);

    function MdiTshirtV() {
        _classCallCheck(this, MdiTshirtV);

        return _possibleConstructorReturn(this, (MdiTshirtV.__proto__ || Object.getPrototypeOf(MdiTshirtV)).apply(this, arguments));
    }

    _createClass(MdiTshirtV, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16,21L 8.00001,21C 7.44773,21 7.00001,20.5523 7.00001,20L 7.00001,12.0732L 5.70344,13.1198C 5.31292,13.5103 4.67975,13.5103 4.28923,13.1198L 1.4608,10.2914C 1.07028,9.90084 1.07028,9.26768 1.4608,8.87716L 7.33794,3L 9.00001,3.00001C 9.00001,4.10457 10,6 12,7.25C 14,6 15,4.10457 15,3.00001L 16.6621,3L 22.5392,8.87716C 22.9297,9.26768 22.9297,9.90085 22.5392,10.2914L 19.7108,13.1198C 19.3203,13.5103 18.6871,13.5103 18.2966,13.1198L 17,12.0732L 17,20C 17,20.5523 16.5523,21 16,21 Z M 20.4179,9.58429L 16.111,5.27741C 15,7 14,8.25 12,9.25002C 10,8.25 9,7 7.88898,5.27742L 3.58211,9.58429L 4.99633,10.9985L 7.99481,9.00002L 9,9.00002L 9,19L 15,19L 15,9.00002L 16.0052,9.00002L 19.0037,10.9985L 20.4179,9.58429 Z ' })
                )
            );
        }
    }]);

    return MdiTshirtV;
}(React.Component);

exports.default = MdiTshirtV;
module.exports = exports['default'];