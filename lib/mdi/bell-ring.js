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

var MdiBellRing = function (_React$Component) {
    _inherits(MdiBellRing, _React$Component);

    function MdiBellRing() {
        _classCallCheck(this, MdiBellRing);

        return _possibleConstructorReturn(this, (MdiBellRing.__proto__ || Object.getPrototypeOf(MdiBellRing)).apply(this, arguments));
    }

    _createClass(MdiBellRing, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.4994,21.9981C 11.6374,21.9981 11.7724,21.9844 11.9024,21.9581C 12.5534,21.8242 13.0894,21.3751 13.3424,20.7764C 13.4434,20.5371 13.4994,20.2741 13.4994,19.9981L 9.49939,19.9981C 9.49939,21.1016 10.3954,21.9981 11.4994,21.9981 Z M 17.9994,10.4981C 17.9994,7.42507 15.8644,4.85707 12.9994,4.17907L 12.9994,3.49807C 12.9994,2.67006 12.3274,1.99807 11.4994,1.99807C 10.6714,1.99807 9.99939,2.67006 9.99939,3.49807L 9.99939,4.17907C 7.1344,4.85707 4.99939,7.42507 4.99939,10.4981L 4.99939,15.9981L 2.99939,17.9981L 2.99939,18.9981L 19.9994,18.9981L 19.9994,17.9981L 17.9994,15.9981M 19.9744,9.99807L 21.9744,9.99807C 21.8224,6.79407 20.2424,3.97207 17.8484,2.14907L 16.4214,3.57607C 18.4564,5.02639 19.8194,7.34807 19.9744,9.99807 Z M 6.57739,3.57607L 5.15039,2.14907C 2.75638,3.97207 1.17639,6.79407 1.02438,9.99807L 3.02438,9.99807C 3.17938,7.34807 4.54239,5.02639 6.57739,3.57607 Z ' })
                )
            );
        }
    }]);

    return MdiBellRing;
}(React.Component);

exports.default = MdiBellRing;
module.exports = exports['default'];