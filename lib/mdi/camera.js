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

var MdiCamera = function (_React$Component) {
    _inherits(MdiCamera, _React$Component);

    function MdiCamera() {
        _classCallCheck(this, MdiCamera);

        return _possibleConstructorReturn(this, (MdiCamera.__proto__ || Object.getPrototypeOf(MdiCamera)).apply(this, arguments));
    }

    _createClass(MdiCamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,4.00002L 7,4L 9,2.00001L 15,2.00001L 17,4L 20,4.00002C 21.1045,4.00002 22,4.89545 22,6.00002L 22,18C 22,19.1046 21.1045,20 20,20L 4,20C 2.89543,20 2,19.1046 2,18L 2,6.00002C 2,4.89545 2.89543,4.00002 4,4.00002 Z M 12,7C 9.23858,7 7,9.23858 7,12C 7,14.7614 9.23858,17 12,17C 14.7614,17 17,14.7614 17,12C 17,9.23858 14.7614,7 12,7 Z M 12,9C 13.6568,9 15,10.3432 15,12C 15,13.6569 13.6568,15 12,15C 10.3431,15 9,13.6569 9,12C 9,10.3432 10.3431,9 12,9 Z ' })
                )
            );
        }
    }]);

    return MdiCamera;
}(React.Component);

exports.default = MdiCamera;
module.exports = exports['default'];