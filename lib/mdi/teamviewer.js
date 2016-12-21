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

var MdiTeamviewer = function (_React$Component) {
    _inherits(MdiTeamviewer, _React$Component);

    function MdiTeamviewer() {
        _classCallCheck(this, MdiTeamviewer);

        return _possibleConstructorReturn(this, (MdiTeamviewer.__proto__ || Object.getPrototypeOf(MdiTeamviewer)).apply(this, arguments));
    }

    _createClass(MdiTeamviewer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9999,3.00004C 20.1039,3.00004 20.9999,3.89604 20.9999,5.00004L 20.9999,19C 20.9999,20.105 20.1039,21 18.9999,21L 4.99996,21C 3.89596,21 2.99996,20.105 2.99996,19L 2.99996,5.00004C 2.99996,3.89604 3.89596,3.00004 4.99996,3.00004L 18.9999,3.00004 Z M 12,5.00001C 8.134,5.00001 5,8.13401 5,12C 5,15.866 8.134,19 12,19C 15.866,19 19,15.866 19,12C 19,8.13401 15.866,5.00001 12,5.00001 Z M 7,12L 10,9.00001L 10,11L 14,11L 14,9L 17,12L 14,15L 14,13L 10,13L 10,15L 7,12 Z ' })
                )
            );
        }
    }]);

    return MdiTeamviewer;
}(React.Component);

exports.default = MdiTeamviewer;
module.exports = exports['default'];