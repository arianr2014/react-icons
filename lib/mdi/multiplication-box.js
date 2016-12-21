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

var MdiMultiplicationBox = function (_React$Component) {
    _inherits(MdiMultiplicationBox, _React$Component);

    function MdiMultiplicationBox() {
        _classCallCheck(this, MdiMultiplicationBox);

        return _possibleConstructorReturn(this, (MdiMultiplicationBox.__proto__ || Object.getPrototypeOf(MdiMultiplicationBox)).apply(this, arguments));
    }

    _createClass(MdiMultiplicationBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,2.99813C 20.1024,2.99813 20.9994,3.89413 20.9994,4.99813L 20.9994,18.9981C 20.9994,20.1021 20.1024,20.9981 18.9994,20.9981L 4.9994,20.9981C 3.8934,20.9981 2.9994,20.1021 2.9994,18.9981L 2.9994,4.99813C 2.9994,3.89413 3.8934,2.99813 4.9994,2.99813L 18.9994,2.99813 Z M 11,17L 13,17L 13,13.7305L 15.8295,15.3641L 16.8295,13.6321L 13.9994,11.9981L 16.8295,10.3642L 15.8295,8.63211L 13,10.2657L 13,7.00001L 11,7.00001L 11,10.2664L 8.16927,8.63208L 7.16927,10.3641L 9.99943,11.9981L 7.16929,13.6321L 8.16929,15.3642L 11,13.7298L 11,17 Z ' })
                )
            );
        }
    }]);

    return MdiMultiplicationBox;
}(React.Component);

exports.default = MdiMultiplicationBox;
module.exports = exports['default'];