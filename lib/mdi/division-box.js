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

var MdiDivisionBox = function (_React$Component) {
    _inherits(MdiDivisionBox, _React$Component);

    function MdiDivisionBox() {
        _classCallCheck(this, MdiDivisionBox);

        return _possibleConstructorReturn(this, (MdiDivisionBox.__proto__ || Object.getPrototypeOf(MdiDivisionBox)).apply(this, arguments));
    }

    _createClass(MdiDivisionBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9994,12.9981L 16.9994,10.9981L 6.9994,10.9981L 6.9994,12.9981L 16.9994,12.9981 Z M 18.9994,2.99813C 20.1024,2.99813 20.9994,3.89413 20.9994,4.99813L 20.9994,18.9981C 20.9994,20.1021 20.1024,20.9981 18.9994,20.9981L 4.9994,20.9981C 3.8934,20.9981 2.9994,20.1021 2.9994,18.9981L 2.9994,4.99813C 2.9994,3.89413 3.8934,2.99813 4.9994,2.99813L 18.9994,2.99813 Z M 12,7C 11.4477,7 11,7.44772 11,8C 11,8.55229 11.4477,9 12,9C 12.5523,9 13,8.55229 13,8C 13,7.44772 12.5523,7 12,7 Z M 12,15C 11.4477,15 11,15.4477 11,16C 11,16.5523 11.4477,17 12,17C 12.5523,17 13,16.5523 13,16C 13,15.4477 12.5523,15 12,15 Z ' })
                )
            );
        }
    }]);

    return MdiDivisionBox;
}(React.Component);

exports.default = MdiDivisionBox;
module.exports = exports['default'];