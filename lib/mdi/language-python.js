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

var MdiLanguagePython = function (_React$Component) {
    _inherits(MdiLanguagePython, _React$Component);

    function MdiLanguagePython() {
        _classCallCheck(this, MdiLanguagePython);

        return _possibleConstructorReturn(this, (MdiLanguagePython.__proto__ || Object.getPrototypeOf(MdiLanguagePython)).apply(this, arguments));
    }

    _createClass(MdiLanguagePython, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.1428,7.49998C 20.7208,7.49998 22,8.77917 22,10.3571L 22,14.1429C 22,15.7208 20.7208,17 19.1428,17L 12,17C 12,17.3945 12.3198,17.9643 12.7142,17.9643L 17.0001,17.9643L 17.0001,19.6429C 17.0001,21.2209 15.7209,22.5001 14.1429,22.5001L 9.85717,22.5001C 8.27921,22.5001 7.00002,21.2209 7.00002,19.6429L 6.99993,15.8929C 6.99993,14.3149 8.27921,13.0357 9.85717,13.0357L 15.1071,13.0357C 16.6851,13.0357 17.9643,11.7565 17.9643,10.1785L 17.9643,7.49998L 19.1428,7.49998 Z M 14.8571,19.2857C 14.4626,19.2857 14.1428,19.5868 14.1428,20.1785C 14.1428,20.7703 14.4626,20.8928 14.8571,20.8928C 15.2516,20.8928 15.5714,20.7703 15.5714,20.1785C 15.5714,19.5868 15.2516,19.2857 14.8571,19.2857 Z M 4.85716,17.5C 3.27919,17.5 2,16.2208 2,14.6429L 2,10.8571C 2,9.27917 3.27919,7.99997 4.85716,7.99997L 12,7.99998C 12,7.60548 11.6802,7.03569 11.2858,7.03569L 6.99994,7.03569L 6.99994,5.35711C 6.99994,3.77914 8.27913,2.49995 9.85709,2.49995L 14.1428,2.49995C 15.7208,2.49995 17,3.77914 17,5.35711L 17,9.10713C 17,10.6851 15.7208,11.9643 14.1428,11.9643L 8.8929,11.9643C 7.31493,11.9643 6.03574,13.2435 6.03574,14.8215L 6.03573,17.5L 4.85716,17.5 Z M 9.14289,5.7143C 9.53738,5.7143 9.85718,5.4132 9.85718,4.82147C 9.85718,4.22973 9.53739,4.10723 9.1429,4.10723C 8.74841,4.10723 8.42861,4.22973 8.42861,4.82147C 8.42861,5.4132 8.7484,5.7143 9.14289,5.7143 Z ' })
                )
            );
        }
    }]);

    return MdiLanguagePython;
}(React.Component);

exports.default = MdiLanguagePython;
module.exports = exports['default'];