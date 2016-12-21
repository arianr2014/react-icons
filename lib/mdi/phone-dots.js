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

var MdiPhoneDots = function (_React$Component) {
    _inherits(MdiPhoneDots, _React$Component);

    function MdiPhoneDots() {
        _classCallCheck(this, MdiPhoneDots);

        return _possibleConstructorReturn(this, (MdiPhoneDots.__proto__ || Object.getPrototypeOf(MdiPhoneDots)).apply(this, arguments));
    }

    _createClass(MdiPhoneDots, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,10.998L 20.9994,10.998L 20.9994,8.99805L 18.9994,8.99805M 19.9994,15.498C 18.7524,15.498 17.5524,15.2971 16.4274,14.9301C 16.0814,14.8181 15.6864,14.9 15.4114,15.175L 13.2114,17.3781C 10.3784,15.9371 8.0634,13.624 6.6224,10.793L 8.8224,8.58502C 9.09741,8.31104 9.17939,7.91608 9.0664,7.57007C 8.6994,6.44604 8.4994,5.24506 8.4994,3.99805C 8.4994,3.44507 8.05239,2.99805 7.4994,2.99805L 3.9994,2.99805C 3.44641,2.99805 2.9994,3.44507 2.9994,3.99805C 2.9994,13.387 10.6104,20.998 19.9994,20.998C 20.5524,20.998 20.9994,20.551 20.9994,19.998L 20.9994,16.498C 20.9994,15.9451 20.5524,15.498 19.9994,15.498 Z M 16.9994,8.99805L 14.9994,8.99805L 14.9994,10.998L 16.9994,10.998M 12.9994,8.99805L 10.9994,8.99805L 10.9994,10.998L 12.9994,10.998L 12.9994,8.99805 Z ' })
                )
            );
        }
    }]);

    return MdiPhoneDots;
}(React.Component);

exports.default = MdiPhoneDots;
module.exports = exports['default'];