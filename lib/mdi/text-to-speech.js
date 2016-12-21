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

var MdiTextToSpeech = function (_React$Component) {
    _inherits(MdiTextToSpeech, _React$Component);

    function MdiTextToSpeech() {
        _classCallCheck(this, MdiTextToSpeech);

        return _possibleConstructorReturn(this, (MdiTextToSpeech.__proto__ || Object.getPrototypeOf(MdiTextToSpeech)).apply(this, arguments));
    }

    _createClass(MdiTextToSpeech, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8.00001,7C 9.10458,7 10,7.89543 10,9L 10,14C 10,15.1046 9.10458,16 8.00001,16C 6.89544,16 6.00001,15.1046 6.00001,14L 6.00001,9C 6.00001,7.89543 6.89544,7 8.00001,7 Z M 14,14C 14,16.973 11.8377,19.441 9,19.917L 9,22L 7,22L 7,19.917C 4.16229,19.441 2.00001,16.973 2.00001,14L 4.00001,14C 4.00001,16.2091 5.79087,18 8,18C 10.2091,18 12,16.2091 12,14L 14,14 Z M 21.4142,9.41422L 17.1716,13.6569L 18.176,10L 14,10C 12.8954,10 12,9.10457 12,8L 12,4.00002C 12,2.89545 12.8954,2.00002 14,2.00002L 20,2.00002C 21.1046,2.00002 22,2.89545 22,4.00002L 22,8C 22,8.55228 21.7761,9.05229 21.4142,9.41422 Z ' })
                )
            );
        }
    }]);

    return MdiTextToSpeech;
}(React.Component);

exports.default = MdiTextToSpeech;
module.exports = exports['default'];