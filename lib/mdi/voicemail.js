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

var MdiVoicemail = function (_React$Component) {
    _inherits(MdiVoicemail, _React$Component);

    function MdiVoicemail() {
        _classCallCheck(this, MdiVoicemail);

        return _possibleConstructorReturn(this, (MdiVoicemail.__proto__ || Object.getPrototypeOf(MdiVoicemail)).apply(this, arguments));
    }

    _createClass(MdiVoicemail, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.4997,14.998C 16.5667,14.998 14.9997,13.431 14.9997,11.498C 14.9997,9.56506 16.5667,7.99805 18.4997,7.99805C 20.4327,7.99805 21.9997,9.56506 21.9997,11.498C 21.9997,13.431 20.4327,14.998 18.4997,14.998 Z M 5.49972,14.998C 3.56673,14.998 1.99972,13.431 1.99972,11.498C 1.99972,9.56506 3.56673,7.99805 5.49972,7.99805C 7.4327,7.99805 8.99971,9.56506 8.99971,11.498C 8.99971,13.431 7.4327,14.998 5.49972,14.998 Z M 18.4997,5.99805C 15.4617,5.99805 12.9997,8.46002 12.9997,11.498C 12.9997,12.8281 13.4717,14.0471 14.2567,14.998L 9.7427,14.998C 10.5277,14.0471 10.9997,12.8281 10.9997,11.498C 10.9997,8.46002 8.53774,5.99805 5.49972,5.99805C 2.46169,5.99805 -0.000284831,8.46002 -0.000284831,11.498C -0.000284831,14.5361 2.46169,16.998 5.49972,16.998L 18.4997,16.998C 21.5377,16.998 23.9997,14.5361 23.9997,11.498C 23.9997,8.46002 21.5377,5.99805 18.4997,5.99805 Z ' })
                )
            );
        }
    }]);

    return MdiVoicemail;
}(React.Component);

exports.default = MdiVoicemail;
module.exports = exports['default'];