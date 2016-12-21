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

var MdiPandora = function (_React$Component) {
    _inherits(MdiPandora, _React$Component);

    function MdiPandora() {
        _classCallCheck(this, MdiPandora);

        return _possibleConstructorReturn(this, (MdiPandora.__proto__ || Object.getPrototypeOf(MdiPandora)).apply(this, arguments));
    }

    _createClass(MdiPandora, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-linejoin': 'round', d: 'M 16.8735,7.72667C 16.8735,9.89831 15.6724,11.6995 13.0858,11.6995L 10.4526,11.6995L 10.4526,3.66306L 13.0858,3.66306C 15.6724,3.66306 16.8735,5.51008 16.8735,7.72667 Z M 10.4526,15.6724L 10.4526,13.4092L 13.0858,13.4092C 17.8436,13.4092 20.4759,10.9146 20.4759,7.72667C 20.4759,4.44757 17.8436,2 13.0858,2L 3.52405,2L 3.52405,2.92392C 6.6192,2.92392 7.17355,3.66306 7.17355,8.28099L 7.17355,15.6724C 7.17355,20.2912 6.6192,21.0761 3.52405,21.0761L 3.52405,22L 14.1013,22L 14.1013,21.0761C 11.0066,21.0761 10.4526,20.2912 10.4526,15.6724 Z ' })
                )
            );
        }
    }]);

    return MdiPandora;
}(React.Component);

exports.default = MdiPandora;
module.exports = exports['default'];