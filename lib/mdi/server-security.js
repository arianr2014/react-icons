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

var MdiServerSecurity = function (_React$Component) {
    _inherits(MdiServerSecurity, _React$Component);

    function MdiServerSecurity() {
        _classCallCheck(this, MdiServerSecurity);

        return _possibleConstructorReturn(this, (MdiServerSecurity.__proto__ || Object.getPrototypeOf(MdiServerSecurity)).apply(this, arguments));
    }

    _createClass(MdiServerSecurity, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,1.00001L 19,1.00001C 19.5523,1.00001 20,1.44772 20,2.00001L 20,6C 20,6.55229 19.5523,7 19,7L 3,7C 2.44772,7 2,6.55229 2,6L 2,2.00001C 2,1.44772 2.44772,1.00001 3,1.00001 Z M 3,9.00002L 19,9.00002C 19.5523,9.00002 20,9.44773 20,10L 20,10.6666L 17.5,9.55552L 11,12.4444L 11,15L 3,15C 2.44771,15 2,14.5523 2,14L 2,10C 2,9.44773 2.44771,9.00002 3,9.00002 Z M 3,17L 11.0029,17C 11.0602,19.2523 11.9855,21.4049 13.4552,23L 3,23C 2.44772,23 2,22.5523 2,22L 2,18C 2,17.4477 2.44772,17 3,17 Z M 7.99999,5.00002L 8.99999,5.00002L 8.99999,3.00002L 7.99999,3.00002L 7.99999,5.00002 Z M 7.99999,13L 8.99999,13L 8.99999,11L 7.99999,11L 7.99999,13 Z M 7.99999,21L 9,21L 9,19L 7.99999,19L 7.99999,21 Z M 4,3.00001L 4,5.00001L 6,5.00001L 6,3.00001L 4,3.00001 Z M 4,11L 4,13L 6,13L 6,11L 4,11 Z M 4,19L 4,21L 6,21L 6,19L 4,19 Z M 17.5,12L 22,14L 22,17C 22,19.7765 20.0815,22.368 17.5,23C 14.918,22.368 13,19.7765 13,17L 13,14L 17.5,12 Z M 17.5,13.9444L 15,15.0555L 15,17.7222C 15,19.2647 16.0656,20.7044 17.5,21.0555L 17.5,13.9444 Z ' })
                )
            );
        }
    }]);

    return MdiServerSecurity;
}(React.Component);

exports.default = MdiServerSecurity;
module.exports = exports['default'];