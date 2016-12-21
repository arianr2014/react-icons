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

var MdiPlusBox = function (_React$Component) {
    _inherits(MdiPlusBox, _React$Component);

    function MdiPlusBox() {
        _classCallCheck(this, MdiPlusBox);

        return _possibleConstructorReturn(this, (MdiPlusBox.__proto__ || Object.getPrototypeOf(MdiPlusBox)).apply(this, arguments));
    }

    _createClass(MdiPlusBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9994,12.9981L 12.9994,12.9981L 12.9994,16.9981L 10.9994,16.9981L 10.9994,12.9981L 6.9994,12.9981L 6.9994,10.9981L 10.9994,10.9981L 10.9994,6.99813L 12.9994,6.99813L 12.9994,10.9981L 16.9994,10.9981M 18.9994,2.99813L 4.9994,2.99813C 3.8934,2.99813 2.9994,3.89412 2.9994,4.99813L 2.9994,18.9981C 2.9994,20.1021 3.8934,20.9981 4.9994,20.9981L 18.9994,20.9981C 20.1024,20.9981 20.9994,20.1021 20.9994,18.9981L 20.9994,4.99813C 20.9994,3.89412 20.1024,2.99813 18.9994,2.99813 Z ' })
                )
            );
        }
    }]);

    return MdiPlusBox;
}(React.Component);

exports.default = MdiPlusBox;
module.exports = exports['default'];