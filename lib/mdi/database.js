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

var MdiDatabase = function (_React$Component) {
    _inherits(MdiDatabase, _React$Component);

    function MdiDatabase() {
        _classCallCheck(this, MdiDatabase);

        return _possibleConstructorReturn(this, (MdiDatabase.__proto__ || Object.getPrototypeOf(MdiDatabase)).apply(this, arguments));
    }

    _createClass(MdiDatabase, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 12,3C 7.58172,3 4,4.7909 4,7C 4,9.2091 7.58172,11 12,11C 16.4183,11 20,9.2091 20,7C 20,4.7909 16.4183,3 12,3 Z M 4,9L 4,12C 4,14.2091 7.58172,16 12,16C 16.4183,16 20,14.2091 20,12L 20,9C 20,11.2091 16.4183,13 12,13C 7.58172,13 4,11.2091 4,9 Z M 4,14L 4,17C 4,19.2091 7.58172,21 12,21C 16.4183,21 20,19.2091 20,17L 20,14C 20,16.2091 16.4183,18 12,18C 7.58172,18 4,16.2091 4,14 Z ' })
                )
            );
        }
    }]);

    return MdiDatabase;
}(React.Component);

exports.default = MdiDatabase;
module.exports = exports['default'];