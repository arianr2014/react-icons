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

var MdiBorderAll = function (_React$Component) {
    _inherits(MdiBorderAll, _React$Component);

    function MdiBorderAll() {
        _classCallCheck(this, MdiBorderAll);

        return _possibleConstructorReturn(this, (MdiBorderAll.__proto__ || Object.getPrototypeOf(MdiBorderAll)).apply(this, arguments));
    }

    _createClass(MdiBorderAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,10.9981L 12.9994,10.9981L 12.9994,4.99813L 18.9994,4.99813M 18.9994,18.9981L 12.9994,18.9981L 12.9994,12.9981L 18.9994,12.9981M 10.9994,10.9981L 4.99938,10.9981L 4.99938,4.99813L 10.9994,4.99813M 10.9994,18.9981L 4.99938,18.9981L 4.99938,12.9981L 10.9994,12.9981M 2.99938,20.9981L 20.9994,20.9981L 20.9994,2.99813L 2.99938,2.99813L 2.99938,20.9981 Z ' })
                )
            );
        }
    }]);

    return MdiBorderAll;
}(React.Component);

exports.default = MdiBorderAll;
module.exports = exports['default'];