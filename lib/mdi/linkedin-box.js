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

var MdiLinkedinBox = function (_React$Component) {
    _inherits(MdiLinkedinBox, _React$Component);

    function MdiLinkedinBox() {
        _classCallCheck(this, MdiLinkedinBox);

        return _possibleConstructorReturn(this, (MdiLinkedinBox.__proto__ || Object.getPrototypeOf(MdiLinkedinBox)).apply(this, arguments));
    }

    _createClass(MdiLinkedinBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,18.9981L 15.9994,18.9981L 15.9994,13.6981C 15.9994,12.8701 15.3274,12.1981 14.4994,12.1981C 13.6714,12.1981 12.9994,12.8701 12.9994,13.6981L 12.9994,18.9981L 9.9994,18.9981L 9.9994,9.99807L 12.9994,9.99807L 12.9994,11.1981C 13.5174,10.3601 14.5854,9.79807 15.4994,9.79807C 17.4324,9.79807 18.9994,11.3651 18.9994,13.2981M 6.4994,8.31007C 5.4984,8.31007 4.6864,7.50007 4.6864,6.49807C 4.6864,5.49607 5.4984,4.68507 6.4994,4.68507C 7.5004,4.68507 8.3114,5.49607 8.3114,6.49807C 8.3114,7.50007 7.5004,8.31007 6.4994,8.31007 Z M 7.9994,18.9981L 4.9994,18.9981L 4.9994,9.99807L 7.9994,9.99807M 19.9994,1.99807L 3.9994,1.99807C 2.8944,1.99807 2.00917,2.89307 2.00917,3.99807L 1.9994,19.9981C 1.9994,21.1016 2.8944,21.9981 3.9994,21.9981L 19.9994,21.9981C 21.1029,21.9981 21.9994,21.1016 21.9994,19.9981L 21.9994,3.99807C 21.9994,2.89307 21.1029,1.99807 19.9994,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiLinkedinBox;
}(React.Component);

exports.default = MdiLinkedinBox;
module.exports = exports['default'];