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

var MdiRenameBox = function (_React$Component) {
    _inherits(MdiRenameBox, _React$Component);

    function MdiRenameBox() {
        _classCallCheck(this, MdiRenameBox);

        return _possibleConstructorReturn(this, (MdiRenameBox.__proto__ || Object.getPrototypeOf(MdiRenameBox)).apply(this, arguments));
    }

    _createClass(MdiRenameBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.9994,16.9981L 10.4994,16.9981L 12.4994,14.9981L 17.9994,14.9981M 5.99939,16.9981L 5.99939,14.5231L 13.8774,6.64507C 14.0734,6.44906 14.3894,6.44906 14.5854,6.64507L 16.3524,8.41207C 16.5484,8.60708 16.5484,8.92406 16.3524,9.11907L 8.4744,16.9981M 18.9994,2.99807L 4.99939,2.99807C 3.89438,2.99807 2.99939,3.89406 2.99939,4.99807L 2.99939,18.9981C 2.99939,20.1021 3.89438,20.9981 4.99939,20.9981L 18.9994,20.9981C 20.1034,20.9981 20.9994,20.1021 20.9994,18.9981L 20.9994,4.99807C 20.9994,3.89406 20.1034,2.99807 18.9994,2.99807 Z ' })
                )
            );
        }
    }]);

    return MdiRenameBox;
}(React.Component);

exports.default = MdiRenameBox;
module.exports = exports['default'];