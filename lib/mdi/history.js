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

var MdiHistory = function (_React$Component) {
    _inherits(MdiHistory, _React$Component);

    function MdiHistory() {
        _classCallCheck(this, MdiHistory);

        return _possibleConstructorReturn(this, (MdiHistory.__proto__ || Object.getPrototypeOf(MdiHistory)).apply(this, arguments));
    }

    _createClass(MdiHistory, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 10.9994,6.99805L 10.9994,12.1121L 15.7144,14.9041L 16.4854,13.619L 12.4994,11.248L 12.4994,6.99805M 12.4944,1.99805C 8.96838,1.99805 5.9054,3.92004 4.27039,6.77002L 1.99939,4.49805L 1.99939,10.998L 8.49939,10.998L 5.74738,8.24603C 6.95639,5.73303 9.5224,3.99805 12.4994,3.99805C 16.6434,3.99805 19.9994,7.35602 19.9994,11.498C 19.9994,15.6401 16.6434,18.998 12.4994,18.998C 9.23438,18.998 6.46539,16.9091 5.43539,13.998L 3.34238,13.998C 4.43939,18.03 8.11139,20.998 12.4944,20.998C 17.7444,20.998 21.9994,16.7451 21.9994,11.498C 21.9994,6.25104 17.7444,1.99805 12.4944,1.99805 Z ' })
                )
            );
        }
    }]);

    return MdiHistory;
}(React.Component);

exports.default = MdiHistory;
module.exports = exports['default'];