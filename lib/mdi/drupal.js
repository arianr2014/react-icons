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

var MdiDrupal = function (_React$Component) {
    _inherits(MdiDrupal, _React$Component);

    function MdiDrupal() {
        _classCallCheck(this, MdiDrupal);

        return _possibleConstructorReturn(this, (MdiDrupal.__proto__ || Object.getPrototypeOf(MdiDrupal)).apply(this, arguments));
    }

    _createClass(MdiDrupal, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 20.4675,14.6509C 20.4675,15.2899 20.2544,16.355 19.8284,17.1006C 19.4024,17.8462 19.0828,18.0592 18.4438,18.0592C 17.6982,17.9527 16.3136,15.8225 15.355,15.716C 14.1834,15.716 11.7337,18.1657 9.71006,18.1657C 8.53846,18.1657 8.11243,17.9527 7.7929,17.7396C 7.15385,17.3136 6.94083,16.6746 6.94083,15.8225C 6.94083,14.2249 8.43195,12.8402 10.2426,12.8402C 12.5858,12.8402 14.1834,15.1834 15.355,15.0769C 16.3136,15.0769 18.2308,13.1598 19.1893,13.1598C 20.1479,12.9467 20.4675,14.0118 20.4675,14.6509 Z M 16.6331,5.27811C 15.568,4.63905 14.6095,4.31953 13.5444,3.68047C 12.9053,3.25444 12.0533,2.29586 11.3077,1.44379C 10.9882,2.8284 10.7751,3.36095 10.2426,3.78698C 9.17751,4.53255 8.64497,4.85207 7.68639,5.27811C 6.94083,5.70414 3,8.04734 3,13.1598C 3,18.2722 7.36686,22 12.0533,22C 16.8462,22 21,18.4852 21,13.2663C 21.213,8.04734 17.2722,5.70414 16.6331,5.27811 Z ' })
                )
            );
        }
    }]);

    return MdiDrupal;
}(React.Component);

exports.default = MdiDrupal;
module.exports = exports['default'];