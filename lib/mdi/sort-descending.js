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

var MdiSortDescending = function (_React$Component) {
    _inherits(MdiSortDescending, _React$Component);

    function MdiSortDescending() {
        _classCallCheck(this, MdiSortDescending);

        return _possibleConstructorReturn(this, (MdiSortDescending.__proto__ || Object.getPrototypeOf(MdiSortDescending)).apply(this, arguments));
    }

    _createClass(MdiSortDescending, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9.9994,12.998L 9.9994,10.998L 18,11L 18,13L 9.9994,12.998 Z M 9.9994,18.998L 9.9994,16.998L 14,17L 14,19L 9.9994,18.998 Z M 9.99999,7.00004L 9.9994,4.99805L 21.9994,4.99805L 22,7.00004L 9.99999,7.00004 Z M 5.9994,16.998L 8.4994,16.998L 4.9994,20.498L 1.4994,16.998L 3.9994,16.998L 4,4.00001L 5.99999,4.00001L 5.9994,16.998 Z ' })
                )
            );
        }
    }]);

    return MdiSortDescending;
}(React.Component);

exports.default = MdiSortDescending;
module.exports = exports['default'];