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

var MdiBriefcaseUpload = function (_React$Component) {
    _inherits(MdiBriefcaseUpload, _React$Component);

    function MdiBriefcaseUpload() {
        _classCallCheck(this, MdiBriefcaseUpload);

        return _possibleConstructorReturn(this, (MdiBriefcaseUpload.__proto__ || Object.getPrototypeOf(MdiBriefcaseUpload)).apply(this, arguments));
    }

    _createClass(MdiBriefcaseUpload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.9994,5.99807C 21.1044,5.99807 21.9994,6.89307 21.9994,7.99807L 21.9994,18.9981C 21.9994,20.1031 21.1044,20.9981 19.9994,20.9981L 3.99939,20.9981C 2.89339,20.9981 1.99939,20.1031 1.99939,18.9981L 2.01038,7.99807C 2.01038,6.89307 2.89339,5.99807 3.99939,5.99807L 7.99939,5.99807L 7.99939,3.99807L 9.99939,1.99807L 13.9994,1.99807L 15.9994,3.99807L 15.9994,5.99807L 19.9994,5.99807 Z M 9.99939,3.99807L 9.99939,5.99807L 13.9994,5.99807L 13.9994,3.99807L 9.99939,3.99807 Z M 12,9.00001L 7,14L 10,14L 10,18L 14,18L 14,14L 17,14L 12,9.00001 Z ' })
                )
            );
        }
    }]);

    return MdiBriefcaseUpload;
}(React.Component);

exports.default = MdiBriefcaseUpload;
module.exports = exports['default'];