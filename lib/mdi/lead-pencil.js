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

var MdiLeadPencil = function (_React$Component) {
    _inherits(MdiLeadPencil, _React$Component);

    function MdiLeadPencil() {
        _classCallCheck(this, MdiLeadPencil);

        return _possibleConstructorReturn(this, (MdiLeadPencil.__proto__ || Object.getPrototypeOf(MdiLeadPencil)).apply(this, arguments));
    }

    _createClass(MdiLeadPencil, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.8363,2.73375C 16.45,2.73375 16.0688,2.88125 15.7712,3.17375L 13.6525,5.2925L 18.955,10.5962L 21.0737,8.47625C 21.665,7.89 21.665,6.94375 21.0737,6.3575L 17.895,3.17375C 17.6025,2.88125 17.2163,2.73375 16.8363,2.73375 Z M 12.9437,6.00125L 4.84375,14.1062L 7.4025,14.39L 7.57875,16.675L 9.85875,16.85L 10.1462,19.4088L 18.2475,11.3038M 4.2475,15.0437L 2.515,21.7337L 9.19875,19.9412L 8.955,17.7838L 6.645,17.6075L 6.465,15.2925' })
                )
            );
        }
    }]);

    return MdiLeadPencil;
}(React.Component);

exports.default = MdiLeadPencil;
module.exports = exports['default'];