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

var MdiCommentQuestionOutline = function (_React$Component) {
    _inherits(MdiCommentQuestionOutline, _React$Component);

    function MdiCommentQuestionOutline() {
        _classCallCheck(this, MdiCommentQuestionOutline);

        return _possibleConstructorReturn(this, (MdiCommentQuestionOutline.__proto__ || Object.getPrototypeOf(MdiCommentQuestionOutline)).apply(this, arguments));
    }

    _createClass(MdiCommentQuestionOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 4,1.998C 2.89599,1.998 2.00977,2.893 2.00977,3.998L 2,16C 2,17.1046 2.89543,18 4,18L 8,18L 8,21C 8,21.5523 8.44772,22 9,22L 9.5,22L 9.502,21.998C 9.75444,21.9954 10.0047,21.8976 10.1973,21.705L 13.9043,18L 20,17.998C 21.1035,17.998 22,17.102 22,15.998L 22,3.998C 22,2.893 21.1035,1.998 20,1.998L 4,1.998 Z M 4,4L 20,4L 20,16L 13.0762,16L 10,19.0762L 10,16L 4,16L 4,4 Z M 12.1855,5.498C 11.3028,5.498 10.5896,5.6798 10.0488,6.043C 9.51201,6.4027 9.22245,6.9844 9.26953,7.6934C 0.206849,7.6934 6.57429,7.6934 11.2363,7.6934C 11.2443,7.4132 11.3386,7.2024 11.5176,7.0605C 11.6965,6.9187 11.9191,6.8477 12.1855,6.8477C 12.5156,6.8477 12.7703,6.9345 12.9492,7.1074C 13.1282,7.2804 13.2168,7.5122 13.2168,7.8027C 13.2168,8.0829 13.1395,8.3305 12.9844,8.5449C 12.8333,8.7594 12.6238,8.9387 12.3574,9.084C 11.8405,9.3987 11.4859,9.6759 11.291,9.918C 11.0962,10.1601 10.9962,10.5232 10.9922,11.0039L 13.0078,11.0039C 13.0078,10.7168 13.0512,10.4902 13.1387,10.3242C 13.2301,10.1547 13.4037,9.9968 13.6582,9.8516C 14.1155,9.644 14.4909,9.3593 14.7852,8.9961C 15.0834,8.6329 15.2324,8.2351 15.2324,7.8027C 15.2324,7.0972 14.9608,6.5361 14.416,6.1211C 13.8752,5.7061 13.1319,5.498 12.1855,5.498 Z M 11,12L 11,14L 13,14L 13,12L 11,12 Z ' })
                )
            );
        }
    }]);

    return MdiCommentQuestionOutline;
}(React.Component);

exports.default = MdiCommentQuestionOutline;
module.exports = exports['default'];