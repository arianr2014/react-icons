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

var MdiFolder = function (_React$Component) {
    _inherits(MdiFolder, _React$Component);

    function MdiFolder() {
        _classCallCheck(this, MdiFolder);

        return _possibleConstructorReturn(this, (MdiFolder.__proto__ || Object.getPrototypeOf(MdiFolder)).apply(this, arguments));
    }

    _createClass(MdiFolder, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9.99936,3.99807L 3.99936,3.99807C 2.89436,3.99807 2.00936,4.89406 2.00936,5.99807L 1.99936,17.9981C 1.99936,19.1021 2.89436,19.9981 3.99936,19.9981L 19.9994,19.9981C 21.1029,19.9981 21.9994,19.1021 21.9994,17.9981L 21.9994,7.99807C 21.9994,6.89406 21.1029,5.99807 19.9994,5.99807L 11.9994,5.99807L 9.99936,3.99807 Z ' })
                )
            );
        }
    }]);

    return MdiFolder;
}(React.Component);

exports.default = MdiFolder;
module.exports = exports['default'];