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

var MdiDirections = function (_React$Component) {
    _inherits(MdiDirections, _React$Component);

    function MdiDirections() {
        _classCallCheck(this, MdiDirections);

        return _possibleConstructorReturn(this, (MdiDirections.__proto__ || Object.getPrototypeOf(MdiDirections)).apply(this, arguments));
    }

    _createClass(MdiDirections, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.9994,14.4981L 13.9994,11.9981L 9.9994,11.9981L 9.9994,14.9981L 7.9994,14.9981L 7.9994,10.9981C 7.9994,10.4451 8.4464,9.99807 8.9994,9.99807L 13.9994,9.99807L 13.9994,7.49807L 17.4994,10.9981M 21.7064,11.2921L 12.7054,2.29307L 12.7034,2.29107C 12.3144,1.90006 11.6804,1.90006 11.2914,2.29207L 2.29139,11.2921C 1.9014,11.6831 1.9004,12.3151 2.29139,12.7061L 11.2914,21.7061C 11.6834,22.0947 12.3144,22.0961 12.7054,21.7061L 21.7064,12.7061C 22.0974,12.3151 22.0974,11.6831 21.7064,11.2921 Z ' })
                )
            );
        }
    }]);

    return MdiDirections;
}(React.Component);

exports.default = MdiDirections;
module.exports = exports['default'];