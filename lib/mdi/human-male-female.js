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

var MdiHumanMaleFemale = function (_React$Component) {
    _inherits(MdiHumanMaleFemale, _React$Component);

    function MdiHumanMaleFemale() {
        _classCallCheck(this, MdiHumanMaleFemale);

        return _possibleConstructorReturn(this, (MdiHumanMaleFemale.__proto__ || Object.getPrototypeOf(MdiHumanMaleFemale)).apply(this, arguments));
    }

    _createClass(MdiHumanMaleFemale, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7.5,2C 8.60457,2 9.5,2.89543 9.5,4C 9.5,5.10457 8.60457,6 7.5,6C 6.39543,6 5.5,5.10457 5.5,4C 5.5,2.89543 6.39543,2 7.5,2 Z M 6,7.00001L 9,7.00001C 10.1046,7.00001 11,7.89544 11,9.00001L 11,14.5L 9.49999,14.5L 9.5,22L 5.5,22L 5.49999,14.5L 4,14.5L 4,9.00001C 4,7.89544 4.89543,7.00001 6,7.00001 Z M 16.5,2.00001C 17.6046,2.00001 18.5,2.89544 18.5,4.00001C 18.5,5.10457 17.6046,6.00001 16.5,6.00001C 15.3954,6.00001 14.5,5.10457 14.5,4.00001C 14.5,2.89544 15.3954,2.00001 16.5,2.00001 Z M 15,22L 15,16L 12,16L 14.5878,8.41201C 14.8389,7.59439 15.6001,7 16.5,7C 17.3999,7 18.161,7.59439 18.4122,8.412L 21,16L 18,16L 18,22L 15,22 Z ' })
                )
            );
        }
    }]);

    return MdiHumanMaleFemale;
}(React.Component);

exports.default = MdiHumanMaleFemale;
module.exports = exports['default'];