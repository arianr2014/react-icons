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

var MdiBriefcaseDownload = function (_React$Component) {
    _inherits(MdiBriefcaseDownload, _React$Component);

    function MdiBriefcaseDownload() {
        _classCallCheck(this, MdiBriefcaseDownload);

        return _possibleConstructorReturn(this, (MdiBriefcaseDownload.__proto__ || Object.getPrototypeOf(MdiBriefcaseDownload)).apply(this, arguments));
    }

    _createClass(MdiBriefcaseDownload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,18.9981L 6.99939,13.9981L 9.99939,13.9981L 9.99939,9.99807L 13.9994,9.99807L 13.9994,13.9981L 16.9994,13.9981M 9.99939,3.99807L 13.9994,3.99807L 13.9994,5.99807L 9.99939,5.99807M 19.9994,5.99807L 15.9994,5.99807L 15.9994,3.99807L 13.9994,1.99807L 9.99939,1.99807L 7.99939,3.99807L 7.99939,5.99807L 3.99939,5.99807C 2.8934,5.99807 2.01038,6.89306 2.01038,7.99807L 1.99939,18.9981C 1.99939,20.1031 2.8934,20.9981 3.99939,20.9981L 19.9994,20.9981C 21.1044,20.9981 21.9994,20.1031 21.9994,18.9981L 21.9994,7.99807C 21.9994,6.89306 21.1044,5.99807 19.9994,5.99807 Z ' })
                )
            );
        }
    }]);

    return MdiBriefcaseDownload;
}(React.Component);

exports.default = MdiBriefcaseDownload;
module.exports = exports['default'];