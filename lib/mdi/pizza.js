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

var MdiPizza = function (_React$Component) {
    _inherits(MdiPizza, _React$Component);

    function MdiPizza() {
        _classCallCheck(this, MdiPizza);

        return _possibleConstructorReturn(this, (MdiPizza.__proto__ || Object.getPrototypeOf(MdiPizza)).apply(this, arguments));
    }

    _createClass(MdiPizza, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,14.9981C 10.8954,14.9981 9.99939,14.1031 9.99939,12.9981C 9.99939,11.8931 10.8954,10.9981 11.9994,10.9981C 13.1034,10.9981 13.9994,11.8931 13.9994,12.9981C 13.9994,14.1031 13.1034,14.9981 11.9994,14.9981 Z M 6.99939,6.99807C 6.99939,5.89307 7.89438,4.99807 8.99939,4.99807C 10.1034,4.99807 10.9994,5.89307 10.9994,6.99807C 10.9994,8.10306 10.1034,8.99807 8.99939,8.99807C 7.89438,8.99807 6.99939,8.10306 6.99939,6.99807 Z M 11.9994,1.99807C 8.43237,1.99807 5.2254,3.54207 3.01038,5.99706L 11.9994,21.9981L 20.9924,6.00207C 18.7774,3.54407 15.5694,1.99807 11.9994,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiPizza;
}(React.Component);

exports.default = MdiPizza;
module.exports = exports['default'];