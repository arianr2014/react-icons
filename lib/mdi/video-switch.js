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

var MdiVideoSwitch = function (_React$Component) {
    _inherits(MdiVideoSwitch, _React$Component);

    function MdiVideoSwitch() {
        _classCallCheck(this, MdiVideoSwitch);

        return _possibleConstructorReturn(this, (MdiVideoSwitch.__proto__ || Object.getPrototypeOf(MdiVideoSwitch)).apply(this, arguments));
    }

    _createClass(MdiVideoSwitch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.9994,15.4981L 12.9994,12.9981L 6.9994,12.9981L 6.9994,15.4981L 3.4994,11.9981L 6.9994,8.49807L 6.9994,10.9981L 12.9994,10.9981L 12.9994,8.49807L 16.4994,11.9981M 17.9994,9.49807L 17.9994,5.99807C 17.9994,5.44607 17.5524,4.99807 16.9994,4.99807L 2.9994,4.99807C 2.4464,4.99807 1.9994,5.44607 1.9994,5.99807L 1.9994,17.9981C 1.9994,18.5501 2.4464,18.9981 2.9994,18.9981L 16.9994,18.9981C 17.5524,18.9981 17.9994,18.5501 17.9994,17.9981L 17.9994,14.4981L 21.9994,18.4981L 21.9994,5.49807L 17.9994,9.49807 Z ' })
                )
            );
        }
    }]);

    return MdiVideoSwitch;
}(React.Component);

exports.default = MdiVideoSwitch;
module.exports = exports['default'];