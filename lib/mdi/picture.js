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

var MdiPicture = function (_React$Component) {
    _inherits(MdiPicture, _React$Component);

    function MdiPicture() {
        _classCallCheck(this, MdiPicture);

        return _possibleConstructorReturn(this, (MdiPicture.__proto__ || Object.getPrototypeOf(MdiPicture)).apply(this, arguments));
    }

    _createClass(MdiPicture, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,2.00001L 20,2.00001C 21.1046,2.00001 22,2.89543 22,4L 22,20C 22,21.1046 21.1046,22 20,22L 4,22C 2.89543,22 2,21.1046 2,20L 2,4C 2,2.89543 2.89543,2.00001 4,2.00001 Z M 7,4C 5.61929,4 4.5,5.11929 4.5,6.5C 4.5,7.88071 5.61929,9 7,9C 8.38071,9 9.5,7.88071 9.5,6.5C 9.5,5.11929 8.38071,4 7,4 Z M 4,18L 4,20L 20,20L 20,14L 17,11L 11,17L 8,14L 4,18 Z ' })
                )
            );
        }
    }]);

    return MdiPicture;
}(React.Component);

exports.default = MdiPicture;
module.exports = exports['default'];