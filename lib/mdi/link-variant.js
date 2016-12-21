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

var MdiLinkVariant = function (_React$Component) {
    _inherits(MdiLinkVariant, _React$Component);

    function MdiLinkVariant() {
        _classCallCheck(this, MdiLinkVariant);

        return _possibleConstructorReturn(this, (MdiLinkVariant.__proto__ || Object.getPrototypeOf(MdiLinkVariant)).apply(this, arguments));
    }

    _createClass(MdiLinkVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 10.5858,13.4142C 10.9763,13.8047 10.9763,14.4379 10.5858,14.8284C 10.1952,15.2189 9.56207,15.2189 9.17154,14.8284C 7.21892,12.8758 7.21892,9.70995 9.17154,7.75733L 9.17157,7.75736L 12.707,4.2219C 14.6596,2.26928 17.8255,2.26929 19.7781,4.2219C 21.7307,6.17452 21.7307,9.34034 19.7781,11.293L 18.2925,12.7785C 18.3008,11.9583 18.1659,11.1368 17.8876,10.355L 18.3639,9.87865C 19.5355,8.70708 19.5355,6.80759 18.3639,5.63602C 17.1923,4.46445 15.2929,4.46445 14.1213,5.63602L 10.5858,9.17155C 9.41419,10.3431 9.41419,12.2426 10.5858,13.4142 Z M 13.4142,9.17155C 13.8047,8.78103 14.4379,8.78103 14.8284,9.17155C 16.781,11.1242 16.781,14.29 14.8284,16.2426L 14.8284,16.2426L 11.2929,19.7782C 9.34026,21.7308 6.17444,21.7308 4.22182,19.7782C 2.26921,17.8255 2.2692,14.6597 4.22182,12.7071L 5.70744,11.2215C 5.69913,12.0417 5.8341,12.8631 6.11234,13.645L 5.63601,14.1213C 4.46444,15.2929 4.46444,17.1924 5.63601,18.3639C 6.80758,19.5355 8.70708,19.5355 9.87865,18.3639L 13.4142,14.8284C 14.5858,13.6568 14.5858,11.7573 13.4142,10.5858C 13.0237,10.1952 13.0237,9.56207 13.4142,9.17155 Z ' })
                )
            );
        }
    }]);

    return MdiLinkVariant;
}(React.Component);

exports.default = MdiLinkVariant;
module.exports = exports['default'];