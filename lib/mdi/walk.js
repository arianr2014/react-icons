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

var MdiWalk = function (_React$Component) {
    _inherits(MdiWalk, _React$Component);

    function MdiWalk() {
        _classCallCheck(this, MdiWalk);

        return _possibleConstructorReturn(this, (MdiWalk.__proto__ || Object.getPrototypeOf(MdiWalk)).apply(this, arguments));
    }

    _createClass(MdiWalk, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.1172,9.99807L 18.9992,9.99807L 18.9992,8.19806L 15.3772,8.19806L 13.3772,4.86707C 13.0812,4.36806 12.5372,4.03406 11.9152,4.03406C 11.7442,4.03406 11.5792,4.05907 11.4242,4.10607L 5.99919,5.79807L 5.99919,10.9981L 7.79919,10.9981L 7.79919,7.33106L 9.90619,6.67406L 5.99919,21.9981L 7.79919,21.9981L 10.6682,13.8901L 12.9992,16.9981L 12.9992,21.9981L 14.7992,21.9981L 14.7992,15.5921L 12.3102,11.0521L 13.0432,8.18407M 13.9992,3.79807C 14.9912,3.79807 15.7992,2.99106 15.7992,1.99907C 15.7992,1.00307 14.9912,0.198065 13.9992,0.198065C 13.0042,0.198065 12.1992,1.00307 12.1992,1.99907C 12.1992,2.99106 13.0042,3.79807 13.9992,3.79807 Z ' })
                )
            );
        }
    }]);

    return MdiWalk;
}(React.Component);

exports.default = MdiWalk;
module.exports = exports['default'];