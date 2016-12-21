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

var MdiStove = function (_React$Component) {
    _inherits(MdiStove, _React$Component);

    function MdiStove() {
        _classCallCheck(this, MdiStove);

        return _possibleConstructorReturn(this, (MdiStove.__proto__ || Object.getPrototypeOf(MdiStove)).apply(this, arguments));
    }

    _createClass(MdiStove, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.99999,14L 7.99999,14L 11,17L 9,17L 5.99999,14 Z M 4,4.00001L 5,4.00001L 5,3.00001C 5,2.44772 5.44771,2.00001 6,2.00001L 10,2.00001C 10.5523,2.00001 11,2.44772 11,3.00001L 11,4.00001L 13,4.00001L 13,3.00002C 13,2.44773 13.4477,2.00002 14,2.00002L 18,2.00002C 18.5523,2.00002 19,2.44773 19,3.00002L 19,4.00001L 20,4.00001C 21.1046,4.00001 22,4.89544 22,6.00001L 22,19C 22,20.1046 21.1046,21 20,21L 20,22L 17,22L 17,21L 7,21L 7,22L 4,22L 4,21C 2.89543,21 2,20.1046 2,19L 2,6.00001C 2,4.89544 2.89543,4.00001 4,4.00001 Z M 18,7C 18.5523,7 19,7.44772 19,8C 19,8.55229 18.5523,9 18,9C 17.4477,9 17,8.55229 17,8C 17,7.44772 17.4477,7 18,7 Z M 14,7C 14.5523,7 15,7.44772 15,8C 15,8.55229 14.5523,9 14,9C 13.4477,9 13,8.55229 13,8C 13,7.44772 13.4477,7 14,7 Z M 20,6L 4,6L 4,10L 20,10L 20,6 Z M 4,19L 20,19L 20,12L 4,12L 4,19 Z M 6.00001,7C 6.55229,7 7.00001,7.44772 7.00001,8C 7.00001,8.55228 6.55229,9 6.00001,9C 5.44772,9 5.00001,8.55228 5.00001,8C 5.00001,7.44772 5.44773,7 6.00001,7 Z M 13,14L 15,14L 18,17L 16,17L 13,14 Z ' })
                )
            );
        }
    }]);

    return MdiStove;
}(React.Component);

exports.default = MdiStove;
module.exports = exports['default'];