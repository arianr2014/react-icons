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

var MdiCellphoneDock = function (_React$Component) {
    _inherits(MdiCellphoneDock, _React$Component);

    function MdiCellphoneDock() {
        _classCallCheck(this, MdiCellphoneDock);

        return _possibleConstructorReturn(this, (MdiCellphoneDock.__proto__ || Object.getPrototypeOf(MdiCellphoneDock)).apply(this, arguments));
    }

    _createClass(MdiCellphoneDock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15.9994,14.9981L 7.9994,14.9981L 7.9994,4.99807L 15.9994,4.99807M 15.9994,1.00808L 7.9994,0.998068C 6.8944,0.998068 5.9994,1.89406 5.9994,2.99807L 5.9994,16.9981C 5.9994,18.1021 6.8944,18.9981 7.9994,18.9981L 15.9994,18.9981C 17.1034,18.9981 17.9994,18.1021 17.9994,16.9981L 17.9994,2.99807C 17.9994,1.89406 17.1034,1.00808 15.9994,1.00808 Z M 7.9994,22.9981L 15.9994,22.9981L 15.9994,20.9981L 7.9994,20.9981L 7.9994,22.9981 Z ' })
                )
            );
        }
    }]);

    return MdiCellphoneDock;
}(React.Component);

exports.default = MdiCellphoneDock;
module.exports = exports['default'];