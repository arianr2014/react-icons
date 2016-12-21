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

var MdiSortAlphabetical = function (_React$Component) {
    _inherits(MdiSortAlphabetical, _React$Component);

    function MdiSortAlphabetical() {
        _classCallCheck(this, MdiSortAlphabetical);

        return _possibleConstructorReturn(this, (MdiSortAlphabetical.__proto__ || Object.getPrototypeOf(MdiSortAlphabetical)).apply(this, arguments));
    }

    _createClass(MdiSortAlphabetical, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 9.25,5L 12.5,1.75L 15.75,5L 9.25,5 Z M 15.75,19L 12.5,22.25L 9.25001,19L 15.75,19 Z M 8.89095,14.3027L 5.99984,14.3027L 5.28081,16.9907L 2.914,16.9907L 5.99984,7.004L 8.99581,7.004L 12.126,16.9907L 9.6699,16.9907L 8.89095,14.3027 Z M 6.3294,12.6787L 8.56139,12.6787L 7.93224,10.5568L 7.66635,9.59229L 7.42293,8.628L 7.39297,8.628L 7.16639,9.60098L 6.92859,10.5818L 6.3294,12.6787 Z M 13.0547,16.9767L 13.0547,15.7437L 17.8003,8.97093L 17.8003,8.91267L 13.4982,8.91267L 13.4982,7.018L 20.7275,7.018L 20.7275,8.34127L 16.0854,15.0235L 16.0854,15.082L 20.8013,15.082L 20.8013,16.9767L 13.0547,16.9767 Z ' })
                )
            );
        }
    }]);

    return MdiSortAlphabetical;
}(React.Component);

exports.default = MdiSortAlphabetical;
module.exports = exports['default'];