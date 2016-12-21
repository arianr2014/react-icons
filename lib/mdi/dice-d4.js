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

var MdiDiceD4 = function (_React$Component) {
    _inherits(MdiDiceD4, _React$Component);

    function MdiDiceD4() {
        _classCallCheck(this, MdiDiceD4);

        return _possibleConstructorReturn(this, (MdiDiceD4.__proto__ || Object.getPrototypeOf(MdiDiceD4)).apply(this, arguments));
    }

    _createClass(MdiDiceD4, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 13.4283,15.145L 14.2883,15.145L 14.2883,16.36L 13.4283,16.36L 13.4283,18L 11.9233,18L 11.9233,16.36L 8.815,16.36L 8.74667,15.4117L 11.9083,10.4167L 13.4283,10.4167L 13.4283,15.145 Z M 10.2467,15.145L 11.9233,15.145L 11.9233,12.4683L 10.2467,15.145 Z M 22,21L 2.00053,21C 1.6392,21 1.30652,20.806 1.12944,20.4909C 0.952393,20.1759 0.958252,19.7904 1.14506,19.4819L 11.1451,2.98185C 11.5084,2.38281 12.4934,2.38281 12.8554,2.98185L 22.8554,19.4819C 23.0429,19.7904 23.0481,20.1759 22.871,20.4909C 22.694,20.806 22.3606,21 22,21 Z M 3.776,19L 20.2252,19L 12.0005,5.42973L 3.776,19 Z ' })
                )
            );
        }
    }]);

    return MdiDiceD4;
}(React.Component);

exports.default = MdiDiceD4;
module.exports = exports['default'];