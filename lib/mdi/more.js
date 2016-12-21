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

var MdiMore = function (_React$Component) {
    _inherits(MdiMore, _React$Component);

    function MdiMore() {
        _classCallCheck(this, MdiMore);

        return _possibleConstructorReturn(this, (MdiMore.__proto__ || Object.getPrototypeOf(MdiMore)).apply(this, arguments));
    }

    _createClass(MdiMore, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9997,13.4981C 18.1717,13.4981 17.4997,12.8261 17.4997,11.9981C 17.4997,11.1701 18.1717,10.4981 18.9997,10.4981C 19.8277,10.4981 20.4997,11.1701 20.4997,11.9981C 20.4997,12.8261 19.8277,13.4981 18.9997,13.4981 Z M 13.9997,13.4981C 13.1717,13.4981 12.4997,12.8261 12.4997,11.9981C 12.4997,11.1701 13.1717,10.4981 13.9997,10.4981C 14.8277,10.4981 15.4997,11.1701 15.4997,11.9981C 15.4997,12.8261 14.8277,13.4981 13.9997,13.4981 Z M 8.99969,13.4981C 8.17169,13.4981 7.49969,12.8261 7.49969,11.9981C 7.49969,11.1701 8.17169,10.4981 8.99969,10.4981C 9.8277,10.4981 10.4997,11.1701 10.4997,11.9981C 10.4997,12.8261 9.8277,13.4981 8.99969,13.4981 Z M 21.9997,2.99807L 6.99969,2.99807C 6.30969,2.99807 5.76569,3.34807 5.4057,3.88007L -0.000305176,11.9931L 5.4057,20.1061C 5.76569,20.6391 6.37469,20.9981 7.0647,20.9981L 21.9997,20.9981C 23.1037,20.9981 23.9997,20.1021 23.9997,18.9981L 23.9997,4.99807C 23.9997,3.89306 23.1037,2.99807 21.9997,2.99807 Z ' })
                )
            );
        }
    }]);

    return MdiMore;
}(React.Component);

exports.default = MdiMore;
module.exports = exports['default'];