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

var MdiPill = function (_React$Component) {
    _inherits(MdiPill, _React$Component);

    function MdiPill() {
        _classCallCheck(this, MdiPill);

        return _possibleConstructorReturn(this, (MdiPill.__proto__ || Object.getPrototypeOf(MdiPill)).apply(this, arguments));
    }

    _createClass(MdiPill, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4.22182,11.2929L 11.2929,4.22185C 13.636,1.87871 17.435,1.87871 19.7781,4.22185C 22.1213,6.56499 22.1213,10.364 19.7781,12.7071L 12.7071,19.7782C 10.3639,22.1213 6.56496,22.1213 4.22182,19.7782C 1.87868,17.435 1.87868,13.636 4.22182,11.2929 Z M 5.63602,12.7071C 4.58911,13.754 4.24383,15.2369 4.6002,16.5713L 10.5858,10.5858L 14.8284,14.8284L 18.3639,11.2929C 19.926,9.73079 19.926,7.19813 18.3639,5.63603C 16.8018,4.07393 14.2692,4.07393 12.7071,5.63603L 5.63602,12.7071 Z ' })
                )
            );
        }
    }]);

    return MdiPill;
}(React.Component);

exports.default = MdiPill;
module.exports = exports['default'];