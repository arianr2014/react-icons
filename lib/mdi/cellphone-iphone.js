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

var MdiCellphoneIphone = function (_React$Component) {
    _inherits(MdiCellphoneIphone, _React$Component);

    function MdiCellphoneIphone() {
        _classCallCheck(this, MdiCellphoneIphone);

        return _possibleConstructorReturn(this, (MdiCellphoneIphone.__proto__ || Object.getPrototypeOf(MdiCellphoneIphone)).apply(this, arguments));
    }

    _createClass(MdiCellphoneIphone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15.9994,17.9981L 6.99939,17.9981L 6.99939,3.99807L 15.9994,3.99807M 11.4994,21.9981C 10.6714,21.9981 9.99939,21.3261 9.99939,20.4981C 9.99939,19.6701 10.6714,18.9981 11.4994,18.9981C 12.3274,18.9981 12.9994,19.6701 12.9994,20.4981C 12.9994,21.3261 12.3274,21.9981 11.4994,21.9981 Z M 15.4994,0.998068L 7.49939,0.998068C 6.11839,0.998068 4.99939,2.11706 4.99939,3.49807L 4.99939,20.4981C 4.99939,21.8791 6.11839,22.9981 7.49939,22.9981L 15.4994,22.9981C 16.8804,22.9981 17.9994,21.8791 17.9994,20.4981L 17.9994,3.49807C 17.9994,2.11706 16.8804,0.998068 15.4994,0.998068 Z ' })
                )
            );
        }
    }]);

    return MdiCellphoneIphone;
}(React.Component);

exports.default = MdiCellphoneIphone;
module.exports = exports['default'];