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

var MdiCoffee = function (_React$Component) {
    _inherits(MdiCoffee, _React$Component);

    function MdiCoffee() {
        _classCallCheck(this, MdiCoffee);

        return _possibleConstructorReturn(this, (MdiCoffee.__proto__ || Object.getPrototypeOf(MdiCoffee)).apply(this, arguments));
    }

    _createClass(MdiCoffee, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 1.9994,20.9981L 19.9994,20.9981L 19.9994,18.9981L 1.9994,18.9981M 19.9994,7.99807L 17.9994,7.99807L 17.9994,4.99807L 19.9994,4.99807M 19.9994,2.99807L 3.9994,2.99807L 3.9994,12.9981C 3.9994,15.2071 5.7904,16.9981 7.9994,16.9981L 13.9994,16.9981C 16.2084,16.9981 17.9994,15.2071 17.9994,12.9981L 17.9994,9.99807L 19.9994,9.99807C 21.1044,9.99807 21.9994,9.10306 21.9994,7.99807L 21.9994,4.99807C 21.9994,3.89307 21.1044,2.99807 19.9994,2.99807 Z ' })
                )
            );
        }
    }]);

    return MdiCoffee;
}(React.Component);

exports.default = MdiCoffee;
module.exports = exports['default'];