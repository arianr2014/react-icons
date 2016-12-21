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

var MdiCake = function (_React$Component) {
    _inherits(MdiCake, _React$Component);

    function MdiCake() {
        _classCallCheck(this, MdiCake);

        return _possibleConstructorReturn(this, (MdiCake.__proto__ || Object.getPrototypeOf(MdiCake)).apply(this, arguments));
    }

    _createClass(MdiCake, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 11.5,0.500002C 12,0.750006 13,2.39543 13,3.5C 13,4.60457 12.3284,5 11.5,5C 10.6716,5 10,4.85457 10,3.75C 10,2.64543 11,2 11.5,0.500002 Z M 18.5,9C 20.9853,9 23,11.0147 23,13.5C 23,15.0602 22.206,16.435 21,17.2422L 21,23L 12,23L 2.99999,23L 2.99999,17.2422C 1.79401,16.435 0.999997,15.0602 0.999997,13.5C 0.999997,11.0147 3.01471,9 5.49999,9L 9.99999,9.00001L 9.99999,6.00001L 13,6L 13,9L 18.5,9 Z M 12,16C 13.3807,16 14.5,14.8807 14.5,13.5L 16,13.5C 16,14.8807 17.1193,16 18.5,16C 19.8807,16 21,14.8807 21,13.5C 21,12.1193 19.8807,11 18.5,11L 5.5,11C 4.11929,11 3,12.1193 3,13.5C 3,14.8807 4.11929,16 5.5,16C 6.88071,16 8,14.8807 8,13.5L 9.5,13.5C 9.5,14.8807 10.6193,16 12,16 Z ' })
                )
            );
        }
    }]);

    return MdiCake;
}(React.Component);

exports.default = MdiCake;
module.exports = exports['default'];