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

var MdiMessageDraw = function (_React$Component) {
    _inherits(MdiMessageDraw, _React$Component);

    function MdiMessageDraw() {
        _classCallCheck(this, MdiMessageDraw);

        return _possibleConstructorReturn(this, (MdiMessageDraw.__proto__ || Object.getPrototypeOf(MdiMessageDraw)).apply(this, arguments));
    }

    _createClass(MdiMessageDraw, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.9994,13.9981L 10.4994,13.9981L 12.4994,11.9981L 17.9994,11.9981M 5.99939,13.9981L 5.99939,11.5231L 12.8774,4.64406C 13.0734,4.44907 13.3894,4.44907 13.5854,4.64406L 15.3524,6.41207C 15.5484,6.60706 15.5484,6.92406 15.3524,7.11907L 8.4744,13.9981M 19.9994,1.99807L 3.99939,1.99807C 2.89539,1.99807 2.0094,2.89307 2.0094,3.99807L 1.99939,21.9981L 5.99939,17.9981L 19.9994,17.9981C 21.1034,17.9981 21.9994,17.1031 21.9994,15.9981L 21.9994,3.99807C 21.9994,2.89307 21.1034,1.99807 19.9994,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiMessageDraw;
}(React.Component);

exports.default = MdiMessageDraw;
module.exports = exports['default'];