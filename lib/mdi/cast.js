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

var MdiCast = function (_React$Component) {
    _inherits(MdiCast, _React$Component);

    function MdiCast() {
        _classCallCheck(this, MdiCast);

        return _possibleConstructorReturn(this, (MdiCast.__proto__ || Object.getPrototypeOf(MdiCast)).apply(this, arguments));
    }

    _createClass(MdiCast, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 0.999382,9.99807L 0.999382,11.9981C 5.97038,11.9981 9.99938,16.0271 9.99938,20.9981L 11.9994,20.9981C 11.9994,14.9231 7.07338,9.99807 0.999382,9.99807 Z M 0.999382,13.9981L 0.999382,15.9981C 3.76138,15.9981 5.99938,18.2361 5.99938,20.9981L 7.99938,20.9981C 7.99938,17.1321 4.86438,13.9981 0.999382,13.9981 Z M 0.999382,17.9981L 0.999382,20.9981L 3.99938,20.9981C 3.99938,19.3421 2.65538,17.9981 0.999382,17.9981 Z M 20.9994,2.99807L 2.99938,2.99807C 1.89438,2.99807 0.999382,3.89406 0.999382,4.99807L 0.999382,7.99807L 2.99938,7.99807L 2.99938,4.99807L 20.9994,4.99807L 20.9994,18.9981L 13.9994,18.9981L 13.9994,20.9981L 20.9994,20.9981C 22.1029,20.9981 22.9994,20.1021 22.9994,18.9981L 22.9994,4.99807C 22.9994,3.89406 22.1029,2.99807 20.9994,2.99807 Z ' })
                )
            );
        }
    }]);

    return MdiCast;
}(React.Component);

exports.default = MdiCast;
module.exports = exports['default'];