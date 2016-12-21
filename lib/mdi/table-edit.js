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

var MdiTableEdit = function (_React$Component) {
    _inherits(MdiTableEdit, _React$Component);

    function MdiTableEdit() {
        _classCallCheck(this, MdiTableEdit);

        return _possibleConstructorReturn(this, (MdiTableEdit.__proto__ || Object.getPrototypeOf(MdiTableEdit)).apply(this, arguments));
    }

    _createClass(MdiTableEdit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21.7036,13.3507L 20.7001,14.3543L 18.6458,12.3L 19.6494,11.2964C 19.8636,11.0822 20.2103,11.0822 20.424,11.2964L 21.7036,12.5761C 21.9178,12.7897 21.9178,13.1365 21.7036,13.3507 Z M 12.0036,18.9421L 18.0651,12.8807L 20.1194,14.9349L 14.0579,20.9964L 12.0036,20.9964L 12.0036,18.9421 Z M 4,2.00001L 18,2.00001C 19.1046,2.00001 20,2.89543 20,4L 20,8.17158L 16.1716,12L 12,12L 12,16.1716L 10.1716,18L 4,18C 2.89544,18 2,17.1046 2,16L 2,4C 2,2.89543 2.89544,2.00001 4,2.00001 Z M 4,6.00001L 4,10L 10,10L 10,6.00001L 4,6.00001 Z M 12,6.00001L 12,10L 18,10L 18,6.00001L 12,6.00001 Z M 4,12L 4,16L 10,16L 10,12L 4,12 Z ' })
                )
            );
        }
    }]);

    return MdiTableEdit;
}(React.Component);

exports.default = MdiTableEdit;
module.exports = exports['default'];