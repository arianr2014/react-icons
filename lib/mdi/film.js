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

var MdiFilm = function (_React$Component) {
    _inherits(MdiFilm, _React$Component);

    function MdiFilm() {
        _classCallCheck(this, MdiFilm);

        return _possibleConstructorReturn(this, (MdiFilm.__proto__ || Object.getPrototypeOf(MdiFilm)).apply(this, arguments));
    }

    _createClass(MdiFilm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 3.5,3L 5,3L 5,1.80001C 5,1.35818 5.35817,1.00001 5.8,1.00001L 10.2,1.00001C 10.6418,1.00001 11,1.35818 11,1.80001L 11,3L 12.5,3C 13.3284,3 14,3.67158 14,4.5L 14,5L 22,5L 22,20L 14,20L 14,20.5C 14,21.3284 13.3284,22 12.5,22L 3.5,22C 2.67157,22 2,21.3284 2,20.5L 2,4.5C 2,3.67158 2.67157,3 3.5,3 Z M 18,7.00001L 18,9.00001L 20,9.00001L 20,7.00001L 18,7.00001 Z M 14,7.00001L 14,9L 16,9L 16,7.00001L 14,7.00001 Z M 10,7.00001L 10,9L 12,9L 12,7.00001L 10,7.00001 Z M 14,16L 14,18L 16,18L 16,16L 14,16 Z M 18,16L 18,18L 20,18L 20,16L 18,16 Z M 10,16L 10,18L 12,18L 12,16L 10,16 Z ' })
                )
            );
        }
    }]);

    return MdiFilm;
}(React.Component);

exports.default = MdiFilm;
module.exports = exports['default'];