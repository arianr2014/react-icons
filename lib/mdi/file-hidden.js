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

var MdiFileHidden = function (_React$Component) {
    _inherits(MdiFileHidden, _React$Component);

    function MdiFileHidden() {
        _classCallCheck(this, MdiFileHidden);

        return _possibleConstructorReturn(this, (MdiFileHidden.__proto__ || Object.getPrototypeOf(MdiFileHidden)).apply(this, arguments));
    }

    _createClass(MdiFileHidden, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.9994,8.99807L 14,8.99807L 14,11L 11,11L 11,7L 12.9994,7L 12.9994,8.99807 Z M 18.4994,8.99808L 16.3831,6.88179L 17.6331,5.63181L 19.9994,7.99809L 19.9994,10L 18,10L 18,11L 15,11L 15,8.99808L 18.4994,8.99808 Z M 13,3.49869L 13,2.00002L 12,2.00002L 12,4.00001L 12.9994,4.00001L 12.9994,6.00002L 11,6.00002L 11,4.00002L 8.99999,4.00002L 8.99999,2.00003L 7.99999,2.00003L 7.99999,4.00002L 5.99999,4.00002L 5.99999,5.00002L 4.00877,5.00002L 4.00939,3.99809C 4.00939,2.89409 4.89436,1.99811 5.99938,1.99811L 13.9994,1.99811L 16.3603,4.35901L 15.1103,5.609L 13,3.49869 Z M 19.9994,19.9981C 19.9994,21.1021 19.1034,21.9981 17.9994,21.9981L 16,21.9981L 16,20L 18,20L 18,19L 19.9994,19L 19.9994,19.9981 Z M 18,15L 19.9994,15L 19.9994,18L 18,18L 18,15 Z M 12,21.9981L 12,20L 15,20L 15,21.9981L 12,21.9981 Z M 8,21.9981L 8,20L 11,20L 11,21.9981L 8,21.9981 Z M 5.98937,21.9981C 4.88537,21.9981 3.99938,21.1021 3.99938,19.9981L 4.00063,18L 6,18L 5.99999,20L 7,20L 7,21.9981L 5.98937,21.9981 Z M 4.00314,14L 6,14L 6,17L 4.00126,17L 4.00314,14 Z M 4.00564,10L 5.99999,10L 6,13L 4.00376,13L 4.00564,10 Z M 18,11L 19.9994,11L 19.9994,14L 18,14L 18,11 Z M 4.00814,6.00002L 5.99999,6.00002L 5.99999,9.00002L 4.00626,9.00002L 4.00814,6.00002 Z ' })
                )
            );
        }
    }]);

    return MdiFileHidden;
}(React.Component);

exports.default = MdiFileHidden;
module.exports = exports['default'];