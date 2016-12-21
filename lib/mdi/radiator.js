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

var MdiRadiator = function (_React$Component) {
    _inherits(MdiRadiator, _React$Component);

    function MdiRadiator() {
        _classCallCheck(this, MdiRadiator);

        return _possibleConstructorReturn(this, (MdiRadiator.__proto__ || Object.getPrototypeOf(MdiRadiator)).apply(this, arguments));
    }

    _createClass(MdiRadiator, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7.95134,2.98865L 6.52869,5.19324L 7.95134,7.39782L 7.94469,7.40126L 5.94827,10.495L 4.21622,9.60029L 5.63972,7.39438L 4.21929,5.19324L 6.21929,2.09397L 7.95134,2.98865 Z M 13.9513,2.89469L 12.5287,5.09927L 13.9513,7.30385L 13.9447,7.30729L 11.9483,10.401L 10.2162,9.50633L 11.6397,7.30042L 10.2193,5.09927L 12.2193,2.00001L 13.9513,2.89469 Z M 19.9838,2.89469L 18.5611,5.09927L 19.9838,7.30385L 19.9771,7.30729L 17.9807,10.401L 16.2487,9.50633L 17.6722,7.30042L 16.2517,5.09927L 18.2517,2.00001L 19.9838,2.89469 Z M 2,22L 2,14C 2,12.8954 2.89543,12 4,12L 20,12C 21.1046,12 22,12.8954 22,14L 22,22L 20,22L 20,20L 4,20L 4,22L 2,22 Z M 5.99999,14C 5.44771,14 5,14.4477 5,15L 5,17C 5,17.5523 5.44771,18 6,18C 6.55228,18 7,17.5523 7,17L 6.99999,15C 6.99999,14.4477 6.55228,14 5.99999,14 Z M 10,14C 9.44771,14 9,14.4477 9,15L 9,17C 9,17.5523 9.44771,18 10,18C 10.5523,18 11,17.5523 11,17L 11,15C 11,14.4477 10.5523,14 10,14 Z M 14,14C 13.4477,14 13,14.4477 13,15L 13,17C 13,17.5523 13.4477,18 14,18C 14.5523,18 15,17.5523 15,17L 15,15C 15,14.4477 14.5523,14 14,14 Z M 18,14C 17.4477,14 17,14.4477 17,15L 17,17C 17,17.5523 17.4477,18 18,18C 18.5523,18 19,17.5523 19,17L 19,15C 19,14.4477 18.5523,14 18,14 Z ' })
                )
            );
        }
    }]);

    return MdiRadiator;
}(React.Component);

exports.default = MdiRadiator;
module.exports = exports['default'];