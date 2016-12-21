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

var MdiTrain = function (_React$Component) {
    _inherits(MdiTrain, _React$Component);

    function MdiTrain() {
        _classCallCheck(this, MdiTrain);

        return _possibleConstructorReturn(this, (MdiTrain.__proto__ || Object.getPrototypeOf(MdiTrain)).apply(this, arguments));
    }

    _createClass(MdiTrain, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.9994,9.99807L 5.9994,9.99807L 5.9994,4.99807L 17.9994,4.99807M 11.9994,16.9981C 10.8944,16.9981 9.9994,16.1031 9.9994,14.9981C 9.9994,13.8931 10.8944,12.9981 11.9994,12.9981C 13.1044,12.9981 13.9994,13.8931 13.9994,14.9981C 13.9994,16.1031 13.1044,16.9981 11.9994,16.9981 Z M 3.9994,15.4981C 3.9994,17.4311 5.5684,18.9981 7.4994,18.9981L 5.9994,20.4981L 5.9994,20.9981L 17.9994,20.9981L 17.9994,20.4981L 16.4994,18.9981C 18.4344,18.9981 19.9994,17.4311 19.9994,15.4981L 19.9994,4.99807C 19.9994,1.49807 16.4174,0.998068 11.9994,0.998068C 7.5814,0.998068 3.9994,1.49807 3.9994,4.99807L 3.9994,15.4981 Z ' })
                )
            );
        }
    }]);

    return MdiTrain;
}(React.Component);

exports.default = MdiTrain;
module.exports = exports['default'];