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

var MdiAndroid = function (_React$Component) {
    _inherits(MdiAndroid, _React$Component);

    function MdiAndroid() {
        _classCallCheck(this, MdiAndroid);

        return _possibleConstructorReturn(this, (MdiAndroid.__proto__ || Object.getPrototypeOf(MdiAndroid)).apply(this, arguments));
    }

    _createClass(MdiAndroid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.9994,4.99805L 13.9994,4.99805L 13.9994,3.99805L 14.9994,3.99805M 9.99939,4.99805L 8.99939,4.99805L 8.99939,3.99805L 9.99939,3.99805M 15.5314,2.15607L 16.8354,0.852051C 17.0304,0.656067 17.0304,0.340027 16.8354,0.144043C 16.6404,-0.0509644 16.3234,-0.0509644 16.1284,0.144043L 14.6514,1.62207C 13.8504,1.22607 12.9524,0.998047 11.9994,0.998047C 11.0414,0.998047 10.1394,1.22906 9.33636,1.62708L 7.85339,0.144043C 7.65741,-0.0509644 7.34137,-0.0509644 7.14539,0.144043C 6.95038,0.340027 6.95038,0.656067 7.14539,0.852051L 8.4574,2.16302C 6.96936,3.25507 5.99939,5.01105 5.99939,6.99805L 17.9994,6.99805C 17.9994,5.00702 17.0254,3.24707 15.5314,2.15607 Z M 20.4994,7.99805C 19.6714,7.99805 18.9994,8.66907 18.9994,9.49805L 18.9994,16.498C 18.9994,17.327 19.6714,17.998 20.4994,17.998C 21.3274,17.998 21.9994,17.327 21.9994,16.498L 21.9994,9.49805C 21.9994,8.66907 21.3274,7.99805 20.4994,7.99805 Z M 3.49939,7.99805C 2.67139,7.99805 1.99939,8.66907 1.99939,9.49805L 1.99939,16.498C 1.99939,17.327 2.67139,17.998 3.49939,17.998C 4.32739,17.998 4.99939,17.327 4.99939,16.498L 4.99939,9.49805C 4.99939,8.66907 4.32739,7.99805 3.49939,7.99805 Z M 5.99939,17.998C 5.99939,18.5491 6.44836,18.998 6.99939,18.998L 7.99939,18.998L 7.99939,22.498C 7.99939,23.327 8.67139,23.998 9.49939,23.998C 10.3274,23.998 10.9994,23.327 10.9994,22.498L 10.9994,18.998L 12.9994,18.998L 12.9994,22.498C 12.9994,23.327 13.6714,23.998 14.4994,23.998C 15.3274,23.998 15.9994,23.327 15.9994,22.498L 15.9994,18.998L 16.9994,18.998C 17.5504,18.998 17.9994,18.5491 17.9994,17.998L 17.9994,7.99805L 5.99939,7.99805L 5.99939,17.998 Z ' })
                )
            );
        }
    }]);

    return MdiAndroid;
}(React.Component);

exports.default = MdiAndroid;
module.exports = exports['default'];