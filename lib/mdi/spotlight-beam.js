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

var MdiSpotlightBeam = function (_React$Component) {
    _inherits(MdiSpotlightBeam, _React$Component);

    function MdiSpotlightBeam() {
        _classCallCheck(this, MdiSpotlightBeam);

        return _possibleConstructorReturn(this, (MdiSpotlightBeam.__proto__ || Object.getPrototypeOf(MdiSpotlightBeam)).apply(this, arguments));
    }

    _createClass(MdiSpotlightBeam, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 9,16.5L 9.91421,15.5858L 15.1271,20.7987L 14.2129,21.7129L 9,16.5 Z M 15.5,10L 16.4142,9.08579L 21.6271,14.2987L 20.7129,15.2129L 15.5,10 Z M 6.72183,2.72185L 10.1464,6.14645L 6.14644,10.1465L 2.72183,6.72185C 1.94078,5.94081 1.94078,4.67448 2.72183,3.89343L 3.8934,2.72185C 4.67445,1.9408 5.94078,1.9408 6.72183,2.72185 Z M 14.5711,7.50001L 15.2782,8.20711L 8.2071,15.2782L 7.5,14.5711L 6.63943,11.0677L 11.0677,6.63944L 14.5711,7.50001 Z ' })
                )
            );
        }
    }]);

    return MdiSpotlightBeam;
}(React.Component);

exports.default = MdiSpotlightBeam;
module.exports = exports['default'];