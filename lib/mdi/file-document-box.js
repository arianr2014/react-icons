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

var MdiFileDocumentBox = function (_React$Component) {
    _inherits(MdiFileDocumentBox, _React$Component);

    function MdiFileDocumentBox() {
        _classCallCheck(this, MdiFileDocumentBox);

        return _possibleConstructorReturn(this, (MdiFileDocumentBox.__proto__ || Object.getPrototypeOf(MdiFileDocumentBox)).apply(this, arguments));
    }

    _createClass(MdiFileDocumentBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.0094,16.9981L 6.99939,16.9981L 6.99939,14.9981L 14.0094,14.9981M 17.0094,12.9981L 6.99939,12.9981L 6.99939,10.9981L 17.0094,10.9981M 17.0094,8.99807L 6.99939,8.99807L 6.99939,6.99807L 17.0094,6.99807M 18.9994,2.99807L 4.99939,2.99807C 3.89439,2.99807 2.99939,3.89406 2.99939,4.99807L 2.99939,18.9981C 2.99939,20.1021 3.89439,20.9981 4.99939,20.9981L 18.9994,20.9981C 20.1034,20.9981 20.9994,20.1021 20.9994,18.9981L 20.9994,4.99807C 20.9994,3.89406 20.1034,2.99807 18.9994,2.99807 Z ' })
                )
            );
        }
    }]);

    return MdiFileDocumentBox;
}(React.Component);

exports.default = MdiFileDocumentBox;
module.exports = exports['default'];