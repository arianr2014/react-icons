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

var MdiMinusCircleOutline = function (_React$Component) {
    _inherits(MdiMinusCircleOutline, _React$Component);

    function MdiMinusCircleOutline() {
        _classCallCheck(this, MdiMinusCircleOutline);

        return _possibleConstructorReturn(this, (MdiMinusCircleOutline.__proto__ || Object.getPrototypeOf(MdiMinusCircleOutline)).apply(this, arguments));
    }

    _createClass(MdiMinusCircleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,19.9983C 7.58838,19.9983 3.99939,16.4092 3.99939,11.9983C 3.99939,7.58724 7.58838,3.99825 11.9994,3.99825C 16.4104,3.99825 19.9994,7.58724 19.9994,11.9983C 19.9994,16.4092 16.4104,19.9983 11.9994,19.9983 Z M 11.9994,1.99825C 6.47638,1.99825 1.99939,6.47524 1.99939,11.9983C 1.99939,17.5212 6.47638,21.9983 11.9994,21.9983C 17.5224,21.9983 21.9994,17.5212 21.9994,11.9983C 21.9994,6.47524 17.5224,1.99825 11.9994,1.99825 Z M 6.99939,12.9983L 16.9994,12.9983L 16.9994,10.9983L 6.99939,10.9983' })
                )
            );
        }
    }]);

    return MdiMinusCircleOutline;
}(React.Component);

exports.default = MdiMinusCircleOutline;
module.exports = exports['default'];