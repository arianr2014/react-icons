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

var MdiBitbucket = function (_React$Component) {
    _inherits(MdiBitbucket, _React$Component);

    function MdiBitbucket() {
        _classCallCheck(this, MdiBitbucket);

        return _possibleConstructorReturn(this, (MdiBitbucket.__proto__ || Object.getPrototypeOf(MdiBitbucket)).apply(this, arguments));
    }

    _createClass(MdiBitbucket, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 11.9985,5.76235C 15.0625,5.7672 17.5473,5.24297 17.5484,4.59089C 17.5494,3.93868 15.0664,3.40637 12.0024,3.40153C 8.93833,3.39655 6.45346,3.92091 6.45242,4.57299C 6.45138,5.22507 8.93447,5.75738 11.9985,5.76235 Z M 12,14.3954C 13.5209,14.3954 14.7538,13.1623 14.7538,11.6416C 14.7538,10.1206 13.5209,8.88778 12,8.88778C 10.4791,8.88778 9.24621,10.1206 9.24621,11.6416C 9.24621,13.1623 10.4791,14.3954 12,14.3954 Z M 12.0001,2.00001C 16.769,2.00001 20.663,3.2821 20.663,4.874C 20.663,5.29331 19.623,11.3055 19.2104,13.6898C 19.0255,14.7591 16.2622,16.3269 12.0022,16.3269L 12.0022,16.3142L 11.9978,16.3269C 7.73778,16.3269 4.9745,14.7591 4.78952,13.6898C 4.37698,11.3055 3.33704,5.29331 3.33704,4.874C 3.33704,3.2821 7.23106,2.00001 12.0001,2.00001 Z M 18.2263,16.0794C 18.3837,16.0794 18.5328,16.1852 18.5328,16.4183L 18.5259,16.4916C 18.1948,18.2637 17.9529,19.5211 17.9104,19.7126C 17.6213,21.0162 15.0713,21.9999 12.0002,22L 11.9998,22C 8.92874,21.9999 6.37864,21.0162 6.0896,19.7126C 6.04714,19.5211 5.80519,18.2637 5.4741,16.4916L 5.46719,16.4183C 5.46719,16.1852 5.61634,16.0794 5.77366,16.0794C 5.90533,16.0794 6.01092,16.1727 6.01092,16.1727C 6.01092,16.1727 8.14423,17.8619 12,17.8621C 15.8558,17.8619 17.9891,16.1727 17.9891,16.1727C 17.9891,16.1727 18.0946,16.0794 18.2263,16.0794 Z M 13.3774,11.6407C 13.3774,12.403 12.7595,13.0208 11.9973,13.0208C 11.2351,13.0208 10.6172,12.403 10.6172,11.6407C 10.6172,10.8784 11.2351,10.2607 11.9973,10.2607C 12.7595,10.2607 13.3774,10.8784 13.3774,11.6407 Z ' })
                )
            );
        }
    }]);

    return MdiBitbucket;
}(React.Component);

exports.default = MdiBitbucket;
module.exports = exports['default'];