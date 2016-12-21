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

var MdiTrafficLight = function (_React$Component) {
    _inherits(MdiTrafficLight, _React$Component);

    function MdiTrafficLight() {
        _classCallCheck(this, MdiTrafficLight);

        return _possibleConstructorReturn(this, (MdiTrafficLight.__proto__ || Object.getPrototypeOf(MdiTrafficLight)).apply(this, arguments));
    }

    _createClass(MdiTrafficLight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0004,8.99807C 10.8954,8.99807 10.0004,8.10306 10.0004,6.99807C 10.0004,5.89307 10.8954,4.99807 12.0004,4.99807C 13.1054,4.99807 14.0004,5.89307 14.0004,6.99807C 14.0004,8.10306 13.1054,8.99807 12.0004,8.99807 Z M 12.0004,13.9981C 10.8954,13.9981 10.0004,13.1031 10.0004,11.9981C 10.0004,10.8931 10.8954,9.99807 12.0004,9.99807C 13.1054,9.99807 14.0004,10.8931 14.0004,11.9981C 14.0004,13.1031 13.1054,13.9981 12.0004,13.9981 Z M 12.0004,18.9981C 10.8954,18.9981 10.0004,18.1031 10.0004,16.9981C 10.0004,15.8931 10.8954,14.9981 12.0004,14.9981C 13.1054,14.9981 14.0004,15.8931 14.0004,16.9981C 14.0004,18.1031 13.1054,18.9981 12.0004,18.9981 Z M 19.9994,9.99807L 16.9994,9.99807L 16.9994,8.85607C 18.7224,8.41106 19.9994,6.86007 19.9994,4.99807L 16.9994,4.99807L 16.9994,3.99807C 16.9994,3.44607 16.5524,2.99807 15.9994,2.99807L 7.99939,2.99807C 7.44739,2.99807 6.99939,3.44607 6.99939,3.99807L 6.99939,4.99807L 3.99939,4.99807C 3.99939,6.86007 5.2774,8.41106 6.99939,8.85607L 6.99939,9.99807L 3.99939,9.99807C 3.99939,11.8601 5.2774,13.4111 6.99939,13.8561L 6.99939,14.9981L 3.99939,14.9981C 3.99939,16.8601 5.2774,18.4111 6.99939,18.8561L 6.99939,19.9981C 6.99939,20.5501 7.44739,20.9981 7.99939,20.9981L 15.9994,20.9981C 16.5524,20.9981 16.9994,20.5501 16.9994,19.9981L 16.9994,18.8561C 18.7224,18.4111 19.9994,16.8601 19.9994,14.9981L 16.9994,14.9981L 16.9994,13.8561C 18.7224,13.4111 19.9994,11.8601 19.9994,9.99807 Z ' })
                )
            );
        }
    }]);

    return MdiTrafficLight;
}(React.Component);

exports.default = MdiTrafficLight;
module.exports = exports['default'];