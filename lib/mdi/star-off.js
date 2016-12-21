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

var MdiStarOff = function (_React$Component) {
    _inherits(MdiStarOff, _React$Component);

    function MdiStarOff() {
        _classCallCheck(this, MdiStarOff);

        return _possibleConstructorReturn(this, (MdiStarOff.__proto__ || Object.getPrototypeOf(MdiStarOff)).apply(this, arguments));
    }

    _createClass(MdiStarOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,5.26848L 3.27711,4L 20,20.7229L 18.7315,22L 17.0454,20.3139L 11.9994,17.2708L 5.8194,20.9978L 7.4544,13.9688L 1.9994,9.24277L 5.65972,8.9282L 2,5.26848 Z M 11.9994,1.99777L 14.8084,8.62477L 21.9994,9.24277L 16.5444,13.9688L 16.7726,14.9499L 9.56461,7.74193L 11.9994,1.99777 Z ' })
                )
            );
        }
    }]);

    return MdiStarOff;
}(React.Component);

exports.default = MdiStarOff;
module.exports = exports['default'];