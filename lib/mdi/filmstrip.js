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

var MdiFilmstrip = function (_React$Component) {
    _inherits(MdiFilmstrip, _React$Component);

    function MdiFilmstrip() {
        _classCallCheck(this, MdiFilmstrip);

        return _possibleConstructorReturn(this, (MdiFilmstrip.__proto__ || Object.getPrototypeOf(MdiFilmstrip)).apply(this, arguments));
    }

    _createClass(MdiFilmstrip, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.9994,8.99805L 15.9994,8.99805L 15.9994,6.99805L 17.9994,6.99805M 17.9994,12.998L 15.9994,12.998L 15.9994,10.998L 17.9994,10.998M 17.9994,16.998L 15.9994,16.998L 15.9994,14.998L 17.9994,14.998M 7.99939,8.99805L 5.99939,8.99805L 5.99939,6.99805L 7.99939,6.99805M 7.99939,12.998L 5.99939,12.998L 5.99939,10.998L 7.99939,10.998M 7.99939,16.998L 5.99939,16.998L 5.99939,14.998L 7.99939,14.998M 17.9994,2.99805L 17.9994,4.99805L 15.9994,4.99805L 15.9994,2.99805L 7.99939,2.99805L 7.99939,4.99805L 5.99939,4.99805L 5.99939,2.99805L 3.99939,2.99805L 3.99939,20.998L 5.99939,20.998L 5.99939,18.998L 7.99939,18.998L 7.99939,20.998L 15.9994,20.998L 15.9994,18.998L 17.9994,18.998L 17.9994,20.998L 19.9994,20.998L 19.9994,2.99805L 17.9994,2.99805 Z ' })
                )
            );
        }
    }]);

    return MdiFilmstrip;
}(React.Component);

exports.default = MdiFilmstrip;
module.exports = exports['default'];