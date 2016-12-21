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

var MdiEmoticon = function (_React$Component) {
    _inherits(MdiEmoticon, _React$Component);

    function MdiEmoticon() {
        _classCallCheck(this, MdiEmoticon);

        return _possibleConstructorReturn(this, (MdiEmoticon.__proto__ || Object.getPrototypeOf(MdiEmoticon)).apply(this, arguments));
    }

    _createClass(MdiEmoticon, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,17.4981C 14.3294,17.4981 16.3044,16.0421 17.1064,13.9981L 6.8924,13.9981C 7.6944,16.0421 9.66939,17.4981 11.9994,17.4981 Z M 8.49939,10.9981C 9.32838,10.9981 9.99939,10.3261 9.99939,9.49807C 9.99939,8.67007 9.32838,7.99807 8.49939,7.99807C 7.67039,7.99807 6.99939,8.67007 6.99939,9.49807C 6.99939,10.3261 7.67039,10.9981 8.49939,10.9981 Z M 15.4994,10.9981C 16.3284,10.9981 16.9994,10.3261 16.9994,9.49807C 16.9994,8.67007 16.3284,7.99807 15.4994,7.99807C 14.6704,7.99807 13.9994,8.67007 13.9994,9.49807C 13.9994,10.3261 14.6704,10.9981 15.4994,10.9981 Z M 11.9994,19.9981C 7.57939,19.9981 3.99939,16.4161 3.99939,11.9981C 3.99939,7.58007 7.57939,3.99807 11.9994,3.99807C 16.4194,3.99807 19.9994,7.58007 19.9994,11.9981C 19.9994,16.4161 16.4194,19.9981 11.9994,19.9981 Z M 11.9944,1.99807C 6.46739,1.99807 1.99939,6.47507 1.99939,11.9981C 1.99939,17.5211 6.46739,21.9981 11.9944,21.9981C 17.5204,21.9981 21.9994,17.5211 21.9994,11.9981C 21.9994,6.47507 17.5204,1.99807 11.9944,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiEmoticon;
}(React.Component);

exports.default = MdiEmoticon;
module.exports = exports['default'];