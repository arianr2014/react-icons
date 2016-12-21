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

var MdiDrawingBox = function (_React$Component) {
    _inherits(MdiDrawingBox, _React$Component);

    function MdiDrawingBox() {
        _classCallCheck(this, MdiDrawingBox);

        return _possibleConstructorReturn(this, (MdiDrawingBox.__proto__ || Object.getPrototypeOf(MdiDrawingBox)).apply(this, arguments));
    }

    _createClass(MdiDrawingBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.9994,17.9981L 11.9994,17.9981L 11.9994,12.2101C 11.3404,12.8181 10.4664,13.1981 9.49939,13.1981C 7.45538,13.1981 5.79939,11.5411 5.79939,9.49807C 5.79939,7.45507 7.45538,5.79806 9.49939,5.79806C 11.5424,5.79806 13.1994,7.45507 13.1994,9.49807C 13.1994,10.4651 12.8194,11.3391 12.2114,11.9981L 17.9994,11.9981M 18.9994,2.99807L 4.99939,2.99807C 3.89439,2.99807 2.99939,3.89406 2.99939,4.99807L 2.99939,18.9981C 2.99939,20.1021 3.89439,20.9981 4.99939,20.9981L 18.9994,20.9981C 20.1034,20.9981 20.9994,20.1021 20.9994,18.9981L 20.9994,4.99807C 20.9994,3.89406 20.1034,2.99807 18.9994,2.99807 Z ' })
                )
            );
        }
    }]);

    return MdiDrawingBox;
}(React.Component);

exports.default = MdiDrawingBox;
module.exports = exports['default'];