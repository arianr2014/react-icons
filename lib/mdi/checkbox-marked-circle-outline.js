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

var MdiCheckboxMarkedCircleOutline = function (_React$Component) {
    _inherits(MdiCheckboxMarkedCircleOutline, _React$Component);

    function MdiCheckboxMarkedCircleOutline() {
        _classCallCheck(this, MdiCheckboxMarkedCircleOutline);

        return _possibleConstructorReturn(this, (MdiCheckboxMarkedCircleOutline.__proto__ || Object.getPrototypeOf(MdiCheckboxMarkedCircleOutline)).apply(this, arguments));
    }

    _createClass(MdiCheckboxMarkedCircleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.9994,11.9981C 19.9994,16.4161 16.4174,19.9981 11.9994,19.9981C 7.58139,19.9981 3.99939,16.4161 3.99939,11.9981C 3.99939,7.58007 7.58139,3.99807 11.9994,3.99807C 12.7634,3.99807 13.5004,4.11207 14.2004,4.31207L 15.7724,2.74007C 14.6074,2.26467 13.3354,1.99807 11.9994,1.99807C 6.47638,1.99807 1.99939,6.47507 1.99939,11.9981C 1.99939,17.5211 6.47638,21.9981 11.9994,21.9981C 17.5224,21.9981 21.9994,17.5211 21.9994,11.9981M 7.91339,10.0841L 6.49939,11.4981L 10.9994,15.9981L 20.9994,5.99807L 19.5854,4.58407L 10.9994,13.1701L 7.91339,10.0841 Z ' })
                )
            );
        }
    }]);

    return MdiCheckboxMarkedCircleOutline;
}(React.Component);

exports.default = MdiCheckboxMarkedCircleOutline;
module.exports = exports['default'];