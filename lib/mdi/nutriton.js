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

var MdiNutriton = function (_React$Component) {
    _inherits(MdiNutriton, _React$Component);

    function MdiNutriton() {
        _classCallCheck(this, MdiNutriton);

        return _possibleConstructorReturn(this, (MdiNutriton.__proto__ || Object.getPrototypeOf(MdiNutriton)).apply(this, arguments));
    }

    _createClass(MdiNutriton, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22,18C 22,20.2091 20.2091,22 18,22L 14,22C 11.7908,22 9.99999,20.2091 9.99999,18L 9.99999,16L 22,16L 22,18 Z M 4,3.00002L 14,3.00002C 15.1046,3.00002 16,3.89545 16,5.00002L 16,14L 8,14L 8,19L 4,19C 2.89543,19 2,18.1046 2,17L 2,5.00002C 2,3.89545 2.89543,3.00002 4,3.00002 Z M 4,6.00002L 4,8.00002L 6,8.00002L 6,6.00002L 4,6.00002 Z M 14,8.00002L 14,6.00002L 8,6.00002L 8,8.00002L 14,8.00002 Z M 4,10L 4,12L 5.99999,12L 5.99999,10L 4,10 Z M 7.99999,10L 7.99999,12L 14,12L 14,10L 7.99999,10 Z M 4,14L 4,16L 5.99999,16L 5.99999,14L 4,14 Z ' })
                )
            );
        }
    }]);

    return MdiNutriton;
}(React.Component);

exports.default = MdiNutriton;
module.exports = exports['default'];